// import { FaBell } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md py-4 px-6 flex justify-between items-center z-10">
      <div className="relative">
        <FaBell className="text-gray-500 text-xl" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">1</span>
      </div>

      <div className="flex items-center bg-white p-2 rounded-lg shadow space-x-4">
        <img src="/path/to/user-image.jpg" alt="User Profile" className="w-10 h-10 rounded-full" />
        <div className="text-right">
          <h3 className="text-sm font-semibold text-gray-700">مسعود عزیز خوش آمدی</h3>
          <p className="text-xs text-gray-500">ادمین</p>
        </div>
      </div>
    </header>
  );

};

export default Topbar;
