"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DeleteModal from "../../../container/DeleteNotification";
import { mock } from "node:test";
import { mockdata } from "./mock";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  status: boolean;
}

const Dashboard = () => {
  const router = useRouter();
  const [newsList, setNewsList] = useState<NewsItem>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await fetch("https://grs.pythonanywhere.com/news/1/");
  //       const data = await response.json();
  //       console.log(data, "lll");
  //       setNewsList(data);
  //     } catch (error) {
  //       console.error("Error fetching news:", error);
  //     }
  //   };

  //   fetchNews();
  // }, []);

  const handleAddNews = () => {
    router.push("/panel/add-news");
  };

  const handleDeleteClick = (id: number) => {
    setSelectedNewsId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setNewsList((prev) => prev.filter((news) => news.id !== selectedNewsId));
    setShowModal(false);
    setSelectedNewsId(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedNewsId(null);
  };

  const handleEditClick = (id: number) => {
    router.push(`/panel/add-news?id=${id}`);
  };

  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px]">
        <div className="flex items-center justify-between px-6 mt-2">
          <h1 className="text-lg font-bold text-gray-700">مدیریت اخبار</h1>
          <div className="flex items-center gap-3 flex-row-reverse">
            <button
              className="bg-[#2F80ED] text-white w-[122px] h-12 rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#256bbd]"
              onClick={handleAddNews}
            >
              <img src="/icons/plus.svg" alt="plus" />
              افزودن خبر
            </button>
          </div>
        </div>

        <div className="overflow-x-auto mx-4 mt-4">
          <div className="w-full bg-white shadow-md overflow-hidden">
            <div className="bg-[#AC2043] text-white rounded-[10px] w-full flex">
              <p className="py-3 px-4 text-right">ردیف</p>
              <p className="py-3 px-24 text-right mr-[100px]">عنوان خبر</p>
              <p className="py-3 px-4 text-right mr-[100px]">دسته بندی</p>
              <p className="py-3 px-4 text-right mr-[50px]">تاریخ</p>
              <p className="py-3 px-4 text-right mr-[50px]">عملیات</p>
              <p className="py-3 px-3 text-right mr-[50px]">وضعیت</p>
            </div>
            <div>
              {mockdata.map((item, index) => (
                <div
                  key={index}
                  className="even:bg-red-50 rounded-md w-full flex"
                >
                  <p className="py-3 px-4 text-right w-[20px]">{item.id}</p>
                  <p className="py-3 px-24 text-right w-[380px] mr-[100px] text-nowrap">
                    {item.title}
                  </p>
                  <p className="py-3 px-4 text-right w-[140px] flex justify-center">
                    {item.category}
                  </p>
                  <p className="py-3 px-4 text-right">{item.date}</p>
                  <div className="py-3 px-4 text-right w-[150px] flex justify-around">
                    <button onClick={() => handleEditClick(item.id)}>
                      <img
                        src="/icons/edit.svg"
                        alt="Edit"
                        className="w-5 h-5 inline"
                      />
                    </button>
                    <button onClick={() => handleDeleteClick(item.id)}>
                      <img
                        src="/icons/trash.svg"
                        alt="Delete"
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                  <p className="py-3 px-3 text-right flex justify-center w-[120px]">
                    {item.status ? (
                      <img
                        src="/icons/tick.svg"
                        alt="Active"
                        className="w-5 h-5 inline"
                      />
                    ) : (
                      <img
                        src="/icons/close.svg"
                        alt="Inactive"
                        className="w-5 h-5 inline"
                      />
                    )}
                  </p>
                </div>
              ))}
              {/* {newsList.status} */}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <DeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Dashboard;
