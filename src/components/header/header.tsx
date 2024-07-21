"use client";
import { CartContext } from "@/context/cartContext";
import { isAdmin } from "@/utils/isAdmin";
import { isConnected } from "@/utils/isConnected";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Header = () => {
  const { push } = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const [connect, setIsConnect] = useState(false);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    setAdmin(isAdmin);
    setIsConnect(isConnected);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsConnect(false);
    push("/myapp");
  };
  return (
    <header className="header sticky top-0 bg-[#53AC47] text-white  shadow-md flex items-center justify-between">
      <Image
        src={"/images/micro.png"}
        alt=""
        width={600}
        height={66}
        className="h-full md:w-1/3"
      ></Image>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-blue-800 border-opacity-0 hover:border-opacity-100 hover:text-blue-800 duration-200 cursor-pointer active">
            <a href="/myapp">Home</a>
          </li>

          <li className="p-4 border-b-2 border-blue-800 border-opacity-0 hover:border-opacity-100 hover:text-blue-800 duration-200 cursor-pointer">
            <Link href="/myapp/product">Products</Link>
          </li>
          {connect ? (
            <li className="p-4 border-b-2 border-blue-800 border-opacity-0 hover:border-opacity-100 hover:text-blue-800 duration-200 cursor-pointer">
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <>
              <li className="p-4 border-b-2 border-blue-800 border-opacity-0 hover:border-opacity-100 hover:text-blue-800 duration-200 cursor-pointer">
                <Link href="/myapp/register">Register</Link>
              </li>
              <li className="p-4 border-b-2 border-blue-800 border-opacity-0 hover:border-opacity-100 hover:text-blue-800 duration-200 cursor-pointer">
                <Link href="/myapp/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end pr-4">
        {admin ? (
          <Tooltip title={"Go to manage dashboard "}>
            <a className="" href="/myapp/admin">
              <svg
                className="h-8 p-1 hover:text-blue-800 svg-inline--fa fa-user fa-w-14 fa-9x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="user"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                ></path>
              </svg>
            </a>
          </Tooltip>
        ) : (
          <Tooltip title={"Go to your profile"}>
            <a className="" href="/myapp/profil">
              <svg
                className="h-8 p-1 hover:text-blue-800 svg-inline--fa fa-user fa-w-14 fa-9x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="user"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                ></path>
              </svg>
            </a>
          </Tooltip>
        )}

        <a href="">
          <svg
            className="h-8 p-1 hover:text-blue-800 duration-200 svg-inline--fa fa-search fa-w-16 fa-9x"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
            ></path>
          </svg>
        </a>

        {connect ? (
          <Tooltip title={"Go to cart"}>
            <a href="/myapp/cart" className="relative">
              <svg
                className="h-8 p-1 hover:text-blue-800 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="shopping-cart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                ></path>
              </svg>
              {!cart.totalQuantity ? (
                <span></span>
              ) : (
                <span className="absolute z-50 -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-white">
                  {cart && cart.totalQuantity}
                </span>
              )}
            </a>
          </Tooltip>
        ) : (
          <span></span>
        )}
      </div>
    </header>
  );
};

export default Header;
