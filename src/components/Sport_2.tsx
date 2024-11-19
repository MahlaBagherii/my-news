import Image from 'next/image';
import taremi from "../../public/images/taremi.svg"
const Sport_2 = () => {
    const items = {
        title: "واکنش سری‌آ به شروع درخشان طارمی",
        image: taremi,
      };
    
      const newsItems = [
        { id: 1, title: "عکس| شباهت لوگوی جدید تراکتور به لوگوی چند تیم اروپایی" },
        { id: 2, title: "مایلی‌کهن: انتخاب لباس کادر درمان برای ملی‌پوشان را می‌پسندم" },
        { id: 3, title: "شباهت لوگوی جدید تراکتور به لوگوی چند تیم اروپایی" },
        { id: 4, title: "تلوزیون چگونه میدان ورزش را به پلتفرم‌های مجازی واگذار کرد؟" },
        { id: 5, title: "بزن بزن در بازی سپاهان و تیم ترکیه‌ای / بازی دقیقه 27 تمام شد" },
        { id: 6, title: "فریاد (الله اکبر) جودوکار تاجیک بعد از غلبه بر نماینده اسرائیل" },
        { id: 7, title: "محل میزبانی استقلال در آسیا مشخص شد" },
        { id: 8, title: "گشت‌و‌گذار خانوادگی هادی چوپان در تابستان" },
      ];
  return (
    <div>
        <div className="py-8 px-4 max-w-md mx-auto space-y-6">
      <div className="overflow-hidden">
        <Image
          src={items.image}
          alt={items.title}
          width={400}
          height={200}
          className="w-[318px] h-[227px]"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{items.title}</h2>
        </div>
      </div>

      <div>
        {newsItems.map((item) => (
          <div key={item.id} className="p-4 border-t border-[#4F4F4F]">
            <p className="text-[#828282] text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Sport_2
