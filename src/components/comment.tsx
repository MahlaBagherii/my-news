import Category_3 from "./Category_3";

const Comment = () => {
  const comments = [
    {
      id: 1,
      name: "رضا ناصری",
      comment: "با تشکر از سایت خیلی خوبتون",
      likes: 7,
      dislikes: 0,
    },
    {
      id: 2,
      name: "محبوبه باقری",
      comment: "انتخابات از این جهت می‌تواند موثر و معنی‌دار باشد",
      likes: 4,
      dislikes: 2,
    },
    {
      id: 3,
      name: "ریحانه احمد پور",
      comment: "شاهد حضور همه طیف‌های سیاسی در این انتخابات نیستیم",
      likes: 10,
      dislikes: 4,
    },
    {
      id: 4,
      name: "ناصر رحمتی",
      comment:
        "بخشی از جریان‌ها یا اشخاص و افرادی که پایه سهم اجتماعی بالایی دارند",
      likes: 10,
      dislikes: 4,
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6   ">
      <h2 className="text-xl font-semibold text-right border-b-2 border-[#500C0B] pb-3 mb-4">
        نظرات کاربران
      </h2>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="py-4 border-b border-gray-200 last:border-none"
        >
          <p className="text-right font-semibold text-gray-800 mb-2">
            {comment.name}
          </p>

          <p className="text-right text-gray-600 mb-4">{comment.comment}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-gray-500 hover:text-green-500">
                👍
                <span>{comment.likes}</span>
              </button>
              <button className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-gray-500 hover:text-red-500">
                👎
                <span>{comment.dislikes}</span>
              </button>
            </div>

            <button className="text-[#500C0B] text-sm font-medium hover:underline">
              پاسخ
            </button>
          </div>
        </div>
      ))}
      <div className="max-w-4xl mx-auto p-6 pt-5">
        <h2 className="text-xl font-semibold text-right border-b-2 border-[#500C0B] pb-3 mb-4">
          نظر شما
        </h2>
        <div className="space-y-4">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="نام"
              className="w-[445px] border border-gray-300 rounded-md p-2 text-right focus:outline-none focus:ring-2 focus:ring-[#500C0B] focus:border-[#500C0B]"
            />
          </div>
          <div className="">
            <input
              placeholder="نظر شما"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 h-[162px]"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#500C0B] text-white py-2 px-4 rounded-md text-sm font-medium   hover:bg-red-900 focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
            >
              ثبت نظر
            </button>
          </div>
        </div>
        <div className="mt-5">
          <button className="bg-[#500C0B] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-red-900 focus:ring-2 focus:ring-red-700 focus:ring-offset-2">
            اخبار مرتبط
          </button>
        </div>
      </div>
      <Category_3 />
    </div>
  );
};

export default Comment;
