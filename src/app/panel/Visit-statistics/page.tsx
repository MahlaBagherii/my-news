"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const chartData = {
  labels: [
    "28 شنبه",
    "29 یکشنبه",
    "30 دوشنبه",
    "31 سه شنبه",
    "1 چهارشنبه",
    "2 پنجشنبه"
  ],
  datasets: [
    {
      label: "Page Views",
      data: [78438, 91196, 96388, 81979, 69767, 75034],
      backgroundColor: "rgba(54, 162, 235, 0.6)"
    },
    {
      label: "Unique Visits",
      data: [72335, 33358, 28885, 81779, 54371, 63334],
      backgroundColor: "rgba(255, 99, 132, 0.6)"
    },
    {
      label: "Bounce Rate",
      data: [19156, 9649, 28736, 69738, 53376, 15487],
      backgroundColor: "rgba(75, 192, 192, 0.6)"
    }
  ]
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Website Visit Statistics"
    }
  }
};

export default function Chart(): JSX.Element {
  const [view, setView] = useState<string>("daily");
  const [showDailyOptions, setShowDailyOptions] = useState<boolean>(false);
  const [showWeeklyOptions, setShowWeeklyOptions] = useState<boolean>(false);

  const toggleDailyOptions = (): void => {
    setShowDailyOptions(!showDailyOptions);
    setShowWeeklyOptions(false);
  };

  const toggleWeeklyOptions = (): void => {
    setShowWeeklyOptions(!showWeeklyOptions);
    setShowDailyOptions(false);
  };

  const handleOptionClick = (option: string): void => {
    setView(option);
    setShowDailyOptions(false);
    setShowWeeklyOptions(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-right w-full sm:w-auto">آمار بازدید</h2>
        <div className="flex gap-2">
          <div className="relative">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-[139px] h-12 flex items-center justify-center gap-2"
              onClick={toggleWeeklyOptions}
            >
              هفت روز
              {showWeeklyOptions ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {showWeeklyOptions && (
              <ul className="absolute mt-2 w-[139px] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {[
                  { label: "چهارده روزه", value: "fourteenDays" },
                  { label: "سی روزه", value: "thirtyDays" },
                  { label: "شش ماهه", value: "sixMonths" },
                  { label: "سالانه", value: "yearly" }
                ].map((option) => (
                  <li
                    key={option.value}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {["-", "+", "«", "‹", "›", "»"].map((symbol, index) => (
            <button
              key={index}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-12 h-12 text-2xl"
            >
              {symbol}
            </button>
          ))}
          <div className="relative">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-[139px] h-12 flex items-center justify-center gap-2"
              onClick={toggleDailyOptions}
            >
              روزانه
              {showDailyOptions ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {showDailyOptions && (
              <ul className="absolute mt-2 w-[139px] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {[
                  { label: "هفتگی", value: "weekly" },
                  { label: "ماهانه", value: "monthly" },
                  { label: "شش ماهه", value: "sixMonths" },
                  { label: "سالانه", value: "yearly" }
                ].map((option) => (
                  <li
                    key={option.value}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-6 items-start">
        <div className="bg-[#fdebeb] p-4 rounded-xl shadow-md w-full sm:w-[278px] h-[430px] scale-90">
          {[
            { label: "میانگین بازدید روزانه از صفحه", value: "۷۳.۳۰۰" },
            { label: "میانگین بازدید انحصاری روزانه از صفحه", value: "۲۸.۷۰۰" },
            { label: "میانگین بازدید روزانه برای اولین بار", value: "۱۲.۷۰۰" },
            { label: "میانگین برگشت از بازدید روزانه", value: "۱۵.۹۰۰" }
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-700 text-sm mb-4">{item.label}</p>
              <p className="text-gray-900 text-xl font-bold">{item.value}</p>
              {index < 3 && <hr className="mt-6 border-red-500" />}
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="w-full h-[800px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
