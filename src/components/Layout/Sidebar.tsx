import { FaUserAlt, FaListUl, FaNewspaper, FaAd, FaCog, FaChartLine } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-6 text-gray-700 flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-red-500 p-4 rounded-md">
          <img src="/icons/Group 31.svg" alt="Tree News" className="w-10 h-10" />
        </div>
        <h1 className="text-xl font-semibold mt-2">Tree news</h1>
      </div>

      <nav className="flex flex-col space-y-4 text-right">
        <h2 className="text-sm font-semibold text-gray-500">داشبورد</h2>
        <SidebarItem icon={<FaUserAlt />} label="لیست کاربران" />
        <SidebarItem icon={<FaListUl />} label="دسته بندی ها" />
        <SidebarItem icon={<FaNewspaper />} label="اخبار زیرنویس" />
        <SidebarItem icon={<FaAd />} label="تبلیغات" />
        <SidebarItem icon={<FaCog />} label="تنظیمات" />
        <SidebarItem icon={<FaChartLine />} label="آمار بازدید" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center space-x-2 hover:text-red-500">
    <span className="text-gray-500">{icon}</span>
    <a href="#" className="text-gray-700">{label}</a>
  </div>
);

export default Sidebar;
