"use client";

import React, { useState } from "react";
import RegisterUserModal from "../../../container/NewUserNotification";
import BlockUserModal from "../../../container/BlockNotification";
import UserRoleNotification from "../../../container/UserRoleNotification";

interface User {
  id: number;
  title: string;
  category: string;
  date: string;
  status: boolean;
}

const Page: React.FC = () => {
  const [showNewUserModal, setShowNewUserModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showBlockUserModal, setShowBlockUserModal] = useState<boolean>(false);
  const [showRoleModal, setShowRoleModal] = useState<boolean>(false);

  const users: User[] = [
    {
      id: 1,
      title: "مسعود فاطمی",
      category: "09123587846",
      date: "ادمین",
      status: true
    },
    {
      id: 2,
      title: "ایلیا ملک زاده",
      category: "09123587846",
      date: "خبرنگار",
      status: false
    },
    {
      id: 3,
      title: "داوود بیزاکودیل",
      category: "09123587846",
      date: "ادمین",
      status: true
    },
    {
      id: 4,
      title: "داوود بیزاکودیل",
      category: "09123587846",
      date: "ادمین",
      status: true
    }
  ];

  const openRoleModal = (user: User): void => {
    setSelectedUser(user);
    setShowRoleModal(true);
  };

  const closeRoleModal = (): void => {
    setSelectedUser(null);
    setShowRoleModal(false);
  };

  const openBlockModal = (user: User): void => {
    setSelectedUser(user);
    setShowBlockUserModal(true);
  };

  const closeBlockModal = (): void => {
    setSelectedUser(null);
    setShowBlockUserModal(false);
  };

  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px]">
        <div className="flex items-center justify-between px-6 mt-2">
          <h1 className="text-lg font-bold text-gray-700">لیست کاربران</h1>
          <div className="flex items-center gap-3 flex-row-reverse">
            <button
              onClick={() => setShowNewUserModal(true)}
              className="bg-[#2F80ED] text-white w-[140px] h-[48px] rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#256bbd]"
            >
              <img src="/icons/plus.svg" alt="plus" className="w-4 h-4" />
              افزودن کاربر
            </button>
            <div className="relative w-[318px] ml-6">
              <span className="absolute top-3 right-3 text-gray-400">
                <img src="/icons/search.svg" alt="Search" className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="جستجو"
                className="w-full bg-[#F6F6F6] h-[48px] px-12 py-2 border rounded-[10px] text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mx-4 mt-4">
          <table className="w-full bg-white shadow-md rounded-[10px]">
            <thead>
              <tr className="bg-[#AC2043] text-white text-center rounded-xl">
                <th className="py-3 px-4 text-right rounded-r-xl">ردیف</th>
                <th className="py-3 px-12 text-right">نام کاربر</th>
                <th className="py-3 px-24">موبایل</th>
                <th className="py-3 px-24">نقش</th>
                <th className="py-3 px-8">عملیات</th>
                <th className="py-3 px-3 rounded-l-xl">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-red-50"
                  } text-gray-700 first:[&_td]:rounded-r-[10px] last:[&_td]:rounded-l-[10px]`}
                >
                  <td className="py-3 px-4">{user.id}</td>
                  <td className="py-3 px-12 text-right">{user.title}</td>
                  <td className="py-3 px-24 text-center">{user.category}</td>
                  <td className="py-3 px-4 text-center">{user.date}</td>
                  <td className="py-3 px-7 mr-4 text-center flex gap-8">
                    <button onClick={() => openRoleModal(user)}>
                      <img
                        src="/icons/edit.svg"
                        alt="Edit"
                        className="w-5 h-5"
                      />
                    </button>
                    <button onClick={() => openBlockModal(user)}>
                      <img
                        src="/icons/slash.svg"
                        alt="Block"
                        className="w-5 h-5"
                      />
                    </button>
                  </td>
                  <td className="py-3 px-3 text-center">
                    {user.status ? (
                      <img
                        src="/icons/tick.svg"
                        alt="Active"
                        className="w-5 h-5"
                      />
                    ) : (
                      <img
                        src="/icons/close.svg"
                        alt="Inactive"
                        className="w-5 h-5"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <RegisterUserModal
        isOpen={showNewUserModal}
        onClose={() => setShowNewUserModal(false)}
      />

      <UserRoleNotification
        isOpen={showRoleModal}
        user={selectedUser}
        onClose={closeRoleModal}
      />

      {showBlockUserModal && (
        <BlockUserModal user={selectedUser} onClose={closeBlockModal} />
      )}
    </div>
  );
};

export default Page;
