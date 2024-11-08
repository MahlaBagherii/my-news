import Image from "next/image";
import advertising1 from "../../public/images/advertising1.svg";
import advertising2 from "../../public/images/advertising2.svg";

const Advertising = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 bg-[#1D1D1D] p-4 h-[169px] w-full">
        <div className="flex items-center p-4 rounded-md">
          <div className="relative mr-4 w-[728px] h-[90px]">
            <Image src={advertising1} alt="Wallex Logo" />
          </div>
        </div>

        <div className="flex items-center p-4 rounded-m">
          <div className="relative w-[359px] h-[110px] mr-4">
            <Image
              src={advertising2}
              alt="Hast Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
