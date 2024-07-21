import CategoryTable from "@/components/categoryTable/CategoryTable";
import ProductsTable from "@/components/productTable/ProductsTable";
import UsersTable from "@/components/userTable/UserTable";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductsTable />
      <UsersTable />
      <CategoryTable/>
    </div>
  );
};

export default page;
