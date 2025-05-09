import { removeOneProduct } from "@/services/cart";
import { CartItemProps, ProductProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { IoTrashOutline } from "react-icons/io5";

const ProductCart = ({ cartItem }: { cartItem: CartItemProps }) => {
  const id = cartItem.id;
  const router = useRouter();
  const removeItem = async () => {
    await removeOneProduct(id).then((res) => {
      toast.success(res.data.msg);
      // router.push('/myapp/cart', {scroll: false})
    });
  };
  return (
    <div className="justify-between h-60 text-black mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={`http://localhost:3000/image/view/${cartItem.product.image}`}
        alt={cartItem.product.name}
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">
            {" "}
            {cartItem.product.name}{" "}
          </h2>
          <p className="mt-1 text-xs text-gray-700">
            {cartItem.product.price}${" "}
          </p>
        </div>
        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            {/* <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              -{" "}
            </span> */}
            <p>Quantity: {cartItem.quantity} </p>
            {/* <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              defaultValue={cartItem.quantity}
              min="1"
            /> */}
            {/* <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              +{" "}
            </span> */}
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={removeItem}>
              <IoTrashOutline className="cursor-pointer" />
            </button>
            {/* <p className="text-sm">259.000 ₭</p> */}

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
