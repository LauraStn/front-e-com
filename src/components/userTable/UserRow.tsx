import { isAdmin } from "@/utils/isAdmin";
import { ProductProps, UserProps } from "@/utils/types";
import React from "react";
import Image from "next/image";
import DeleteProductModal from "../modals/product/DeleteProductModal";
import UpdateProductModal from "../modals/product/UpdateProductModal";
import BanUserModal from "../modals/user/BanUserModal";
import DeleteUserModal from "../modals/user/DeleteUserModal";

const UsersRow = ({ user }: { user: UserProps }) => {
  const role = isAdmin();
  isAdmin();
  return (
    <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          {/* <div className="mr-2">
            <Image
              className="w-6 h-6 rounded-full"
              src={`http://localhost:3000/image/view/${product?.image}`}
              alt={""}
              width={24}
              height={24}
            />
          </div> */}
          <span className="font-medium">{user.email} </span>
        </div>
      </td>

      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          {user.firstName} {user.lastName}
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">{user.pseudo}</div>
      </td>
      <td className="py-3 px-6 text-center">
        {user.isActive ? (
          <span className="bg-green-500 text-purple-600 py-1 px-3 rounded-full text-xs"></span>
        ) : (
          <span className="bg-red-500 text-purple-600 py-1 px-3 rounded-full text-xs"></span>
        )}
      </td>
      <td className="py-3 px-6 text-center">
        {role ? (
          <div className="flex item-center justify-center">
            <DeleteUserModal user={user} />
            <BanUserModal user={user} />
          </div>
        ) : (
          <div className="flex item-center justify-center"></div>
        )}
      </td>
    </tr>
  );
};

export default UsersRow;
