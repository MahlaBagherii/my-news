"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const TextEditor = () => {
  const [value, setValue] = useState<string | undefined>("");

  return (
    <div className="mt-5 flex justify-center items-center">
      <div className="w-[1150px] bg-[#E70B0B26] border-gray-300 rounded-xl overflow-hidden shadow-sm">
        <h2 className=" mt-2 mb-4 text-right mr-4 text-gray-700">
          متن خبر
        </h2>
        <MDEditor
          value={value}
          onChange={setValue}
          height={250}
          preview="edit"
          className="text-right bg-[#E70B0B26]"
        />
      </div>
    </div>
  );
};

export default TextEditor;
