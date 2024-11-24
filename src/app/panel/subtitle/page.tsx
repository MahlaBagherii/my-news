import Image from "next/image";

const page = () => {
  const fakeNews = [
    {
      id: 1,
      title: "پیشرفت تیم ملی در مسابقات آسیایی",
      category: "ورزشی",
      date: "1402/08/30"
    },
    {
      id: 2,
      title: "Marya",
      category: "grs",
      date: "1383/10/12"
    },
    {
      id: 3,
      title: "pishi",
      category: "batman",
      date: "1383/04/13"
    }
  ];

  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px]">
        <div className="flex items-center justify-between px-6 mt-2 ">
          <h1 className="text-lg font-bold text-gray-700">زیرنویس اخبار</h1>

          <div className="flex items-center gap-3 flex-row-reverse   ">
            <button className="bg-[#2F80ED] text-white w-[166px] h-12 rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#256bbd] whitespace-nowrap">
              <img src="/icons/plus.svg" alt="plus " />
              افزودن زیرنویس
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
          </div>
        </div>

        <div className="overflow-x-auto mx-4 mt-6">
          <table className="w-full bg-white  shadow-md overflow-hidden  ">
            <div className="bg-[#AC2043] text-white rounded-[10px] w-[1103px] flex ">
              <p className="py-3 px-4 text-right ">ردیف</p>
              <p className="py-3 px-24 text-right mr-[100px] ">عنوان زیرنویس</p>
              <p className="py-3 px-1 text-right mr-[220px] ">تاریخ</p>
              <p className="py-3 px-4  text-right mr-[227px] ">عملیات</p>
            </div>
            <div>
              {fakeNews.map((news) => (
                <div
                  key={news.id}
                  className="even:bg-red-50 rounded-md w-[1103px] flex"
                >
                  <p className="py-3 px-4 text-right w-[20px]">{news.id}</p>
                  <p className="py-3 px-24 text-right w-[380px] mr-[100px] text-nowrap ">
                    {news.title}{" "}
                  </p>
                  <p className="py-3 px-[154px] text-right">{news.date}</p>
                  <div className="py-3 px-7 text-right mr-4 w-[160px] flex justify-around ">
                    <button>
                      <img
                        src="/icons/edit.svg"
                        alt="Edit"
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
                </div>
              ))}
            </div>
          </table>
        </div>
      </div>
    </div>
  );
};
export default page;
