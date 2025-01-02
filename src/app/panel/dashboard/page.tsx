"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DeleteModal from "../../../container/DeleteNotification";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  status: boolean;
}

const Dashboard = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);

  const fakeNews: NewsItem[] = [
    {
      id: 1,
      title: "پیشرفت تیم ملی در مسابقات آسیایی",
      category: "ورزشی",
      date: "1402/08/30",
      status: true
    },
    {
      id: 11,
      title: "Marya",
      category: "گوربا",
      date: "1383/10/12",
      status: false
    },
    {
      id: 3,
      title: "pishi",
      category: "batman",
      date: "1383/04/13",
      status: true
    }
  ];

  const handleAddNews = () => {
    router.push("/panel/add-news");
  };

  const handleDeleteClick = (id: number) => {
    setSelectedNewsId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
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
              {fakeNews.map((news) => (
                <div
                  key={news.id}
                  className="even:bg-red-50 rounded-md w-full flex"
                >
                  <p className="py-3 px-4 text-right w-[20px]">{news.id}</p>
                  <p className="py-3 px-24 text-right w-[380px] mr-[100px] text-nowrap">
                    {news.title}
                  </p>
                  <p className="py-3 px-4 text-right w-[140px] flex justify-center">
                    {news.category}
                  </p>
                  <p className="py-3 px-4 text-right">{news.date}</p>
                  <div className="py-3 px-4 text-right w-[150px] flex justify-around">
                    <button onClick={() => handleEditClick(news.id)}>
                      <img
                        src="/icons/edit.svg"
                        alt="Edit"
                        className="w-5 h-5 inline"
                      />
                    </button>
                    <button onClick={() => handleDeleteClick(news.id)}>
                      <img
                        src="/icons/trash.svg"
                        alt="Delete"
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                  <p className="py-3 px-3 text-right flex justify-center w-[120px]">
                    {news.status ? (
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
