import { isAdmin } from "@/utils/isAdmin";
import { UserProps } from "@/utils/types";
import React from "react";
import BanUserModal from "../modals/user/BanUserModal";
import DeleteUserModal from "../modals/user/DeleteUserModal";

const UsersRow = ({ user }: { user: UserProps }) => {
  const role = isAdmin();
  isAdmin();
  return (
    <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
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
          <span className="bg-green-500 py-1 px-3 rounded-full text-xs"></span>
        ) : (
          <span className="bg-red-500 py-1 px-3 rounded-full text-xs"></span>
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
