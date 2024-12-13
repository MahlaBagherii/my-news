import React, { useState } from "react";

const EditNotification = ({ news, onClose }) => {
  const [title, setTitle] = useState(news?.title || "");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-[1016px] h-[390px] p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4" onClick={onClose}>
          <img src="/icons/close-circle2.svg" alt="close" />
        </button>

        <h3 className="text-lg text-gray-800 mt-6 mr-8"> زیرنویس</h3>

        <div className="mt-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[917.95px] h-[50px] p-2 border border-gray-300 rounded mr-6 "
          />
          <div className="flex items-center mt-4 mr-6 text-sm text-gray-600">
            <img src="/icons/danger.svg" alt="denger" />
            <p className="mr-3"> هر خبر نهایتا ۸۵ حرف می‌تواند داشته باشد</p>
          </div>
        </div>

        <div className="flex justify-start mt-6">
          <button className=" w-[121.87px] h-12px-6 py-2 mt-12 mr-[820px] text-white bg-blue-500 rounded-[10px] hover:bg-blue-600">
             ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNotification;
