import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image from'../../public/images/Group 31.png'

const Footer = () => {
  const sections = [
    {
      title: "جهان",
      items: [
        "آمریکا",
        "آسیا",
        "اروپا",
        "آفریقا",
        "روسیه",
        "افغانستان",
        "خاورمیانه",
      ],
    },
    {
      title: "سیاست",
      items: ["رهبری", "مجلس", "دولت", "دیپلماسی", "نهادها"],
    },
    {
      title: "اقتصاد",
      items: [
        "بازرگانی",
        "صنعت",
        "کشاورزی",
        "مسکن",
        "بانک و بیمه",
        "بازار کار",
        "بازار مالی",
      ],
    },
    {
      title: "ورزش",
      items: [
        "ورزش‌های رزمی",
        "کشتی",
        "فوتبال ملی",
        "فوتبال جهان",
        "المپیک و پارالمپیک",
      ],
    },
    {
      title: "فرهنگ",
      items: ["سینما", "تلویزیون", "ادبیات", "موسیقی", "رسانه", "کتاب"],
    },
    {
      title: "سلامت",
      items: ["سلامت عمومی", "بیماری‌ها", "سلامت روان", "مد و زیبایی"],
    },
    {
      title: "جامعه",
      items: ["آموزش", "محیط زیست", "سیاست اجتماعی"],
    },
    {
      title: "دانش و فن‌آوری",
      items: ["علمی", "فناوری", "فضا", "تحقیقات"],
    },
  ];
  return (
    <div>
      <footer className="bg-[#3b0d0c] text-white">
        <div className="p-6">
        <div className="text-right ">
          <h2 className="text-lg font-semibold mb-4">درباره ما</h2>
          <p className="text-s leading-relaxed">
            خبرگزاری ........... با در نظر گرفتن دو حوزه‌ی وسیع کاری در داخل و
            خارج کشور تلاش دارد اهداف خود را در جهت آگاهی بخشی و بصیرت افزایی
            محقق سازد. رسانه ها نقش بی بدیلی در شکلگیری، جهت‌دهی و مهندسی افکار
            عمومی دارند. این نقش در عرصه جنگ نرم اهمیت و برجستگی بیشتری دارد،
            لذا میتوان از جبهه رسانه‌های استکبار جهانی به عنوان زرادخانه غرب در
            جنگ نرم یادکرد. خبرگزاری TREE NEWS  با در نظر گرفتن دو حوزه ی وسیع
            کاری در داخل و خارج کشور تلاش دارد اهداف خود را در جهت آگاهی بخشی و
            بصیرت افزایی محقق سازد.
          </p>
        </div>

        <div className="w-full flex items-center justify-center p-10">
          <div className=" flex justify-center items-center mt-6 mb-10 border border-[#FF0C0C] w-[493px] h-[56px] bg-[#282828]">
            <input
              type="text"
              placeholder="کلید واژه خود را جستجو کنید"
              className="text-sm text-white bg-[#282828]  rounded-l-lg focus:outline-none"
            />
            <button className="rounded-r-lg px-4 py-2">🔍</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 w-[1320px] h-[528px] pr-10">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-md font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
        
          <div className="bg-[#1c1c1c] text-gray-300 h-[300px] w-full">
            <div className=" mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-500">
                <div className="flex items-center mb-4 md:mb-0 gap-5">
                  <Image
                    src= {image}
                    alt="Tree News"
                    width={20}
                    height={20}
                  />
                  <h2 className="text-2xl font-semibold ml-2">Tree News</h2>
                </div>

                <div className="flex space-x-4 text-sm text-gray-400">
                  <Link href="/" className="hover:text-white">
                    صفحه اصلی
                  </Link>
                  <span>|</span>
                  <Link href="/about" className="hover:text-white">
                    درباره ما
                  </Link>
                  <span>|</span>
                  <Link href="/contact" className="hover:text-white">
                    تماس
                  </Link>
                </div>
              </div>

              <div className="flex justify-center  mt-4 text-gray-400 gap-3 w-full">
                <Link
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="hover:text-white"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </Link>
                <Link
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="hover:text-white"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </Link>
                <Link
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="hover:text-white"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </Link>
              </div>

              <div className="mt-6 text-center text-xs text-gray-400">
                تمامی حقوق این سایت برای خبرگزاری Tree News محفوظ است. نقل مطالب
                با ذکر منبع بلامانع است.
                <br />
                Copyright © 2024 Tree News Agency, All rights reserved
              </div>
            </div>
          </div>
          
      </footer>
    </div>
  );
};

export default Footer;
