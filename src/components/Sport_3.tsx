import Image from "next/image";
import ex1 from "../../public/images/ex1.svg";
import ex2 from "../../public/images/ex2.svg";
import ex3 from "../../public/images/ex3.svg";
import adsport from "../../public/images/adsport.svg";
const Sport_3 = () => {
  const items = [
    {
      imgSrc: ex1,
      altText: "تصویر خبر اول",
      description: "گیتاریست استقلال در راه مس رفسنجان",
    },
    {
      imgSrc: ex2,
      altText: "تصویر خبر دوم",
      description: "عکس| شباهت لوگوی جدید تراکتور به لوگوی چند تیم اروپایی",
    },
    {
      imgSrc: ex3,
      altText: "تصویر خبر سوم",
      description:
        "معرفی جانشین بیرانوند، الکسیس گندوز و رویای درخشان در سومین قاره",
    },
  ];

  return (
    <div>
      <div className="p-3">
        <Image
          src={adsport}
          alt="ad"
          width={40}
          height={20}
          className="w-[300px] h-[90px]"
        />
        <Image
          src={adsport}
          alt="ad"
          width={40}
          height={20}
          className="w-[300px] h-[90px]"
        />
      </div>

      <div className="flex flex-col pr-5 gap-3 ">
        <h3 className="font-bold border-t w-[305px] mt-5 p-3">لیگ برتر</h3>
        {items.map((item, index) => (
          <div
            key={index}
            className=" bg-white overflow-hidden hover:filter hover:grayscale "
          >
            <Image
              src={item.imgSrc}
              alt={item.altText}
              className="w-[300px] h-[197px]"
            />
            <p className="py-4 text-gray-800 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sport_3;
