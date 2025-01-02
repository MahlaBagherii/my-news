"use client";

import React from "react";

type PageProps = {};
type RowProps = { title: string; onSave?: () => void; onEdit?: () => void };
type RowWithInputProps = {
  title: string;
  value?: string;
  onChange?: (value: string) => void;
  onSave?: () => void;
  onEdit?: () => void;
};

const Row: React.FC<RowProps> = ({ title, onSave, onEdit }) => {
  return (
    <div className="even:bg-red-50 rounded-md w-full flex mt-14 h-[56px]">
      <span className="py-3 px-5 text-right w-[380px]">{title}</span>
      <div className="flex items-center py-1 mr-[530px]">
        {onEdit && (
          <button onClick={onEdit}>
            <img
              src="/icons/edit.svg"
              alt="edit"
              className="w-6 h-6 mt-1 ml-[80px] mr-4"
            />
          </button>
        )}
        {onSave && (
          <button
            onClick={onSave}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4 h-8 w-[72px] items-center flex justify-center"
          >
            ثبت
          </button>
        )}
      </div>
    </div>
  );
};

const RowWithInput: React.FC<RowWithInputProps> = ({
  title,
  value,
  onChange,
  onSave,
  onEdit
}) => {
  return (
    <div className="even:bg-red-50 rounded-md w-full h-[56px] flex">
      <span className="py-3 px-5 text-right w-[380px]">{title}</span>
      <div className="flex py-1">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="border rounded-md w-[720px] h-8 ml-[80px] mt-2 border-black"
        />
        <div className="flex justify-between items-center">
          {onEdit && (
            <button onClick={onEdit}>
              <img
                src="/icons/edit.svg"
                alt="edit"
                className="w-6 h-6 mt-1 ml-[80px]"
              />
            </button>
          )}
          {onSave && (
            <button
              onClick={onSave}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-[14px] h-8 w-[72px] items-center flex justify-center"
            >
              ثبت
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Page: React.FC<PageProps> = () => {
  return (
    <div className="flex items-center justify-center px-5">
      <div className="w-full rounded-[20px]">
        <div className="flex items-center justify-between px-6 mt-2">
          <h1 className="text-lg font-bold text-gray-700">تنظیمات</h1>
        </div>

        <div className="overflow-x-auto mx-4 mt-4">
          <div className="w-full bg-white shadow-md overflow-hidden">
            <div className="bg-[#AC2043] text-white rounded-[10px] w-full flex">
              <span className="py-3 px-4 text-right">تنظیمات</span>
              <span className="py-3 px-24 text-right mr-[160px]">
                نام زیر دسته
              </span>
              <span className="py-3 px-4 text-right mr-[360px]">عملیات</span>
            </div>

            <Row title="لوگو" onEdit={() => {}} onSave={() => {}} />
            <RowWithInput
              title="تماس با ما"
              value=""
              onChange={() => {}}
              onEdit={() => {}}
              onSave={() => {}}
            />
            <RowWithInput
              title="درباره ما"
              value=""
              onChange={() => {}}
              onEdit={() => {}}
              onSave={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
