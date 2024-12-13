import React from "react";

const UserRoleNotification = ({ isOpen, user, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[331px] h-[436px] rounded-[20px] p-6 shadow-lg max-w-md relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <img src="/icons/close-circle2.svg" alt="close" />
        </button>

        <h3 className="text-center mt-5">تعریف نقش</h3>

        <div className="text-center text-gray-700 mt-8">
          <p>کاربر: {user?.title}</p>
        </div>

        <div className="w-[186px] h-12 mt-14 mr-10 items-center">
          <span className="absolute mt-4 mr-[180px]">
            <img
              src="/icons/arrow-down.svg"
              alt="Custom Icon"
              className="w-5 h-5"
            />
          </span>
          <select className="w-[215px] h-[50px] border rounded-[5px] pr-4 ml-14 py-2 text-gray-700 appearance-none bg-transparent">
            <option value="default">انتخاب نقش</option>
            <option value="top">خبرنگار</option>
            <option value="middle">ادمین</option>
          </select>
        </div>

        <div className="flex justify-center mt-28">
          <button className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 w-[122px] h-12 rounded-[10px]">
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRoleNotification;
