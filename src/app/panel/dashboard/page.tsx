import Image from "next/image";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";

const Dashboard = () => {
  // داده‌های فیک
  const fakeNews = [
    {
      id: 1,
      title: "پیشرفت تیم ملی در مسابقات آسیایی",
      category: "ورزشی",
      date: "1402/08/30",
      status: true
    },
    {
      id: 11,
      title: "Marya",
      category: "گوربا",
      date: "1383/10/12",
      status: false
    },
    {
      id: 3,
      title: "pishi",
      category: "batman",
      date: "1383/04/13",
      status: true
    }
  ];

  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px]">
        <div className="flex items-center justify-between px-6 mt-2 ">
          <h1 className="text-lg font-bold text-gray-700">مدیریت اخبار</h1>

          <div className="flex items-center gap-3 flex-row-reverse   ">
            <button className="bg-[#2F80ED] text-white w-[122px] h-12 rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#256bbd]">
              <FaPlus className="w-5 h-5" />
              افزودن خبر
            </button>

            <div className="relative w-[300px] ml-12">
              <span className="absolute top-3 right-3 text-gray-400 ml-6">
                <img src="/icons/search.svg" alt="Search" />
              </span>
              <input
                type="text"
                placeholder="جستجو"
                className="w-full bg-[#F6F6F6] h-12 px-12 ml-24 py-2 border rounded-[10px] text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div className="relative w-[167px] h-[50px] ml-[50px] ">
              <span className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none">
                <img
                  src="/icons/arrow-down.svg"
                  alt="Custom Icon"
                  className="w-5 h-5"
                />
              </span>
              <select className="border rounded-[5px]  pr-4 ml-14 py-2 text-gray-700 w-full h-full appearance-none bg-transparent">
                <option value="default">انتخاب دسته</option>
                <option value="top">بالا</option>
                <option value="middle">وسط</option>
                <option value="bottom">پایین</option>
              </select>
            </div>

            <div className="relative w-[167px] h-[50px] ml-[31px]">
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

        <div className="overflow-x-auto mx-4 mt-4 ">
          <table className="w-full bg-white  shadow-md overflow-hidden  ">
            <div className="bg-[#AC2043] text-white rounded-[10px] w-[1103px] flex ">
              <p className="py-3 px-4 text-right ">ردیف</p>
              <p className="py-3 px-24 text-right mr-[100px] ">عنوان خبر</p>
              <p className="py-3 px-4 text-right mr-[100px] ">دسته بندی</p>
              <p className="py-3 px-4 text-right mr-[50px] ">تاریخ</p>
              <p className="py-3 px-4  text-right mr-[50px] ">عملیات</p>
              <p className="py-3 px-3 text-right mr-[50px] ">وضعیت</p>
            </div>
            <div>
              {fakeNews.map((news) => (
                <div
                  key={news.id}
                  className="even:bg-red-50 rounded-md w-[1103px] flex  "
                >
                  <p className="py-3 px-4 text-right w-[20px]">{news.id}</p>
                  <p className="py-3 px-24 text-right w-[380px] mr-[100px] text-nowrap ">
                    {news.title}{" "}
                  </p>
                  <p className="py-3 px-4 text-right w-[140px] flex justify-center">
                    {news.category}
                  </p>
                  <p className="py-3 px-4 text-right">{news.date}</p>
                  <div className="py-3 px-4 text-right w-[150px] flex justify-around ">
                    <button>
                      <img
                        src="/icons/edit.svg"
                        alt="Active"
                        className="w-5 h-5 inline"
                      />
                    </button>
                    <button>
                      <img
                        src="/icons/trash.svg"
                        alt="Delete"
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                  <p className="py-3 px-3 text-right flex justify-center w-[120px]  ">
                    {news.status ? (
                      <img
                        src="/icons/tick.svg"
                        alt="Active"
                        className="w-5 h-5 inline"
                      />
                    ) : (
                      <img
                        src="/icons/close.svg"
                        alt="Active"
                        className="w-5 h-5 inline"
                      />
                    )}
                  </p>
                </div>
              ))}
            </div>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
