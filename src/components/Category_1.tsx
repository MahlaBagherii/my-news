import teramp1 from "../../public/images/teramp1.svg";
import victor from "../../public/images/victor.svg";
import polic from "../../public/images/polic.svg";
import men from "../../public/images/men.svg";
import women from "../../public/images/women.svg";

import Image from "next/image";
import Category_3 from "./Category_3";

const Category_1 = () => {
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
    <div className="max-w-5xl mx-auto p-6  ">
      <h1 className="text-lg font-bold mb-4 text-right border-t border-[#282828]">
        جهان
      </h1>

      <div className="flex justify-center gap-5 border-b border-[#282828] pb-6 mb-6">
        <div>
          <h2 className="text-2xl font-semibold mt-4 text-right">
            چند فرضیه درباره انتخابات ایران و آمریکا
            <br />
            معنی پیروزی ترامپ چیست؟
          </h2>
          <p className="text-sm text-gray-500 mt-5 text-right">
            جهان | 1 روز پیش
          </p>
        </div>
        <Image src={teramp1.src} alt="Main Article" width={433} height={196} />
      </div>
      <Category_3/>
    </div>
  );
};

export default Category_1;
