import Image from "next/image";
import Ad from "../../public/images/Ad.svg"

const Advertising_2 = () => {
  return (
    <div className="h-[90px] w-[91.66666666666667%] mx-auto">
      <Image src={Ad} alt="ad" className='w-full'  />
    </div>
  )
}

export default Advertising_2
