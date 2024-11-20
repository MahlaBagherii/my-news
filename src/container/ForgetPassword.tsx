"use client";

import React, { useState } from "react";

export default function ForgotPassword() {
  const [username, setUsername] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
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
          <label htmlFor="username" className="block text-right text-gray-700">
            موبایل
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300  rounded-[15px] focus:outline-none focus:ring-2 focus:ring-red-500 mt-2"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-[#AC2043] transition rounded-[15px] mb-6 mt-12"
        >
          ارسال کد
        </button>
      </form>
    </div>
  );
}
