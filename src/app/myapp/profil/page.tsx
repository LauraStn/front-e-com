'use client'
import { getOneUser } from "@/services/user";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    getOneUser().then((res) => {
      console.log(res.data
      );
    });
  }, []);
  return <div>user profile</div>;
};

export default page;
