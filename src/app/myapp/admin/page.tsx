import ProductsTable from "@/components/productTable/ProductsTable";
import UsersTable from "@/components/userTable/UserTable";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductsTable />
      <UsersTable />
    </div>
  );
};

export default page;
