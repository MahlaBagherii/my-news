"use client";
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // لاجیک ورودی
    // console.log({ username, password, rememberMe });
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg">
      <div className="flex flex-col items-center mb-24">
        <img
          src="/icons/Group 31.svg"
          alt="Tree News"
          width={80}
          height={80}
          className="mb-2"
        />
        <h2 className="text-xl font-bold text-gray-800">Tree news</h2>
      </div>
      <div className="flex items-center justify-between my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 whitespace-nowrap">
          ورود به حساب کاربری
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <form onSubmit={handleLogin} className="space-y-4 mb-20">
        <div>
          <label htmlFor="username" className="block text-right text-gray-700">
            نام کاربری
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300  rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-right text-gray-700">
            رمز عبور
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-gray-500">
            !فراموشی رمز
          </a>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-[#AC2043] transition rounded-[15px]"
        >
          ورود به حساب
        </button>
        <div className="flex items-center justify-end ">
          <label
            htmlFor="rememberMe"
            className="ml-2 text-gray-700 text-sm mr-3"
          >
            مرا به خاطر بسپار
          </label>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 "
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
