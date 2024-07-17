import { Dispatch, SetStateAction, createContext } from "react";
import { CartProps } from "@/utils/types";

export type typeContext = {
  cart: CartProps;
  setCart: Dispatch<SetStateAction<CartProps>>;
};

const defaultCart: CartProps = {
  cartItems: [],
  totalQuantity: 0,
  totalCart: 0,
};

export const CartContext = createContext<typeContext>({
  cart: defaultCart,
  setCart: () => {},
});

