import MainLayout from "../../../components/MainLayout";

export default function AddNews() {
  return (
    <div className="bg-white rounded-[20px] h-[1000%]">
      <div className="p-4">




        <div className="">
          <div className="w-[114px] h-[26px] ml-[1013px]">
            <h1>افزودن خبر جدید</h1>
          </div>
          <div className="flex mb-4">
            <label className=" w-[66px] h-8 mt-[52px] ml[1052px] block text-sm font-medium text-gray-700 mb-2">
              عنوان خبر
            </label>
            <input
              type="text"
              className="w-[658px] h-[50px] mt-[38px] ml-[333px] mr-5 rounded-[5px] border border-gray-200 bg-[#FAFAFA] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="چرا تیم‌ها با بیرانوند قرارداد نمی‌بندند؟"
            />
          </div>

          <div className="flex mb-4">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              توضیح کوتاه
            </label>
            <input
              className="w-[661px] h-[147px] bg-[#FAFAFA] border mr-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="در شرایطی که ..."
            />
          </div>

          {/* <div className="bg-black w-[235px] h-[175px] mt-[90px] ml-[49px]">
            fvsf
            <div className="bg-slate-600 ">fvsf</div>
          </div> */}
        </div>





        <div className="flex mr-[82px]">
          <div className="relative w-[135px] h-[50px] ml-[50px] ">
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none">
              <img
                src="/icons/arrow-down.svg"
                alt="Custom Icon"
                className="w-5 h-5"
              />
            </span>
            <select className="border rounded-[5px]  pr-4 ml-14 py-2 text-gray-700 w-full h-full appearance-none bg-transparent">
              <option value="default">دسته بندی</option>
              <option value="top">جهان</option>
              <option value="middle">ایران</option>
              <option value="bottom">سیاست</option>
              <option value="default">اقتصاد </option>
              <option value="top">ورزش</option>
              <option value="middle">فرهنگ</option>
              <option value="bottom">حوادث</option>
            </select>
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
              <option value="default">موقعیت نمایش</option>
              <option value="top">بدون برچسب</option>
              <option value="middle">ویژه اصلی 1</option>
              <option value="bottom">ویژه اصلی 2</option>
              <option value="default">برگزیده اصلی </option>
              <option value="top">ویژه دسته 1 </option>
              <option value="middle">ویژه دسته 2</option>
              <option value="bottom">پایین</option>
            </select>
          </div>
        </div>

        <div className="flex mb-3 items-center">
          <label className="block text-sm font-medium text-gray-700 whitespace-nowrap mt-12 ml-2">
            کلمات کلیدی
          </label>

          <input
            type="text"
            className="w-[660px] h-[50px] mt-[38px] ml-[48px] rounded-[5px] border border-gray-200 bg-[#FAFAFA] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="فوتبال، بیرانوند، ورزش"
          />

          <div className="flex items-center mt-[38px] gap-2">
            <input
              id="confirm-checkbox"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="confirm-checkbox" className="text-sm text-gray-700">
              تایید برای نمایش
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
