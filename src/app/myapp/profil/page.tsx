"use client";
import UserProfile from "@/components/profile/UserProfile";
import { getOneUser } from "@/services/user";
import React, { useEffect } from "react";

const page = () => {
  return <div>
    <UserProfile/>
  </div>;
};

export default page;
