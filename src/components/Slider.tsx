"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import slide1 from "../../public/images/slide1.svg";
import slide2 from "../../public/images/slide2.svg";
import slide3 from "../../public/images/slide3.svg";
import slide4 from "../../public/images/slide4.svg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="bg-[#333333] p-10 h-[489px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <Image src={slide1}></Image>
          <div className="flex flex-col gap-8 pt-10 text-white">
            <p className="text-lg">یک میهمان ویژه در بازی تدارکاتی استقلال</p>
            <p className="text-sm">
              پرسپولیس در فصل نقل‌وانتقالات با حواشی و اتفاقات زیادی مواجه شده و
              جدایی چند بازیکن نگرانی هواداران را به همراه داشته است.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide2}></Image>
          <div className="flex flex-col gap-8 pt-10 text-white">
            <p className="text-lg">
              با وجود نارضایتی هواداران؛ پرسپولیس بازنده نقل‌وانتقالات نیست!
            </p>
            <p className="text-sm">
              پرسپولیس در فصل نقل‌وانتقالات با حواشی و اتفاقات زیادی مواجه شده و
              جدایی چند بازیکن نگرانی هواداران را به همراه داشته است.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide3}></Image>
          <div className="flex flex-col gap-8 pt-10 text-white">
            <p className="text-lg">
              تیم ملی به دنبال زمین بازی، عربستان به دنبال میزبانی جام جهانی!
            </p>
            <p className="text-sm">
              ورزشگاه آزادی به دلیل عملیات بازسازی توانایی میزبانی در لیگ و
              بازی‌های ملی را برای فصل پیش رو ندارد.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide4}></Image>
          <div className="flex flex-col gap-8 pt-10 text-white">
            <p className="text-lg">
              با وجود نارضایتی هواداران؛ پرسپولیس بازنده نقل‌وانتقالات نیست!
            </p>
            <p className="text-sm">
              پرسپولیس در فصل نقل‌وانتقالات با حواشی و اتفاقات زیادی مواجه شده و
              جدایی چند بازیکن نگرانی هواداران را به همراه داشته است.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide3}></Image>
          <div className="flex flex-col gap-8 pt-10 text-white">
            <p className="text-lg">
              تیم ملی به دنبال زمین بازی، عربستان به دنبال میزبانی جام جهانی!
            </p>
            <p className="text-sm">
              ورزشگاه آزادی به دلیل عملیات بازسازی توانایی میزبانی در لیگ و
              بازی‌های ملی را برای فصل پیش رو ندارد.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
