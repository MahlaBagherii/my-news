"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Calendar from "react-datepicker/dist/calendar";
import "react-datepicker/dist/react-datepicker.css";

export default function EditAds() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isStartPickerOpen, setIsStartPickerOpen] = useState(false);
  const [isEndPickerOpen, setIsEndPickerOpen] = useState(false);

  return (
    <div className="bg-white rounded-[20px]">
      <div className="p-4">
        <div className="whitespace-nowrap w-[114px] h-[26px] ml-[1013px]">
          <h1>ثبت / ویرایش تبلیغات</h1>
        </div>

        <div className="flex items-start">
          <div>
            <div className="flex mb-4 items-center mt-12">
              <label className="w-[66px] block text-sm font-medium text-gray-700 mb-2 whitespace-nowrap">
                عنوان تبلیغ
              </label>
              <input
                type="text"
                className="mr-6 w-[661px] h-[50px] ml-[20px] rounded-[5px] border border-gray-200 bg-[#FAFAFA] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex mb-4 items-center">
              <label className="w-[66px] block text-sm font-medium text-gray-800 mb-2 whitespace-nowrap">
                لینک
              </label>
              <input className="mr-6 w-[661px] h-[50px] bg-[#FAFAFA] border ml-[20px] border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white min-w-[219px] h-[120px] ml-[20px] flex flex-col items-center justify-between rounded-md mt-12 mr-8 p-4 border border-gray-300 shadow-sm">
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
                <img src="/icons/add.svg" alt="add icon" className="w-6 h-6" />
                <span className="whitespace-nowrap">افزودن بنر</span>
              </button>
            </div>

            <div className="mt-3 mr-[70px] w-full text-red-500 flex justify-center">
              <button className="flex items-center text-sm font-medium hover:text-red-700 transition">
                <img
                  src="/icons/close-circle.svg"
                  alt="delete icon"
                  className="w-4 h-4 ml-2"
                />
                حذف بنر
              </button>
            </div>
          </div>
        </div>

        <div className="flex mr-[82px]">
          <div className="relative w-[200px] h-[50px] ml-[50px]">
            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none">
              <img
                src="/icons/arrow-down.svg"
                alt="Custom Icon"
                className="w-5 h-5"
              />
            </span>
            <select className="border rounded-[5px] pr-4 ml-14 py-2 text-gray-700 w-full h-full appearance-none bg-transparent">
              <option value="default"> انتخاب جایگاه</option>
              <option value="top">جهان</option>
              <option value="middle">ایران</option>
              <option value="bottom">سیاست</option>
              <option value="default">اقتصاد </option>
              <option value="top">ورزش</option>
              <option value="middle">فرهنگ</option>
              <option value="bottom">حوادث</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-8 rtl:space-x-reverse mt-20 mr-6">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <label className="text-black text-sm">تاریخ شروع</label>
            <div className="relative flex items-center w-[160px] h-10 border border-gray-300 rounded-lg px-2 bg-white">
              <input
                type="text"
                placeholder="1403/02/18"
                value={startDate ? startDate.toLocaleDateString("fa-IR") : ""}
                readOnly
                className="text-black text-sm focus:outline-none w-full text-center"
                onClick={() => setIsStartPickerOpen(true)}
              />
              <img
                src="/icons/calendar-edit.svg"
                alt="Calendar Icon"
                className="w-5 h-5 text-gray-500 cursor-pointer"
                onClick={() => setIsStartPickerOpen(true)}
              />
              {isStartPickerOpen && (
                <div className="absolute top-12 left-0 z-10 bg-white rounded-lg shadow-lg p-2">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setIsStartPickerOpen(false);
                    }}
                    inline
                    dateFormat="yyyy/MM/dd"
                    calendarClassName="w-full text-gray-700 bg-white rounded-lg border border-gray-200 shadow-sm "
                    dayClassName={(date) =>
                      "cursor-pointer rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-100 transition " +
                      (date.getDate() === startDate?.getDate()
                        ? " bg-red-500 text-white"
                        : "")
                    }
                    todayButton="امروز"
                    customInput={
                      <input
                        type="text"
                        placeholder="تاریخ شروع"
                        className="w-full text-center text-sm focus:outline-none"
                      />
                    }
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 rtl:space-x-reverse !mr-16">
            <label className="text-black text-sm">تاریخ انقضاء</label>
            <div className="relative flex items-center w-[160px] h-10 border border-gray-300 rounded-lg px-2 bg-white">
              <input
                type="text"
                placeholder="1403/02/11"
                value={endDate ? endDate.toLocaleDateString("fa-IR") : ""}
                readOnly
                className="text-black text-sm focus:outline-none w-full text-center"
                onClick={() => setIsEndPickerOpen(true)}
              />
              <img
                src="/icons/calendar-edit.svg"
                alt="Calendar Icon"
                className="w-5 h-5 text-gray-500 cursor-pointer"
                onClick={() => setIsEndPickerOpen(true)}
              />
              {isEndPickerOpen && (
                <div className="absolute top-12 left-0 z-10 bg-  rounded-lg shadow-lg p-2">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => {
                      setEndDate(date);
                      setIsEndPickerOpen(false);
                    }}
                    inline
                    dateFormat="yyyy/MM/dd"
                    calendarClassName="w-full text-gray-700 bg-white rounded-lg border border-gray-200 shadow-sm"
                    dayClassName={(date) =>
                      "cursor-pointer rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition" +
                      (date.getDate() === endDate?.getDate()
                        ? " bg-red-500 text-white"
                        : "")
                    }
                    todayButton="امروز"
                    customInput={
                      <input
                        type="text"
                        placeholder="تاریخ پایان"
                        className="w-full text-center text-sm focus:outline-none"
                      />
                    }
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-black text-sm !mr-[210px]">
              فعال / غیرفعال
            </span>
            <label className="relative inline-flex items-center cursor-pointer pr-10">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner peer-checked:bg-blue-500 transition-all"></div>
              <div className="absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0 peer-checked:translate-x-5 transition-transform"></div>
            </label>
          </div>
        </div>

        <div className="bg-blue-500 w-[109px] h-12 mr-[930px] mt-[60px] rounded-xl text-white flex items-center justify-center">
          <button>ثبت</button>
        </div>
      </div>
    </div>
  );
}
