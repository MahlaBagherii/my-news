import Footer from "../../components/footer";
import Header from "../../components/header";
import Sport_4 from "../../components/Sport_4";

const Search = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="bg-[#500C0B] h-[120px] flex items-center justify-center border-t border-[#FF0C0C]">
        <div className="flex items-center gap-28">
          <div className="flex gap-3 items-center">
            <h1 className="text-white">دسته ها:</h1>
            <select className="bg-[#500C0B] text-white items-center px-3 h-[40px] w-[120px] rounded-md border-2 border-[#FF0C0C]">
              <option>همه</option>
              <option>ورزش</option>
              <option>اقتصاد</option>
              <option>فرهنگ</option>
            </select>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="text-white">تاریخ:</h1>
            <select className="bg-[#500C0B] text-white py-2 px-3 h-[40px] w-[120px] rounded-md border-2 border-[#FF0C0C]">
              <option>۱۴۰۳</option>
              <option>۱۴۰۲</option>
              <option>۱۴۰۱</option>
            </select>
            <select className="bg-[#500C0B] text-white py-2 px-3 h-[40px] w-[120px] rounded-md border-2 border-[#FF0C0C]">
              <option>مرداد</option>
              <option>تیر</option>
              <option>خرداد</option>
            </select>
            <select className="bg-[#500C0B] text-white py-2 px-3 h-[40px] w-[120px] rounded-md border-2 border-[#FF0C0C]">
              <option>۱۶</option>
              <option>۱۵</option>
              <option>۱۴</option>
            </select>
          </div>
          <button className="bg-[#FF0C0C] text-white py-2 px-4 rounded-lg shadow-md h-[40px] w-[120px] ">
            اخبار امروز
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 pt-10">
      <Sport_4/>
      <Sport_4/>
      </div>
      <Footer/>
    </div>
  );
};

export default Search;
