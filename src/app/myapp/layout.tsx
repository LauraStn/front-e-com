"use client";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header/header";
import { CartContext } from "@/context/cartContext";
import { CartProps } from "@/utils/types";
import { useEffect, useState } from "react";
import { getMyCart } from "@/services/cart";

const defaultCart: CartProps = {
  cartItems: [],
  totalCart: 0,
  totalQuantity: 0,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartProps>(defaultCart);

  useEffect(() => {
   
    getMyCart().then((res) => {
      setCart(res.data); 
    });
  }, []); 
  return (
    <div className="bg-white">
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Toaster position="bottom-center" reverseOrder={false} />
        {children}
      </CartContext.Provider>
    </div>
  );
}
