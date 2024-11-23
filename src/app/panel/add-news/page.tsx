import MainLayout from "../../../components/MainLayout";

export default function AddNews() {
  return (
    <div className="bg-white rounded-[20px] p-4 h-[1000%]">
      <div className="p-4">
        <div>
          <h1>افزودن خبر جدید</h1>
        </div>
        {/* بخش عنوان خبر */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            عنوان خبر
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="چرا تیم‌ها با پرسپولیس قرارداد نمی‌بندند؟"
          />
        </div>

        {/* بخش توضیح کوتاه */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            توضیح کوتاه
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="در شرایطی که ..."
          />
        </div>

        {/* بخش دسته‌بندی و موقعیت نمایش */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              دسته‌بندی
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>فوتبال</option>
              <option>ورزش</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              موقعیت نمایش
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>بالا</option>
              <option>پایین</option>
            </select>
          </div>
        </div>

        {/* بخش کلمات کلیدی */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            کلمات کلیدی
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="فوتبال، پرسپولیس، ورزش"
          />
        </div>

        {/* آپلود رسانه */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            آپلود رسانه
          </label>
          <div className="border border-dashed border-gray-300 rounded-md px-4 py-6 flex justify-center items-center">
            <span className="text-gray-500">افزودن رسانه</span>
          </div>
          <button className="text-red-500 mt-2 text-sm">حذف رسانه</button>
        </div>

        {/* بخش تأیید نمایش */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 block text-sm text-gray-700">
            تأیید برای نمایش
          </label>
        </div>

        {/* بخش متن خبر */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            متن خبر
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={10}
            placeholder="متن خبر را اینجا وارد کنید..."
          />
        </div>

        {/* دکمه ثبت خبر */}
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            ثبت خبر
          </button>
        </div>
      </div>
    </div>
  );
}
