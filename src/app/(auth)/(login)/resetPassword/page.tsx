"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const router = useRouter();

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log("Password reset successfully!");
      router.push("/panel/dashboard"); // Redirect to dashboard
    } else {
      console.error("Passwords do not match!");
    }
  };
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg">
      <div className="flex flex-col items-center mb-24">
        <img
          src="/icons/Group 31.svg"
          alt="Tree News"
          width={80}
          height={80}
          className="mb-2 mt-5"
        />
        <h2 className="text-xl font-bold text-gray-800">Tree News</h2>
      </div>
      <div className="flex items-center justify-between my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="mb-4 px-4 text-gray-500 whitespace-nowrap">
          تغییر رمز عبور
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <form onSubmit={handleResetPassword}>
        <div className="relative">
          <label
            htmlFor="newPassword"
            className="block text-right text-gray-700"
          >
            رمز عبور جدید
          </label>
          <div className="relative mt-2">
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-500 pl-12"
            />
            <img
              src="/icons/Security.svg"
              alt="toggle password visibility"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
              onClick={() => setShowNewPassword((prev) => !prev)}
            />
          </div>
        </div>
        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-right text-gray-700 mt-4"
          >
            تکرار رمز عبور
          </label>
          <div className="relative mt-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-500 pl-12"
            />
            <img
              src="/icons/Security.svg"
              alt="toggle password visibility"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-[#AC2043] transition rounded-[15px] mt-10"
        >
          تغییر رمز عبور / ورود
        </button>
      </form>
    </div>
  );
}
