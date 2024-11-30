import Image from "next/image";


const page = () => {
  const fakeNews = [
    {
      id: 1,
      title: "والیبال",
      category: "ورزش"
    },
    {
      id: 11,
      title: "آمریکا",
      category: "جهان"
    },
    {
      id: 3,
      title: "دولت",
      category: "سیاست"
    }
  ];

  return (
    <div className="flex items-center justify-center px-5">
    <div className="w-full rounded-[20px]">
      <div className="flex items-center justify-between px-6 mt-2 ">
        <h1 className="text-lg font-bold text-gray-700"> دسته بندی ها</h1>

        <div className="flex items-center gap-3 flex-row-reverse   ">
          <button className="bg-[#2F80ED] text-white w-[122px] h-12 rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#256bbd]">
            <img src="/icons/plus.svg" alt="plus " />
            افزودن
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
              <option value="top">ورزش</option>
              <option value="middle">اقتصاد</option>
              <option value="bottom">ایران</option>
              <option value="middle">جهان</option>
              <option value="bottom">سیاست</option>
              <option value="middle">فرهنگ</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mx-4 mt-4 ">
        <div className="w-full bg-white  shadow-md overflow-hidden  ">
          <div className="bg-[#AC2043] text-white rounded-[10px] w-[1103px] flex ">
            <p className="py-3 px-4 text-right ">ردیف</p>
            <p className="py-3 px-24 text-right mr-[80px] ">نام</p>
            <p className="py-3 px-4 text-right mr-[100px] ">نام زیر دسته</p>
            <p className="py-3 px-4  text-right mr-[404px] ">عملیات</p>
          </div>
          <div>
            {fakeNews.map((news) => (
              <div
                key={news.id}
                className="even:bg-red-50 rounded-md w-[1103px] flex"
              >
                <p className="py-3 px-4 text-right w-[20px]">{news.id}</p>
                <p className="py-3 px-24 text-right w-[380px] mr-[100px] text-nowrap ">
                  {news.title}{""}
                </p>
                <p className="py-3 px-4 text-right w-[140px] flex justify-center ml-24">
                  {news.category}
                </p>

                <div className="py-3 px-4 text-right w-[150px] flex justify-around mr-[290px] ml-[20px]">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  };
  export default page;
