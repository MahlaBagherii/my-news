const Sidebar = () => {
  const data = [
    { title: "روزی که نقطه عطف تاریخ شد" },
    { title: "ببینید! عجیب‌ترین دزدی تاریخ؛ سرقت موتورسیکلت به همراه صاحبش!" },
    {
      title:
        "چرا منابع (ع) واقعیت تغییر را برای به دست آوردن جانشینی مطرح کرد؟",
    },
    { title: "ملاقات جانشین پیرانداز با کاپیتان سابق استقلال" },
    { title: "هواپیمای پیروزی با تاخیر اسوال پیام ماهواره‌ای عرضه شد" },
    { title: "ارزش‌افزاری از سامسونگ و آیفون!" },
    { title: "همستر کامبت کی لیست می‌شود؟" },
    { title: "ببینید! عجیب‌ترین دزدی تاریخ؛ سرقت موتورسیکلت به همراه صاحبش!" },
  ];
  return (
    <div>
      <div className="bg-white rounded-lg p-3 w-[408px] h-[389px] overflow-y-scroll ">
        <div className=" border-collapse flex items-center justify-evenly w-full h-[35px] rounded-sm bg-[#500C0B] text-white">
          <button className="w-fit">پربازدید</button>
          <button className="w-fit">پربحث</button>
          <button className="w-fit">برگزیده</button>
        </div>

        <div>
          {data.map((item, index) => (
            <div key={index} className="text-gray-700 text-sm bg-[#F6F6F6]">
              <div className="py-2 px-4">
                <span className="text-lg">●</span> {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
