import { isAdmin } from "@/utils/isAdmin";
import { CategoryProps, ProductProps } from "@/utils/types";
import React from "react";
import Image from "next/image";
import DeleteProductModal from "../modals/product/DeleteProductModal";
import UpdateProductModal from "../modals/product/UpdateProductModal";
import UpdateCategoryModal from "../modals/category/UpdateCategoryModal";
import DeleteCategoryModal from "../modals/category/DeleteCategory";

const CategoriesRow = ({ category }: { category: CategoryProps }) => {
  const role = isAdmin();
  isAdmin();
  return (
    <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium"> {category.name} </span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        {role ? (
          <div className="flex item-center justify-center">
            <UpdateCategoryModal category={category} />
            <DeleteCategoryModal category={category} />
          </div>
        ) : (
          <div className="flex item-center justify-center"></div>
        )}
      </td>
    </tr>
  );
};

export default CategoriesRow;
