"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  // داده‌های نمودار
  const data = {
    labels: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه"],
    datasets: [
      {
        label: "بازدید صفحه",
        data: [10000, 9200, 8700, 8800, 7600, 7300],
        backgroundColor: "#4F46E5", // رنگ آبی
      },
      {
        label: "بازدید اختصاصی",
        data: [8800, 8600, 8500, 8400, 7200, 7000],
        backgroundColor: "#F43F5E", // رنگ قرمز
      },
      {
        label: "نرخ بازگشت",
        data: [1500, 1400, 1300, 1200, 1100, 900],
        backgroundColor: "#10B981", // رنگ سبز
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-10">
      {/* دکمه‌های بالا */}
      <div className="flex items-center justify-between w-full max-w-6xl mb-6 px-4">
        <div className="flex space-x-4 space-x-reverse">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">روزانه</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">هفت روز</button>
        </div>
        <div className="flex space-x-2 space-x-reverse">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">{`<<`}</button>
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">{`<`}</button>
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">{`>`}</button>
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">{`>>`}</button>
        </div>
      </div>

      {/* نمودار و اطلاعات کناری */}
      <div className="flex w-full max-w-6xl">
        {/* بخش نمودار */}
        <div className="w-3/4 bg-white shadow-lg rounded-xl p-6">
          <Bar data={data} options={options} />
        </div>

        {/* بخش اطلاعات آماری */}
        <div className="w-1/4 bg-white shadow-lg rounded-xl p-6 ml-4">
          <h2 className="text-lg font-bold text-gray-700 mb-4">آمار بازدید</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span>میانگین بازدید روزانه از صفحه</span>
              <span className="font-bold text-gray-800">۷۳۰۰</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>میانگین بازدید اختصاصی</span>
              <span className="font-bold text-gray-800">۲۸۰۰</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>میانگین بازدید اولین بار</span>
              <span className="font-bold text-gray-800">۱۲۰۰</span>
            </div>
            <div className="flex justify-between">
              <span>میانگین بازگشت</span>
              <span className="font-bold text-gray-800">۱۵۰۰</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
