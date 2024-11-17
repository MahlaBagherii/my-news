import Image from "next/image";
import biden from "../../public/images/teramp.svg";
import Frame1 from "../../public/images/Frame 40.svg";
import Frame2 from "../../public/images/Frame 40 (1).svg";
import Frame3 from "../../public/images/Frame 40 (2).svg";
import Frame4 from "../../public/images/6054666 1.svg";
import Link from "next/link";

export default function Col_2() {
  const newsData = [
    {
      src: Frame1,
      alt: "خودروی اوبر با جایزه بزرگ",
      description:
        "خودروی اوبر باکشفته به تاکسی‌های معمولی و 90 میلیون تومان جایزه بگیرید!",
    },
    {
      src: Frame2,
      alt: "هشدار مهم امور هواشناسی",
      description: "هشدار مهم امور هواشناسی به پایتخت نشینان",
    },
    {
      src: Frame3,
      alt: "حمله اسرائیل از تجاوز بر دمشق",
      description: "حمله اسرائیل از تجاوز بر دمشق و سرزمین‌های فلسطین",
    },
    {
      src: Frame4,
      alt: "نکات مهم تغذیه",
      description: "این شش مواد غذایی را با معده خالی نخورید!",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        قبل از اینکه بایدن بتواند اوکراین را نجات دهد، باید از نشست ناتو برای
        نجات خود استفاده کند
      </h1>
      <Link href="/news">
        <div className="flex flex-col items-center mb-8">
          <Image
            src={biden}
            alt="بایدن در نشست ناتو"
            width={600}
            height={400}
            className="rounded-lg hover:opacity-70 ease-linear transition-all duration-200"
          />
          <p className="text-gray-700 text-center mt-2">
            جو بایدن، رئیس‌جمهوری آمریکا روز سه‌شنبه 9 ژوئیه (19 تیر 1402) در
            نشست سران ناتو در واشنگتن وعده داد که از قدرت در اوکراین در برابر
            تجاوز روسیه دفاع خواهد کرد. از این روی تیم بین‌المللی آمریکاستاده
            کرد تا متحدان داخلی و بین‌المللی نشان دهد که قدرت توانایی رهبری
            دارد.
          </p>
        </div>
      </Link>

      <div className="grid grid-cols-2 gap-4">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:opacity-70 ease-linear transition-all duration-200"
          >
            <Image
              src={news.src}
              alt={news.alt}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-700">{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
