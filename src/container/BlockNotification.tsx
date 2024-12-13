const BlockUserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[331px] h-[336px] rounded-[20px] bg-white p-6 shadow-lg max-w-md relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <img src="/icons/close-circle2.svg" alt="close" />
        </button>

        <h3 className="text-center text-red-500 mt-5">مسدود کردن کاربر</h3>

        <div className="text-center text-gray-700 mt-8">
          <p>کاربر: {user.title}</p>
          <p className="mt-6 ml-12">نقش: {user.date}</p>
        </div>

        <div className="flex justify-center">
          <button
            className="w-[122px] h-12 rounded-[10px] bg-red-500 text-white px-6 py-2 whitespace-nowrap mt-16 hover:bg-red-600"
            onClick={onClose}
          >
            مسدود شود
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockUserModal;
