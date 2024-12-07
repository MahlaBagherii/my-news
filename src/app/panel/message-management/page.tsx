"use client";

const page = () => {
  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px]">
        <div className="flex items-center justify-between px-6 mt-2">
          <h1 className="text-lg font-bold text-gray-700">مدیریت پیام ها</h1>

          <div className="flex justify-center space-x-4 mt-2 bg-white w-[351px] h-12 rounded-xl mr-44 border shadow-md shadow-slate-100">
            <button className="bg-[#AC2043] text-white font-bold py-2 px-4 rounded-xl w-[100px] h-10 whitespace-nowrap mt-1 ml-2">
              همه
            </button>
            <button className="bg-white text-gray-700 font-bold py-2 px-4 rounded w-[100px] h-10 whitespace-nowrap mt-1 ">
              تایید شده
            </button>
            <button className="bg-white text-gray-700 font-bold py-2 px-4 rounded w-[100px] h-10 whitespace-nowrap mt-1 ">
              حذف شده
            </button>
          </div>

          <div className="relative w-[300px] ml-2">
            <span className="absolute top-3 right-3 text-gray-400">
              <img src="/icons/search.svg" alt="Search" />
            </span>
            <input
              type="text"
              placeholder="جستجو"
              className="w-[312px] bg-[#F6F6F6] h-12 px-12 py-2 border rounded-[10px] text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto mx-4 mt-8">
          <div className="w-full bg-white shadow-md overflow-hidden">
            <div className="bg-[#AC2043] text-white rounded-[10px] w-[1103px] flex">
              <span className="py-3 px-4 text-right">ردیف</span>
              <span className="py-3 px-24 text-right mr-[10px]">
                عنوان خبر / نظر
              </span>
              <span className="py-3 px-4 text-right mr-[560px]">عملیات</span>
            </div>
          </div>
        </div>

        <div className="w-[1103px] h-[180px] rounded-xl bg-white mr-4 mt-3 p-4 shadow-md shadow-slate-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">
              ورزشی: چرا تیم ها با بیرانوند قرارداد نمیبندند؟
            </p>
            <p className="text-gray-700 text-sm">۱۴۰۲/۰۴/۱۴</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center ml-4 mb-12 mr-3">
              <img src="/icons/message.svg" alt="massage" className="h-6 w-6" />
            </div>
            <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-200 w-[816px] h-[92px] ml-12">
              <p className="text-gray-700 text-sm">
                رضا: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی.
              </p>
            </div>

            <div className="flex space-x-5 rtl:space-x-reverse ml-6">
              <button className="bg-red-500 text-white font-bold py-1 px-4 rounded-xl">
                حذف
              </button>
              <button className="bg-green-500 text-white font-bold py-1 px-4 rounded-xl">
                تایید
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1103px] h-[180px] rounded-xl bg-white mr-4 mt-3 p-4 shadow-md shadow-slate-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">
             جهان: تاریخ انتخابات ریاست جمهوری آمریکا
            </p>
            <p className="text-gray-700 text-sm">۱۴۰۲/۰۴/۱۴</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center ml-4 mb-12 mr-3">
              <img src="/icons/message.svg" alt="massage" className="h-6 w-6" />
            </div>
            <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-200 w-[816px] h-[92px] ml-12">
              <p className="text-gray-700 text-sm">
                رضا: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی.
              </p>
            </div>

            <div className="flex space-x-5 rtl:space-x-reverse ml-6">
              <button className="bg-red-500 text-white font-bold py-1 px-4 rounded-xl">
                حذف
              </button>
              <button className="bg-green-500 text-white font-bold py-1 px-4 rounded-xl">
                تایید
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1103px] h-[180px] rounded-xl bg-white mr-4 mt-3 p-4 shadow-md shadow-slate-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">
              سلامتی: تب دنگی چیست 
            </p>
            <p className="text-gray-700 text-sm">۱۴۰۲/۰۴/۱۴</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center ml-4 mb-12 mr-3">
              <img src="/icons/message.svg" alt="massage" className="h-6 w-6" />
            </div>
            <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-200 w-[816px] h-[92px] ml-12">
              <p className="text-gray-700 text-sm">
                رضا: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی.
              </p>
            </div>

            <div className="flex space-x-5 rtl:space-x-reverse ml-6">
              <button className="bg-red-500 text-white font-bold py-1 px-4 rounded-xl">
                حذف
              </button>
              <button className="bg-green-500 text-white font-bold py-1 px-4 rounded-xl">
                تایید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
