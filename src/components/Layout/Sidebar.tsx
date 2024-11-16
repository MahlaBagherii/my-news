import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="fixed right-0 top-0 h-full w-[18%] bg-white shadow-lg p-6 text-gray-700 flex flex-col  ">
      <div className="flex flex-col items-center mb-6">
        <div className=" p-4 rounded-md">
          <img
            src="/icons/Group 31.svg"
            alt="Tree News"
            className="w-20 h-20"
          />
        </div>
        <h1 className="text-xl font-semibold">Tree news</h1>
      </div>
      <h2 className=" text-[#282828] w[500px] ">داشبورد</h2>
      <p className="border-t border-[#EB5757] w-[193px] mt-[9.5px] " />

      <nav className="flex flex-col space-y-4 text-right text-black justify-around h-[358px] w-[161px] gap[14px] pr-5 mt-[46px] ">
        <div className="flex h-[45px] w-[161px] items-center gap-2">
          <Image
            src="/icons/user.svg"
            width={24}
            height={24}
            alt="لیست کاربران"
          />
          <span>لیست کاربران</span>
        </div>
        <div className="flex h-[45px] w-[161px]  items-center gap-2 ">
          <Image
            src="/icons/category-2.svg"
            width={24}
            height={24}
            alt="دسته بندی ها"
          />
          <span className="mr-2">دسته بندی ها</span>
        </div>
        <div className="flex h-[45px] w-[161px]  items-center gap-2">
          <Image
            src="/icons/subtitle.svg"
            width={24}
            height={24}
            alt="اخبار زیرنویس"
          />
          <span>اخبار زیرنویس</span>
        </div>
        <div className="flex h-[45px] w-[161px] items-center gap-2">
          <Image
            src="/icons/presention-chart.svg"
            width={24}
            height={24}
            alt="تبلیغات"
          />
          <span>تبلیغات</span>
        </div>
        <div className="flex h-[45px] w-[161px]  items-center gap-2">
          <Image
            src="/icons/setting-2.svg"
            width={24}
            height={24}
            alt="تنظیمات"
          />
          <span>تنظیمات</span>
        </div>
        <div className="flex h-[45px] w-[161px] items-center gap-2">
          <Image
            src="/icons/status-up.svg"
            width={24}
            height={24}
            alt="آمار بازدید"
          />
          <span>آمار بازدید</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
