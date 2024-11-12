import Image from "next/image";

import latest from "../../public/images/latest.svg";
import latest2 from "../../public/images/latest2.svg";
import latest3 from "../../public/images/latest3.svg";
import latest4 from "../../public/images/latest4.svg";
import latest5 from "../../public/images/latest5.svg";


const Sport_4 = () => {
  const newsData = [
    {
      image: latest,
      title: "توافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم بیرانوند برگرددتوافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم بیرانوند برگردد",
      description:
        "فوتبال جهان | توافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم بیرانوند برگرددتوافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم بیرانوند برگردد",
    },
    {
      image: latest2,
      title: "رضازاده عکس چه کسانی را روی دیوار اتاقش زده بود؟",
      description: "کشتی و وزنه برداری | قهرمان سابق المپیک مهمان کافه خبر خبرآنلاین بود.",
    },
    {
      image: latest3,
      title: "تک نگاری| امین کاویانی نژاد کیست؟ به دنبال مهم ترین مدال زندگی",
      description: "کشتی و وزنه برداری | کاویانی‌نژاد در المپیک پاریس به دنبال آن است که بتواند مهمترین مدال زندگی اش را کسب کند.",
    },
    {
      image: latest4,
      title: "عجیب اما واقعی، بازی دوستانه با پرسپولیس تکذیب شد!",
      description: "لیگ برتر | تیم ترکیه‌ای ادعا کرد که با پرسپولیس بازی نکرده است.",
    },
    {
      image: latest5,
      title:
        "ناهید- کیمیا چشم در چشم رفیق قدیمی، سکانس دوم، هنوز یه نیمه مونده از شب ما",
      description: "ورزش های رزمی | می گویند تاریخ دو بار تکرار می‌شود؛ یک بار کمدی و بار دوم تراژدی. ناهید بخش تراژدی ماجرا را تجربه کرده و حالا نوبت روایت کمیک است.",
    },
  ];
  return (
    <div>
    <div className="p-5">
       <h1 className="border-b font-bold border-black pb-3  w-[300px]">آخرین عناوین خبری</h1>
       </div>
    <div className="flex flex-col gap-5 p-10]">
      {newsData.map((news, index) => (
        <div key={index} className="flex gap-5 ">
          <div className="">
            <Image
              src={news.image}
              alt={news.title}
              width={150}
              height={150}
              className="w-[255px] h-[167px]"
            />
          </div>
          <div className="">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {news.title}
            </h2>
            <p className="text-gray-600">{news.description}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
      <button className="w-[130px] h-[56px] text-white bg-[#500C0B] rounded-md">
        بیشتر
      </button>
      </div>
    </div>
    </div>
  );
};

export default Sport_4;
