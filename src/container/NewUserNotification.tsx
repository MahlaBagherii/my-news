import React, { useState } from "react";

const RegisterUserModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[739px] h-[688px] bg-white p-8 rounded-[20px] shadow-lg relative ">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <img src="/icons/close-circle2.svg" alt="close" />
        </button>

        <h3 className="text-center mb-8">ثبت نام کاربر جدید</h3>

        <form className="space-y-6 mr-10 mt-16">
          <div className="flex items-start gap-4">
            <div className="flex flex-col w-[337px]">
              <label className="text-sm font-medium mb-2">نام کاربری</label>
              <input
                type="text"
                className="h-12 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-[186px] relative mr-14">
              <label className="text-sm font-medium mb-2">انتخاب نقش</label>
              <select className="h-12 border border-gray-300 rounded pr-4 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="default">انتخاب نقش</option>
                <option value="top">خبرنگار</option>
                <option value="middle">ادمین</option>
              </select>
              <img
                src="/icons/arrow-down.svg"
                alt="dropdown"
                className="absolute top-[45px] right-3 w-5 h-5 pointer-events-none mr-[140px]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">شماره موبایل</label>
            <input
              type="text"
              className="w-[337px] h-12 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm font-medium mb-2">رمز عبور</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-[337px] h-12 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src="/icons/eye.svg"
              alt="show password"
              className="absolute top-[42px] right-3 w-6 h-6 cursor-pointer mr-72"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm font-medium mb-2">تکرار رمز عبور</label>
            <input
              type={showRepeatPassword ? "text" : "password"}
              className="w-[337px] h-12 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src="/icons/eye.svg"
              alt="show password"
              className="absolute top-[42px] right-3 w-6 h-6 cursor-pointer mr-72"
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            />
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="send_password" className="w-5 h-5" />
            <label htmlFor="send_password" className="text-sm text-gray-600">
              رمز عبور به شماره موبایل کاربر ارسال گردد
            </label>
          </div>

          <div className="flex justify-center !mt-[80px]">
            <button
              type="submit"
              className="w-[122px] h-12 rounded-[10px] bg-blue-500 text-white font-medium hover:bg-blue-600"
            >
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUserModal;
