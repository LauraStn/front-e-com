"use client";
import { getAllProducts } from "@/services/product";
import { CategoryProps, ProductProps } from "@/utils/types";
import React, { Fragment, useEffect, useState } from "react";
import CreateProductModal from "../modals/product/CreateProductModal";
import CreateCategoryModal from "../modals/category/CreateCategoryModal";
import { getAllCategory } from "@/services/category";
import CategoriesRow from "./CategoryRow";

const CategoryTable = () => {
  const [categoryList, setCategoryList] = useState<CategoryProps[]>();

  useEffect(() => {
    getAllCategory()
      .then((res) => {
        console.log(res.data);

        setCategoryList(res.data);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  return (
    <div className="bg-white lg:w-2/4 shadow rounded-lg p-4 mb-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-bold text-gray-900 mb-2">All Category</h3>
          <span className="text-base font-normal text-gray-500">
            <CreateCategoryModal />
          </span>
        </div>
      </div>
      <div className=" w-full w-6/6">
        <div className="bg-white shadow-md rounded">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 w-10 text-left">Category name</th>
                <th className="py-3 px-6 w-10 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {categoryList &&
                categoryList?.map((item) => {
                  return (
                    <Fragment key={item.id}>
                      <CategoriesRow category={item} />
                    </Fragment>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
