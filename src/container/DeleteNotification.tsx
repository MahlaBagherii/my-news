"use client";

type DeleteModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 text-center shadow-lg w-[503px] h-[290px] rounded-[20px] flex flex-col justify-center items-center">
        <div className="flex justify-center mb-4">
          <img
            src="/icons/trash2.svg"
            alt=""
            className="w-[65px] h-[65px] mb-8 text-red-500"
          />
        </div>

        <h3 className="text-lg mb-2 text-red-500">آیا از حذف اطمینان دارید</h3>

        <div className="flex justify-center gap-4 mt-4 rtl:space-x-reverse">
          <button
            className="w-24 px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            onClick={onConfirm}
          >
            بله
          </button>
          <button
            className="w-24 px-6 py-2 rounded-md border border-black text-gray-800 hover:bg-gray-100"
            onClick={onCancel}
          >
            خیر
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
