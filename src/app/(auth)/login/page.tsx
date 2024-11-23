import LoginForm from "./LoginForm";

const SideImage = () => {
  return (
    <div className="flex w-full flex-row-reverse md:flex-row-reverse h-screen overflow-hidden ">
      <div className="w-[35%] flex items-center justify-center relative bg-[#500C0B] overflow-hidden">
        <img
          src="/images/print-newspaper 1.svg"
          alt="Login Background"
          className="absolute w-full h-full object-cover opacity-20"
        />
        <div
          className="
                absolute
                transform
                -rotate-90
                font-bold
                text-[7vw] 
                text-[#FF0000]
                leading-none
                whitespace-nowrap
              "
        >
          TREE NEWS
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 md:p-0"></div>
      <div className="w-[65%] h-full flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};
export default SideImage;
