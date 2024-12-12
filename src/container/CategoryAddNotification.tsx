import React from "react";

const CategoryAddNotification = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="w-[637px] h-[669px] rounded-[20px] bg-white p-8 shadow-lg relative">
          <h3 className="text-right text-lg text-gray-700 mb-6">
            افزودن دسته‌بندی
          </h3>

          <form className="space-y-3 mr-20 mt-24">
            <div>
              <label className="text-right block text-gray-800 text-sm">
                عنوان
              </label>
            </div>
            <div className="flex items-center justify-between">
              <input
                type="text"
                className="w-[215px] h-[50px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex items-center gap-2">
                <label
                  htmlFor="main-category-checkbox"
                  className="text-sm text-gray-800"
                >
                  افزودن به دسته‌ی اصلی
                </label>
                <input
                  type="checkbox"
                  id="main-category-checkbox"
                  className="form-checkbox border-gray-400 ml-16 w-6 h-6"
                />
              </div>
            </div>

            <div className="w-[300px]">
              <label className="text-right block text-sm text-gray-800 mb-2 mt-16">
                دسته های اصلی
              </label>
              <span className="absolute mt-4 mr-[180px]">
                <img
                  src="/icons/arrow-down.svg"
                  alt="Custom Icon"
                  className="w-5 h-5"
                />
              </span>
              <select className="w-[215px] h-[50px] border rounded-[5px] pr-4 ml-14 py-2 text-gray-700 appearance-none bg-transparent">
                <option value="default">انتخاب دسته</option>
                <option value="top">ورزش</option>
                <option value="middle">اقتصاد</option>
                <option value="bottom">ایران</option>
                <option value="middle">جهان</option>
                <option value="bottom">سیاست</option>
                <option value="middle">فرهنگ</option>
              </select>
            </div>

            <div className="w-[274px] h-12 !mt-32 flex justify-between items-center mr-20">
              <button className="w-[121px] h-12 flex items-center justify-center text-center text-white bg-blue-500 rounded-xl">
                <img src="/icons/plus.svg" alt="plus" className=" ml-2" />
                افزودن
              </button>
              <button className="w-[121px] h-12 flex items-center justify-center text-center text-blue-500 bg-white border-2 border-blue-500 shadow-blue-500 rounded-xl">
                <img src="/icons/element-plus.svg" alt="" className="ml-2" />
                بستن
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default CategoryAddNotification;
