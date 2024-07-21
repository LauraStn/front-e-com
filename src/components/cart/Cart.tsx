import React, { Fragment, useContext, useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import {
  getAllCartProducts,
  getMyCart,
  removeAllProducts,
} from "@/services/cart";
import { CartItemProps } from "@/utils/types";
import { CartContext } from "@/context/cartContext";
import { IoTrashOutline } from "react-icons/io5";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const [productItem, setProductItem] = useState<CartItemProps[]>();
  useEffect(() => {
    getAllCartProducts().then((res) => {
      setProductItem(res.data);
    });
    // getMyCart().then((res) => {
    //   setCart(res.data);
    // });
  }, [setCart]);
  const removeItem = async () => {
    await removeAllProducts().then((res) => {
      toast.success(res.data.msg);
      window.location.reload()
    });
  };
  // return (
  //   <div className="h-full pt-20">
  //     <h2 className="mb-10 text-center text-2xl font-bold">
  //       Products in your cart
  //     </h2>
  //     <div>
  //       <h2 className="mb-10 text-center text-2xl font-bold">
  //         Your cart is empty
  //       </h2>
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-gray-100 min-h-full pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">
        Products in your cart
      </h1>

      <div className="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {productItem &&
            productItem.map((item) => (
              <Fragment key={item.id}>
                <ProductCart
                  cartItem={{
                    id: item.id,
                    cartId: item.cartId,
                    price: item.price,
                    quantity: item.quantity,
                    product: {
                      categoryId: item.product.categoryId,
                      description: item.product.description,
                      id: item.product.id,
                      image: item.product.image,
                      name: item.product.name,
                      price: item.product.price,
                      stock: item.product.stock,
                    },
                  }}
                />
              </Fragment>
            ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <button
          onClick={removeItem} 
           className="flex gap-3 items-center mb-6 px-5 rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:bg-red-600">
            clear cart <IoTrashOutline className="cursor-pointer" />
          </button>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Quantity of products</p>
            <p className="text-gray-700">{cart && cart.totalQuantity}</p>
          </div>
          {/* <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div> */}
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                $ {cart && cart.totalCart} USD
              </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
