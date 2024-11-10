import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { FaEdit, FaTrashAlt, FaPlus, FaSearch } from "react-icons/fa";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <div
          className="flex-1 p-6 bg-gray-100"
          style={{
            width: "calc(100vw - 256px)",
            height: "calc(100vh - 80px)",
            top: "80px",
            right: "256px",
            gap: "8px",
            borderRadius: "20px 0 0 0",
            position: "fixed",
            overflow: "hidden"
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              مدیریت اخبار
            </h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
              <FaPlus />
              <span>افزودن خبر</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <select className="border rounded-lg p-2">
              <option>موقعیت نمایش</option>
              <option></option>
              <option></option>
            </select>
            <select className="border rounded-lg p-2">
              <option>انتخاب دسته</option>
              <option>ورزشی</option>
              <option>سلامت</option>
            </select>
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="جستجو"
                className="border rounded-lg p-2 w-full pr-10"
              />
              <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div
            className="overflow-y-auto"
            style={{ height: "calc(100% - 130px)" }}
          >
            <table className="w-full bg-white rounded-lg shadow text-gray-700">
              <thead className="bg-[#AC2043] text-white">
                <tr>
                  <th className="p-3">ردیف</th>
                  <th className="p-3">عنوان خبر</th>
                  <th className="p-3">دسته بندی</th>
                  <th className="p-3">تاریخ</th>
                  <th className="p-3">عملیات</th>
                  <th className="p-3">وضعیت</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[...Array(10)].map((_, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-red-50" : "bg-white"}
                  >
                    <td className="p-3">{i + 1}</td>
                    <td className="p-3">
                      چرا تیم‌ها با قرارداد فراروند نمی‌بندند؟
                    </td>
                    <td className="p-3">{i % 2 === 0 ? "ورزشی" : "سلامت"}</td>
                    <td className="p-3">۱۴۰۲/۰۴/۱۴</td>
                    <td className="p-3 flex justify-center space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td className="p-3">
                      {i % 2 === 0 ? (
                        <span className="text-green-600">فعال</span>
                      ) : (
                        <span className="text-red-600">غیرفعال</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 p-4 bg-white rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 text-gray-500 hover:text-gray-700">
                &lt;
              </button>
              <span className="px-2">1</span>
              <button className="px-2 py-1 text-gray-500 hover:text-gray-700">
                &gt;
              </button>
            </div>
            <div>
              <span className="text-gray-600">صفحه ۱ از ۱۳</span>
            </div>
          </div>
        </div>

        <main className="flex-1 p-4 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
