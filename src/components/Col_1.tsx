import news1 from "../../public/images/newsmain1.svg";
import news2 from "../../public/images/newsmain2.svg";
import news3 from "../../public/images/newsmain3.svg";
import Image from "next/image";
const Col_1 = () => {
  const newsItems = [
    {
      imgSrc: news1,
      altText: "تصویر خبر اول",
      description:
        "انتظار می‌رود که صادرات نفت خام عربستان سعودی به چین در ماه آتی میلادی افزایش یابد و پس از ماه‌ها به حداقل ۴۴ میلیون بشکه برسد.",
    },
    {
      imgSrc: news2,
      altText: "تصویر خبر دوم",
      description:
        "اخیرا رئیس مرکز مدیریت بیماری‌های واگیردار وزارت بهداشت به دنبال مشاهده بیماری تب دنگی در ۷ استان کشور، در خصوص این بیماری هشدار داده است. اما تب دنگی چیست و چگونه منتقل می‌شود؟",
    },
    {
      imgSrc: news3,
      altText: "تصویر خبر سوم",
      description:
        "اعضای شورای امنیت سازمان ملل متحد، مسکو را به دلیل حمله موشکی روز گذشته که بخشی از بزرگترین بیمارستان کودکان اوکراین را نابود کرد، مورد انتقاد قرار دادند.",
    },
  ];
  return (
    <div>
      <div className="p-5">
        <div className="flex flex-col items-center space-y-6 gap-5">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="w-[360px] h-[340px] max-w-md bg-white rounded-md overflow-hidden shadow-md hover:filter hover:grayscale"
            >
              <Image
                src={item.imgSrc}
                alt={item.altText}
                width={400}
                height={250}
                className="w-full h-auto"
              />
              <p className="p-4 text-gray-800 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Col_1;
