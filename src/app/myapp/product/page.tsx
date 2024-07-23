"use client";
import ProductCard from "@/components/cards/ProductCard";
import Example from "@/components/filter/ProductFilter";
import { getAllProducts } from "@/services/product";
import { ProductProps } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";

const page = () => {
  const [productList, setProdudctList] = useState<ProductProps[]>();
  const params = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const category = params.get("category");
  useEffect(() => {
    getAllProducts().then((res) => {
      setProdudctList(res.data);
      if (category) {
        setFilteredProducts(
          res.data.filter(
            (product: ProductProps) => product.categoryId === category
          )
        );
      } else {
        setFilteredProducts(res.data);
      }
    });
  }, [category]);

  // console.log(params.get("category"));

  // const productFiltered = () => {
  //   if (category !== undefined) {
  //     setProdudctList(
  //       productList?.filter((product) => {
  //         return product.categoryId === category;
  //       })
  //     );
  //   }
  //   return productList;
  // };
  // console.log(productList);

  return (
    <main className="bg-white">
      <Example>
        {filteredProducts &&
          filteredProducts.map((product) => {
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
