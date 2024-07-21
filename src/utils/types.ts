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
  id: string;
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

export type CreateOrUpdateCategoryProps = {
  name: string;
};

export type CartItemProps = {
  id: string;
  cartId: string;
  price: number;
  quantity: number;
  product: ProductProps;
};

export type CreateProductProps = {
  categoryId: string;
  description: string;
  image: string;
  file?: File[];
  name: string;
  price: number;
  stock: number;
};

export type UpdateProductProps = {
  name: string;
  stock: number;
  price: number;
  description: string;
};

export type UserProps = {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  orders: [];
  pseudo: string;
  isActive: boolean;
};

export type CreateCategoryProps = {
  name: string
}