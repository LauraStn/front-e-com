"use client";
import { UserProps } from "@/utils/types";
import React, { Fragment, useEffect, useState } from "react";
import { getAllUsers } from "@/services/user";
import UsersRow from "./UserRow";

const UsersTable = () => {
  const [userList, setUserList] = useState<UserProps[]>();

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUserList(res.data);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  return (
    <div className="bg-white overflow-auto flex-1 lg:overflow-visible shadow rounded-lg p-4 mb-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-bold text-gray-900 mb-2">All Users</h3>
        </div>
      </div>
      <div className="">
        <div className="bg-white shadow-md rounded">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 w-32 text-left">Email</th>
                <th className="py-3 px-6 w-32 text-left">Full Name</th>
                <th className="py-3 px-6 w-32 text-center">Pseudo</th>
                <th className="py-3 px-6 w-32 text-center">Is Active</th>
                <th className="py-3 px-6 w-10 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {userList &&
                userList?.map((user) => {
                  return (
                    <Fragment key={user.id}>
                      <UsersRow user={user} />
                    </Fragment>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
