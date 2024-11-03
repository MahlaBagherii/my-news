import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import news1 from "../../public/images/news1.svg";

const Header = () => {
    const links = [
        { title: "صفحه اصلی", href: "/" },
        { title: "دانش و فن آوری", href: "#" },
        { title: "جامعه", href: "#" },
        { title: "سلامت", href: "#" },
        { title: "فرهنگ", href: "#" },
        { title: "ورزش", href: "#" },
        { title: "اقتصاد", href: "#" },
        { title: "سیاست", href: "#" },
        { title: "جهان", href: "#" },
        { title: "بیشتر ▼", href: "/" }
      ];
    
  return (
    <div className="bg-white text-black ">
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
        <div className="flex gap-5 items-center px-3">
          <Image src={logo} alt="logo" width={46} height={46} />
          <Link href="#" className="text-sm hover:text-lg">
            درباره ما
          </Link>
          <Link href="#" className="text-sm hover:text-lg">
            عضویت
          </Link>
          <Link href="#" className="text-sm hover:text-lg">
            ارتباط با ما
          </Link>
        </div>
        <div className="flex items-center px-3">
          <input
            type="text"
            placeholder="کلید واژه خود را جستجو کنید"
            className="bg-gray-100 text-sm w-48 py-2 rounded-md focus:outline-none text-center"
          />
          <button className="text-black pr-5">تا ▼</button>
        </div>
      </div>
      <div className="flex space-x-8 pr-10 py-4 bg-black text-white justify-start w-full h-[47px]">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="text-sm hover:text-[#ff4b48] ml-6">
          {link.title}
        </Link>
      ))}
    </div>
      {/* <div className="flex justify-between">
        <section className="col-span-2">
          <h1 className="text-xl font-bold mb-4">خبر اصلی</h1>
          <div className="bg-white p-4 border rounded-lg">
            <p>
              قبل از اینکه بایدن بتواند اوکراین را نجات دهد، باید از نشست ناتو
              برای نجات خود استفاده کند.
            </p>
            <Image
              src={news1}
              alt="main-news"
              width={500}
              height={300}
              className="mt-4"
            />
          </div>
        </section>

        <div className="flex gap-6 p-3">
          
        </div>
      </div> */}
    </div>
  );
};

export default Header;
