import Carousel from "@/components/carousel/Carousel";
import UsersTable from "@/components/userTable/UserTable";
import { validateAccount } from "@/services/auth";
import React, { useEffect } from "react";

const page = () => {
  return (
    <>
    
      <Carousel />
    </>
  );
};

export default page;
