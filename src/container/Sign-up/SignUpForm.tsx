export default function SignUpForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-[400px]">
          {/* تب‌های ورود و ثبت نام */}
          <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-3">
            <button className="relative px-6 py-2 text-lg font-bold text-white bg-black rounded-full">
              ورود
            </button>
            <button className="relative px-6 py-2 text-lg text-gray-500 hover:text-black transition">
              ثبت نام
            </button>
          </div>
  
          {/* توضیحات زیر تب‌ها */}
          <span className="block text-center text-sm text-gray-500 mb-6">
            ورود به حساب کاربری
          </span>
  
          {/* فیلد نام کاربری */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              موبایل یا نام کاربری
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="نام کاربری"
            />
          </div>
  
          {/* فیلد رمز عبور */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              رمز عبور
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
  
          {/* دکمه ورود */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            ورود به حساب
          </button>
  
          {/* گزینه مرا به خاطر بسپار */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="remember-me"
              className="w-4 h-4 text-black border-gray-300 rounded focus:ring focus:ring-black"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 text-sm text-gray-700"
            >
              مرا به خاطر بسپار
            </label>
          </div>
        </div>
      </div> 
  );
}