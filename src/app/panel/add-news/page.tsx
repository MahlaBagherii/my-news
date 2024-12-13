"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TextEditor from "../../../container/TextEditor";

const fakeNews = [
  {
    id: 1,
    title: "پیشرفت تیم ملی در مسابقات آسیایی",
    category: "ورزشی",
    shortDescription: "توضیحات کوتاه درباره خبر ورزشی",
    date: "1402/08/30",
    keywords: "ورزش, تیم ملی, بازی‌ها",
    status: true
  },
  {
    id: 11,
    title: "Marya",
    category: "گوربا",
    shortDescription: "توضیحات کوتاه درباره گوربا",
    date: "1383/10/12",
    keywords: "گوربا, Marya",
    status: false
  }
];

export default function AddNews() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    category: "",
    keywords: "",
    status: false
  });

  useEffect(() => {
    if (id) {
      const newsItem = fakeNews.find((news) => news.id === parseInt(id));
      if (newsItem) {
        setFormData({
          title: newsItem.title,
          shortDescription: newsItem.shortDescription || "",
          category: newsItem.category || "",
          keywords: newsItem.keywords || "",
          status: newsItem.status || false
        });
      }
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-white rounded-[20px]">
      <div className="p-4">
        <div>
          <div className="w-[114px] h-[26px] ml-[1013px]">
            <h1>افزودن خبر جدید</h1>
          </div>

          <div className="flex items-start">
            <div>
              <div className="flex mb-4 items-center mt-12">
                <label className="w-[66px] block text-sm font-medium text-gray-700 mb-2">
                  عنوان خبر
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mr-6 w-[661px] h-[50px] ml-[20px] rounded-[5px] border border-gray-200 bg-[#FAFAFA] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="flex mb-4 items-center">
                <label className="w-[66px] block text-sm font-medium text-gray-800 mb-2 whitespace-nowrap ">
                  توضیح کوتاه
                </label>
                <input
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  className="mr-6 w-[661px] h-[147px] bg-[#FAFAFA] border ml-[20px] border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white min-w-[219px] h-[131px] ml-[20px] flex flex-col items-center justify-between rounded-md mt-12 mr-8 p-4 border border-gray-300 shadow-sm">
                <div className="flex items-center text-black gap-2 justify-start w-full">
                  <img
                    src="/icons/gallery.svg"
                    alt="gallery icon"
                    className="w-4 h-4"
                  />

                  <img
                    src="/icons/video-play.svg"
                    alt="video play icon"
                    className="w-4 h-4"
                  />

                  <span className="text-sm">JPEG - MP4</span>
                </div>

                <button className="flex items-center justify-center w-[130px] h-[32px] mt-5 mb-12 border-2 border-dashed border-gray-400 rounded-md text-black hover:bg-gray-50 transition">
                  <img
                    src="/icons/add.svg"
                    alt="add icon"
                    className="w-6 h-6"
                  />
                  <span className="whitespace-nowrap">افزودن رسانه</span>
                </button>
              </div>

              <div className="mt-4 mr-[70px] w-full text-red-500 flex justify-center">
                <button className="flex items-center text-sm font-medium hover:text-red-700 transition">
                  <img
                    src="/icons/close-circle.svg"
                    alt="delete icon"
                    className="w-4 h-4 ml-2"
                  />
                  حذف رسانه
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mr-[82px] mt-5">
          <div className="relative w-[135px] h-[50px] ml-[50px]">
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none">
              <img
                src="/icons/arrow-down.svg"
                alt="Custom Icon"
                className="w-5 h-5"
              />
            </span>
            <select className="border rounded-[5px] pr-4 py-2 text-gray-700 w-full h-full appearance-none bg-transparent">
              <option value="default">دسته بندی</option>
              <option value="top">جهان</option>
              <option value="middle">ایران</option>
              <option value="bottom">سیاست</option>
              <option value="default">اقتصاد</option>
              <option value="top">ورزش</option>
              <option value="middle">فرهنگ</option>
              <option value="bottom">حوادث</option>
            </select>
          </div>

          <div className="relative w-[167px] h-[50px] ml-[50px]">
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none">
              <img
                src="/icons/arrow-down.svg"
                alt="Custom Icon"
                className="w-5 h-5"
              />
            </span>
            <select className="border rounded-[5px] pr-4 py-2 text-gray-700 w-full h-full appearance-none bg-transparent">
              <option value="default">موقعیت نمایش</option>
              <option value="top">بدون برچسب</option>
              <option value="middle">ویژه اصلی 1</option>
              <option value="bottom">ویژه اصلی 2</option>
              <option value="default">برگزیده اصلی</option>
              <option value="top">ویژه دسته 1</option>
              <option value="middle">ویژه دسته 2</option>
              <option value="bottom">پایین</option>
            </select>
          </div>
        </div>

        <div className="flex mb-3 items-center mt-5">
          <label className="block text-sm font-medium text-gray-700 whitespace-nowrap ml-2">
            کلمات کلیدی
          </label>

          <input
            type="text"
            className="w-[660px] h-[50px] ml-[48px] rounded-[5px] border border-gray-200 bg-[#FAFAFA] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="flex items-center gap-2">
            <input
              id="confirm-checkbox"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="confirm-checkbox" className="text-sm text-gray-700">
              تایید برای نمایش
            </label>
          </div>
        </div>
      </div>
      <TextEditor />
    </div>
  );
}