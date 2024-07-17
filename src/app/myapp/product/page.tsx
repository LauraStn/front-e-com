"use client";
import ProductCard from "@/components/cards/ProductCard";
import Example from "@/components/filter/ProductFilter";
import { getAllProducts } from "@/services/product";
import { ProductProps } from "@/utils/types";
import React, { Fragment, useEffect, useState } from "react";

const page = () => {
  const [productList, setProdudctList] = useState<ProductProps[]>();
  useEffect(() => {
    getAllProducts().then((res) => {
      setProdudctList(res.data);
    });
  }, []);
  return (
    <main className="bg-white">
      <Example>
        {productList &&
          productList.map((product) => {
            return (
              <Fragment key={product.id}>
                <ProductCard
                  categoryId={product.categoryId}
                  description={product.description}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  stock={product.stock}
                />
              </Fragment>
            );
          })}
      </Example>
    </main>
  );
};

export default page;
