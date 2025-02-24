"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import token from "../../api/token";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      try {
        const response = await token(username, password);

        if (response?.access) {
          console.log("Login successful");
          router.push("/panel/dashboard");
        } else {
          console.error("Invalid credentials");
          alert("نام کاربری یا رمز عبور اشتباه است.");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
      }
    } else {
      alert("لطفاً نام کاربری و رمز عبور را وارد کنید.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg">
      <div className="flex flex-col items-center mb-16">
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
            className="w-full px-4 py-2 border border-gray-300  rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-500 mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className=" text-gray-700 flex justify-between mt-2"
          >
            <p>رمز عبور</p>
            <div className="flex items-center justify-between">
              <Link
                href="/forgetPassword"
                className="text-sm text-gray-500 mt-2 mb-2"
              >
                فراموشی رمز !
              </Link>
            </div>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-500 mb-6"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-[#AC2043] transition rounded-[15px]"
        >
          ورود به حساب
        </button>
        <div className="flex items-center justify-end flex-row-reverse ">
          <label
            htmlFor="rememberMe"
            className="ml-2 text-gray-700 text-sm mr-3  "
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
