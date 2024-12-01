"use client";

import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
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
  const handleAddNews = () => {
    router.push("/panel/add-news");
  };
  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px]">
        <div className="flex items-center justify-between px-6 mt-2 ">
          <h1 className="text-lg font-bold text-gray-700"> تنظیمات</h1>

          
        </div>

        <div className="overflow-x-auto mx-4 mt-4 ">
          <div className="w-full bg-white  shadow-md overflow-hidden  ">
            <div className="bg-[#AC2043] text-white rounded-[10px] w-[1103px] flex ">
              <p className="py-3 px-4 text-right ">تنظیمات</p>
              <p className="py-3 px-24 text-right mr-[100px] "> نام زیر دسته</p>
              <p className="py-3 px-4 text-right mr-[100px] "> عملیات</p>
              
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
