"use client";
import { ProductProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ProductCard = (product: ProductProps) => {

  
  return (
    <div className="w-64 h-[500px] flex items-center justify-center">
      <div className="flex flex-col max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        {/* <img
          src={`http://localhost:3000/image/view/${product.image}`}
          className="w-48"
        /> */}
        <Image
          src={`http://localhost:3000/image/view/${product.image}`}
          alt=""
          width={250}
          height={250}
          className="w-full h-72"
        />
        <div className="p-4 h-36 flex flex-col justify-between">
          <h1 className="text-gray-900 font-bold text-2xl">{product.name}</h1>
          {/* <p className="mt-2 text-gray-600 text-sm">{product.description}</p> */}
          <div className="flex item-center mt-2"></div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">
              ${product.price}
            </h1>
            <Link
              className="px-3 py-2 bg-blue-800 text-white text-xs font-bold flex items-center gap-2 uppercase"
              href={`/myapp/product/${product.id}`}
            >
            <MdOutlineKeyboardDoubleArrowRight/>  See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
