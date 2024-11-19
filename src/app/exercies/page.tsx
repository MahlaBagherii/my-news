import Header from "../../components/header";
import Link from "next/link";
import Sport from "../../container/Sport";
import Slider from "../../components/Slider";
import LatestTitles from "../../container/LatestTitles";
import Footer from "../../components/footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-5">
        <Sport />
        <Slider />
        <LatestTitles/>
        <Footer/>

      </div>
    </div>
  );
};

export default page;
