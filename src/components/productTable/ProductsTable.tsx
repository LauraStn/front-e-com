"use client";
import { getAllProducts } from "@/services/product";
import { ProductProps } from "@/utils/types";
import React, { Fragment, useEffect, useState } from "react";
import ProductsRow from "./ProductsRow";
import CreateProductModal from "../modals/product/CreateProductModal";

const ProductsTable = () => {
  const [productList, setProductList] = useState<ProductProps[]>();

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">All Products</h3>
          <span className="text-base font-normal text-gray-500">
            <CreateProductModal />
            {/* This is a list of all crypto selling by users */}
          </span>
        </div>
      </div>
      <div className=" w-full w-6/6">
        <div className="bg-white shadow-md rounded">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 w-10 text-left">Product</th>
                <th className="py-3 px-6 w-96 text-left">Description</th>
                <th className="py-3 px-6 w-10 text-center">Stock</th>
                <th className="py-3 px-6 w-10 text-center">Price</th>
                <th className="py-3 px-6 w-10 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {productList &&
                productList?.map((item) => {
                  return (
                    <Fragment key={item.id}>
                      <ProductsRow
                        product={{
                          categoryId: item.categoryId,
                          description: item.description,
                          id: item.id,
                          image: item.image,
                          name: item.name,
                          price: item.price,
                          stock: item.stock,
                        }}
                      />
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

export default ProductsTable;
