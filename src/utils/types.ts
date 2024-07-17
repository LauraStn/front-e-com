export type RegisterProps = {
  email: string;
  firstName: string;
  lastName: string;
  pseudo: string;
  password: string;
  gdpr: boolean;
};

export type LoginProps = {
  email?: string;
  pseudo?: string;
  password: string;
};

export type ProductProps = {
  categoryId: string;
  description: string;
  id?: string;
  image: string;
  name: string;
  price: number;
  stock: number;
};

export type CartProps = {
  cartItems: CartItemProps[];
  totalCart: number;
  totalQuantity: number;
};

export type actionProps = {
  type: any;
  payload: any;
};

export type stateProps = {
  quantity: number;
  product: ProductProps | null;
};

export type CategoryProps = {
  id: string;
  name: string;
};

export type CartItemProps = {
  id: string;
  cartId: string;
  price: number;
  quantity: number;
  product: ProductProps;
};
