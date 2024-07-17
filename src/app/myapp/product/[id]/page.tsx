'use client'
import ProductDetails from "@/components/cards/ProductDetails";
import React from "react";

const page = ({ params }: { params: any }) => {
  return <ProductDetails id={params.id} />;
};

export default page;
