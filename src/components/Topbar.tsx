export default function Topbar() {
  return (
    <div className="flex items-center justify-between rounded-md px-4 py-2 mx-4 mt-6  ">
      <div className=" bg-white flex items-center w-[261px] h-[80px] shadow-md rounded-[20px_40px_40px_20px] p-4 mb-4">
        <img
          src="/images/cat.jpg"
          alt="کاربر"
          className="w-12 h-12 rounded-full ml-4"
        />
        <div className="flex-1 text-right">
          <p className="font-bold text-[#4F4F4F]">پیشی عزیز خوش آمدی</p>
          <p className="text-sm text-[#828282]">ادمین</p>
        </div>
      </div>
      <div className=" flex justify-center items-center bg-[#ffffff] w-[50px] h-[49] gap-8 rounded-[999px] mb-6">
        <div className="w-[46px] h-[46px] flex justify-center items-center">
          <img
            src="/icons/notification.svg"
            alt="Notification Icon"
            className="w-[24px] h-[24px] flex justify-center items-center "
          />
        </div>
      </div>
    </div>
  );
}
