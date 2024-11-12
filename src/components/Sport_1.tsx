import Image from "next/image";
import sport1 from "../../public/images/sport1.svg";
import sport2 from "../../public/images/sport2.svg";
import sport3 from "../../public/images/sport3.svg";
import sport4 from "../../public/images/sport4.svg";
import sport5 from "../../public/images/beyranvand.svg";
import hover from "../../public/images/hover.svg";

const Sport_1 = () => {
  const items = [
    {
      id: 1,
      title: "مایلی‌کهن: انتخاب لباس کادر درمان برای ملی‌پوشان را می‌پسندم",
      description:
        "محمد مایلی‌کهن درباره جدایی ستارگان پرسپولیس و همچنین خریدهای  استقلال صحبت‌های تازه‌ای را مطرح کرد.",
      image: sport1,
    },
    {
      id: 2,
      title: "دلیل جدایی گلزن دربی از پرسپولیس مشخص شد",
      description:
        "وقتی مهدی عبدی کنار زمین نشست و حتی در نیمه دوم به زمین نرفت می‌شد تشخیص داد اتفاقاتی پیرامون او افتاده و شاید این بازیکن دیگر جایی در پرسپولیس نداشته باشد.",
      image: sport2,
    },
    {
      id: 3,
      title: "واکنش AFC به جدایی سردار آزمون از بایرلورکوزن",
      description:
        "کنفدراسیون فوتبال آسیا به انتقال ستاره ایرانی به لیگ امارات واکنش نشان داد.",
      image: sport3,
    },
    {
      id: 4,
      title:
        "توافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم بیرانوند برگردد",
      description:
        "اختلاف میان علیرضا بیرانوند و باشگاه پرسپولیس به اوج خود رسیده و طرفین به هیچ وجه از مواضع خود عقب نمی‌نشینند.",
      image: sport4,
    },
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="relative">
          <Image src={sport5} alt="main news" />
          <Image src={hover} alt="hover " className="absolute z-10 top-0" />
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-5">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className=" object-cover w-[182px] h-[130px]"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold  mb-2">{item.title}</h3>
                <p className="text-[#4F4F4F]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sport_1;
