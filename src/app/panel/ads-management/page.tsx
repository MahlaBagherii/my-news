"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteModal from "../../../container/DeleteNotification";

interface AdItem {
  id: number;
  title: string;
  category: string;
  date: string;
  status: boolean;
}

const Page = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fakeNews: AdItem[] = [
    {
      id: 1,
      title: "بنر صفحه اصلی 1",
      category: "1402/08/30",
      date: "1402/08/30",
      status: true
    },
    {
      id: 2,
      title: "بنر صفحه اصلی 2",
      category: "1402/08/30",
      date: "1383/10/12",
      status: false
    },
    {
      id: 3,
      title: "بنر صفحه اصلی 3",
      category: "1402/08/30",
      date: "1383/04/13",
      status: true
    }
  ];

  const handleDeleteClick = () => setIsModalOpen(true);
  const handleConfirmDelete = () => setIsModalOpen(false);
  const handleCancelDelete = () => setIsModalOpen(false);

  const handleAddNewAd = () => router.push("/panel/edit-ads");
  const handleEditAd = (id: number) => router.push(`/panel/edit-ads?id=${id}`);

  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px]">
        <div className="flex items-center justify-between px-6 mt-2">
          <h1 className="text-lg font-bold text-gray-700">مدیریت تبلیغات</h1>

          <div className="flex items-center gap-3 flex-row-reverse">
            <button
              onClick={handleAddNewAd}
              className="bg-[#2F80ED] text-white w-[180px] h-12 rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#256bbd] whitespace-nowrap"
            >
              <img src="/icons/plus.svg" alt="plus" />
              افزودن تبلیغ جدید
            </button>

            <div className="relative w-[300px] ml-8">
              <span className="absolute top-3 right-3 text-gray-400 ml-6">
                <img src="/icons/search.svg" alt="Search" />
              </span>
              <input
                type="text"
                placeholder="جستجو"
                className="w-full bg-[#F6F6F6] h-12 px-12 ml-24 py-2 border rounded-[10px] text-gray-700 placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mx-4 mt-4">
          <div className="w-full bg-white shadow-md overflow-hidden">
            <div className="bg-[#AC2043] text-white rounded-[10px] w-full flex">
              <p className="py-3 px-4 text-right">ردیف</p>
              <p className="py-3 px-24 text-right mr-[100px]">جایگاه تبلیغ</p>
              <p className="py-3 px-4 text-right mr-[80px]">تاریخ شروع</p>
              <p className="py-3 px-4 text-right mr-[80px]">تاریخ انقضاء</p>
              <p className="py-3 px-4 text-right mr-[55px]">عملیات</p>
              <p className="py-3 px-3 text-right mr-[50px]">وضعیت</p>
            </div>
            <div>
              {fakeNews.map((news) => (
                <div
                  key={news.id}
                  className="even:bg-red-50 rounded-md w-full flex"
                >
                  <p className="py-3 px-4 text-right w-[20px]">{news.id}</p>
                  <p className="py-3 px-24 text-right w-[380px] mr-[10px] text-nowrap">
                    {news.title}
                  </p>
                  <p className="py-3 px-36 text-right w-[140px] flex justify-center mr-6">
                    {news.category}
                  </p>
                  <p className="py-3 px-4 text-right">{news.date}</p>
                  <div className="py-3 px-4 text-right w-[150px] flex justify-around mr-8">
                    <button onClick={() => handleEditAd(news.id)}>
                      <img
                        src="/icons/edit.svg"
                        alt="Edit"
                        className="w-5 h-5 inline"
                      />
                    </button>
                    <button onClick={handleDeleteClick}>
                      <img
                        src="/icons/trash.svg"
                        alt="Delete"
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                  <p className="py-3 px-3 text-right flex justify-center w-[120px]">
                    {news.status ? (
                      <span className="text-green-500">فعال</span>
                    ) : (
                      <span className="text-red-500">غیر فعال</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <DeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Page;
