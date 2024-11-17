import Footer from "../components/footer"
import Sport_4 from "../components/Sport_4"
import Advertising_3 from "./Advertising_3"

const LatestTitles = () => {
  return (
    <div className="flex flex-col gap-6">
       <div className="p-5">
       <h1 className="border-b font-bold border-black pb-3  w-[300px]">آخرین عناوین خبری</h1>
       </div>
      <Sport_4/>
      <div className="flex justify-center">
      <button className="w-[130px] h-[56px] text-white bg-[#500C0B] rounded-md">
        بیشتر
      </button>
      </div>
      <Advertising_3/>
    </div>
  )
}

export default LatestTitles
