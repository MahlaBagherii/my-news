"use client";

const page = () => {
  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px]">
        <div className="flex items-center justify-between px-6 mt-2">
          <h1 className="text-lg font-bold text-gray-700">تنظیمات</h1>
        </div>

        <div className="overflow-x-auto mx-4 mt-4">
          <div className="w-full bg-white shadow-md overflow-hidden">
            <div className="bg-[#AC2043] text-white rounded-[10px] w-[1103px] flex">
              <span className="py-3 px-4 text-right">تنظیمات</span>
              <span className="py-3 px-24 text-right mr-[160px]">
                نام زیر دسته
              </span>
              <span className="py-3 px-4 text-right mr-[360px]">عملیات</span>
            </div>

            <div className="even:bg-red-50 rounded-md w-[1103px] flex mt-14 h-[56px]">
              <span className="py-3 px-5 text-right w-[380px]">لوگو</span>
              <div className="flex items-center py-1 mr-[530px]">
                <button>
                  <img
                    src="/icons/edit.svg"
                    alt="edit"
                    className="w-6 h-6 mt-1 ml-[80px] mr-4"
                  />
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4 h-8 w-[72px] items-center flex justify-center">
                  ثبت
                </button>
              </div>
            </div>

            <div className="even:bg-red-50 rounded-md w-[1103px] h-[56px] flex">
              <span className="py-3 px-5 text-right w-[380px]">تماس با ما</span>
              <div className="flex py-1">
                <input
                  type="text"
                  className="border rounded-md w-[720px] h-8 ml-20 mt-2 border-black"
                />
                <div className="flex justify-between items-center">
                  <button>
                    <img
                      src="/icons/edit.svg"
                      alt="edit"
                      className="w-6 h-6 mt-1 ml-[80px]"
                    />
                  </button>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4 h-8 w-[72px] items-center flex justify-center">
                    ثبت
                  </button>
                </div>
              </div>
            </div>

            <div className="even:bg-red-50 rounded-md w-[1103px] h-[56px] flex">
              <span className="py-3 px-5 text-right w-[380px]">درباره ما</span>
              <div className="flex py-1">
                <input
                  type="text"
                  className="border rounded-md mb-1 w-[720px] h-8 ml-20 mt-2 border-black"
                />
                <div className="flex justify-between items-center">
                  <button>
                    <img
                      src="/icons/edit.svg"
                      alt="edit"
                      className="w-6 h-6 mt-1 ml-[80px]"
                    />
                  </button>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4 h-8 w-[72px] items-center flex justify-center">
                    ثبت
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
