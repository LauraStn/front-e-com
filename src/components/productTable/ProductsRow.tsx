import { isAdmin } from "@/utils/isAdmin";
import { ProductProps } from "@/utils/types";
import React from "react";
import Image from "next/image";
import DeleteProductModal from "../modals/product/DeleteProductModal";
import UpdateProductModal from "../modals/product/UpdateProductModal";

const ProductsRow = ({ product }: { product: ProductProps }) => {
  const role = isAdmin();
  isAdmin();
  return (
    <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <div className="mr-2">
            <Image
              className="w-6 h-6 rounded-full"
              src={`http://localhost:3000/image/view/${product?.image}`}
              alt={""}
              width={24}
              height={24}
            />
          </div>
          <span className="font-medium"> {product.name} </span>
        </div>
      </td>

      <td className="py-3 px-6 text-left">
        <div className="flex items-center">{product.description}</div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">{product.stock}</div>
      </td>
      <td className="py-3 px-6 text-center">
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
          {product.price} $
        </span>
      </td>
      <td className="py-3 px-6 text-center">
        {role ? (
          <div className="flex item-center justify-center">
            <UpdateProductModal product={product} />
            <DeleteProductModal product={product} />
          </div>
        ) : (
          <div className="flex item-center justify-center">
            {/* <BuyOfferModal offer={offer} /> */}
          </div>
        )}
      </td>
    </tr>
  );
};

export default ProductsRow;
