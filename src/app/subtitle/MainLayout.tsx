import Sidebar from "../../components/Layout/Sidebar";
import Topbar from "../../components/Layout/Topbar";
import { FaEdit, FaTrashAlt, FaPlus, FaSearch } from "react-icons/fa";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  items-center justify-center pl-5 pr-5 ">
      <div className="w-full h-[600px] bg-white rounded-[20px] ">
        <div className="flex items-center justify-between p-4 rounded-md mx-4 mt-6">
          {/* مدیریت اخبار */}
          <h1 className="text-lg font-bold text-gray-700 ">مدیریت اخبار</h1>

          {/* دکمه‌ها و فیلدها */}
          <div className="flex items-center gap-4 flex-row-reverse">
            {/* دکمه افزودن خبر */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600">
              <span className="text-xl font-bold">+</span> افزودن خبر
            </button>

            {/* فیلد جستجو */}
            <div className="relative w-64">
              <input
                type="text"
                placeholder="جستجو"
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <span className="absolute top-2.5 left-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m-3.4-6.9a6.9 6.9 0 1 1 0 13.8 6.9 6.9 0 0 1 0-13.8z"
                  />
                </svg>
              </span>
            </div>

            <div className="relative">
              <select className="border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300">
                <option value="default">انتخاب دسته</option>
                <option value="top">بالا</option>
                <option value="middle">وسط</option>
                <option value="bottom">پایین</option>
              </select>
            </div>

            <div className="relative">
              <select className="border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300">
                <option value="default">موقعیت نمایش</option>
                <option value="politics">سیاسی</option>
                <option value="sports">ورزشی</option>
                <option value="technology">فناوری</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
