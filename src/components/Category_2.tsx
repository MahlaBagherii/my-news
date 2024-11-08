import Image from "next/image";
import majles from "../../public/images/majles.svg";
const Category_2 = () => {
  const newsData = [
   
    {
      title: "بررسی مناظره جنجالی بایدن و ترامپ/بازی به نفع جمهوری‌ خواهان/ واکنش‌ها چه بود؟",
      description:
        "این نخستین مناظره‌ در تاریخ انتخابات ریاست جمهوری آمریکاست که در آن یک رئیس‌جمهور مستقر با سلف خود یعنی رئیس‌جمهور سابق در برابر دیدگان میلیون‌ها بیننده تلویزیونی قرار می‌گیرد.",
      date: "جهان | ۲ روز پیش",
    },
    {
      title:
        "سید حسن نصرالله: آینده ملت‌ها و حکومت‌ها به تحولات جمهوری اسلامی ایران وابسته است",
      description:
        "سید حسن نصرالله، دبیرکل حزب‌الله لبنان در سخنانی در چهلمین روز شهادت شهید آیت‌الله رئیسی و همراهانش به ملت ایران مجددا تسلیت گفت.",
      date: "جهان | ۲ روز پیش",
    },
  ];
  return (
    <div>
      <div className=" p-4 max-w-screen-md">
        <div className="mb-6 ">
          <Image
            src={majles}
            alt="European Parliament"
            width={450}
            height={153}
            className="mb-2 "
          />
          <h3>بیگدلی: با برد ترامپ اوضاع وخیم‌تر هم می‌شود / پیروزی راست افراطی در اروپا خطرناک است</h3>
          <p className="pt-5 border-b border-black">شش میلیون مسلمان در فرانسه وجود دارد که با برخورد با آنها در فرانسه شاهد آشوب گسترده اجتماعی خواهیم بود. ارتباط پاریس با کشورهای مسلمان هم دچار خلل خواهد شد و بازار کشورهای اسلامی را از دست خواهد داد.</p>
        </div>

        <div className="space-y-6">
          {newsData.map((news, index) => (
            <div key={index} className="bg-white p-4 border-b border-black">
              <h3 className="font-bold text-lg mb-2">{news.title}</h3>
              <p className="text-gray-700 text-sm mb-3">{news.description}</p>
              <p className="text-gray-500 text-xs">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category_2;
