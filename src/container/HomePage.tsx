import Col_1 from "../components/Col_1";
import Col_2 from "../components/Col_2";
import Scrollbar from "../components/scrollbar";

const HomePage = () => {
  return (
    <div>
         <div className="h-[37px] w-full bg-[#1D1D1D]">
        <p className="text-white text-[12px]"><span className="text-lg text-white pr-10">●</span>خبرهای هواشناسی و نرخ ارز و خبر های فوری یا گزارش لحظه به لحظه حوادث لایو یا نتایج انتخابات</p>
      </div>
      <div className="flex gap-10">
        <Col_2/>
        <Col_1 />
        <Scrollbar />
      </div>
    </div>
  );
};

export default HomePage;
