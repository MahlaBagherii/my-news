import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px] ">
        {/* Header */}
        <div className="flex items-center justify-between px-6 mt-2">
          <h1 className="text-lg font-bold text-gray-700">مدیریت اخبار</h1>

          <div className="flex items-center gap-3 flex-row-reverse">
            <button className="bg-[#2F80ED] text-white w-[122px] h-12 rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#256bbd]">
              <FaPlus className="w-5 h-5" />
              افزودن خبر
            </button>

            <div className="relative w-[300px]">
              <span className="absolute top-3 right-3 text-gray-400">
                <img src="/icons/search.svg" alt="Search" />
              </span>
              <input
                type="text"
                placeholder="جستجو"
                className="w-full bg-[#F6F6F6] h-12 px-12 py-2 border rounded-[10px] text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div className="relative w-[167px] h-[50px]">
              <span className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none">
                <img
                  src="/icons/arrow-down.svg"
                  alt="Custom Icon"
                  className="w-5 h-5"
                />
              </span>
              <select className="border rounded-[5px] pl-10 pr-4 py-2 text-gray-700 w-full h-full appearance-none bg-transparent">
                <option value="default">انتخاب دسته</option>
                <option value="top">بالا</option>
                <option value="middle">وسط</option>
                <option value="bottom">پایین</option>
              </select>
            </div>

            <div className="relative w-[167px] h-[50px] ml-28">
              <span className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none">
                <img
                  src="/icons/arrow-down.svg"
                  alt="Custom Icon"
                  className="w-5 h-5"
                />
              </span>
              <select className="border rounded-[5px] pl-10 pr-4 py-2 text-gray-700 w-full h-full appearance-none bg-transparent">
                <option value="default">موقعیت نمایش</option>
                <option value="politics">سیاسی</option>
                <option value="sports">ورزشی</option>
                <option value="technology">فناوری</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mx-4 mt-4 rounded-[10px]">
          <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-[#AC2043] text-white rounded-[20px]">
              <tr>
                <th className="py-3 px-4 text-right">ردیف</th>
                <th className="py-3 px-24 text-right">عنوان خبر</th>
                <th className="py-3 px-4 text-right">دسته بندی</th>
                <th className="py-3 px-4 text-right">تاریخ</th>
                <th className="py-3 px-4 text-right">عملیات</th>
                <th className="py-3 px-3 text-right">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }).map((_, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-red-50"}`}
                >
                  <td className="py-3 px-4 text-right">{index + 1}</td>
                  <td className="py-3 px-4 text-right ">
                    چرا تیم‌ها با پرواز قرارداد نمی‌بندند؟
                  </td>
                  <td className="py-3 px-4 text-right">
                    {index % 2 === 0 ? "ورزشی" : "سلامت"}
                  </td>
                  <td className="py-3 px-4 text-right">۱۴۰۴/۰۴/۱۶</td>
                  <td className="py-3 px-4 text-right flex items-center justify-end gap-8">
                    <button className="text-gray-600 hover:text-gray-800 ">
                      <img
                        src="/icons/edit.svg"
                        alt="Edit"
                        className="w-5 h-5"
                      />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <img
                        src="/icons/trash.svg"
                        alt="Delete"
                        className="w-5 h-5"
                      />
                    </button>
                  </td>
                  <td className="py-3 px-4 text-right">
                    {index % 2 === 0 ? (
                      <img
                        src="/icons/tick.svg"
                        alt="Active"
                        className="w-5 h-5 inline"
                      />
                    ) : (
                      <img
                        src="/icons/close.svg"
                        alt="Inactive"
                        className="w-5 h-5 inline"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
