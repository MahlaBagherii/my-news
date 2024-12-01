"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const TextEditor = () => {
  const [value, setValue] = useState<string | undefined>("");

  return (
    <div className="w-full h-screen flex items-center ">
      <div className="w-[70%] bg-pink-100 border border-pink-300 rounded-lg p-4 shadow-lg ">
        <h2 className="text-lg font-bold mb-4 text-right">متن خبر</h2>
        <div className="bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <MDEditor
            value={value}
            onChange={setValue}
            height={200} 
            preview="edit" 
          />
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-300 shadow">
          <h3 className="text-md font-bold text-right mb-2">پیش‌نمایش</h3>
          <MDEditor.Markdown source={value} className="bg-gray-50 p-2 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
