import teramp1 from "../../public/images/teramp1.svg";
import victor from "../../public/images/victor.svg";
import polic from "../../public/images/polic.svg";
import men from "../../public/images/men.svg";
import women from "../../public/images/women.svg";

import Image from "next/image";
const Category_3 = () => {
    const newsData = [
        {
          title: "علی‌اف پارلمان آذربایجان را منحل کرد",
          description:
            "الهام علی‌اف، رئیس‌جمهور آذربایجان، پارلمان این کشور را منحل کرد.",
          date: "۴ روز پیش",
          image: men,
        },
        {
          title: "آلمان از ایران کمک خواست",
          description:
            "وزیر خارجه آلمان با درخواست کمک تهران برای جلوگیری از تنش در منطقه تهدید شد.",
          date: "۴ روز پیش",
          image: women,
        },
        {
          title: "پیامدهای عدم تصویب اف‌ای‌تی‌اف",
          description:
            "یکی از مهم‌ترین موضوع‌های متراکم ناظران انتخابات ریاست جمهوری.",
          date: "۴ روز پیش",
          image: victor,
        },
        {
          title: "چگونه کودتا در بولیوی شکست خورد؟",
          description:
            "پس از چندین روز ناآرامی و با کمک نیروهای نظامی، نتایج انتخابات مشخص شد.",
          date: "۴ روز پیش",
          image: polic,
        },
      ];
  return (
    <div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="p-4 bg-white  border-b border-[#282828] flex flex-col"
            >
              <div className="relative h-[138px] w-[173px] mb-4">
                <Image
                  src={news.image}
                  alt={news.title}
                  objectFit="cover"
                />
              </div>
              <h3 className="font-bold text-md mb-2">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{news.description}</p>
              <p className="text-gray-500 text-xs">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category_3
