"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Code() {
  const [username, setUsername] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const router = useRouter(); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("OTP:", otp.join(""));

    router.push("/resetPassword");
  };

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(0, 1);
    setOtp(updatedOtp);

    const nextField = document.getElementById(`otp-${index + 1}`);
    if (nextField && value) {
      (nextField as HTMLInputElement).focus();
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
          className="mb-2"
        />
        <h2 className="text-xl font-bold text-gray-800">Tree news</h2>
      </div>

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username" className="block text-right text-gray-700 ">
            موبایل
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-500 mt-2"
            placeholder="مثال: 746****0937"
          />
        </div>

        <div className="flex justify-between mt-10 mb-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className="w-14 h-14 text-center border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
              maxLength={1}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white bg-[#AC2043] transition rounded-[15px] mb-6 mt-12"
        >
          بازیابی رمز عبور
        </button>
      </form>
    </div>
  );
}
