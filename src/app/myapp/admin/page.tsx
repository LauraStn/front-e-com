import CategoryTable from "@/components/categoryTable/CategoryTable";
import ProductsTable from "@/components/productTable/ProductsTable";
import UsersTable from "@/components/userTable/UserTable";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <ProductsTable />
      <div className="flex flex-col justify-between lg:flex-row gap-2">
        <UsersTable />
        <CategoryTable />
      </div>
    </div>
  );
};

export default page;
