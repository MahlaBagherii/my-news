import SideImageLayout from "../../components/Layout/SideImageLayout";
import LoginForm from "../../container/Auth/LoginForm";

const page = () => {
  return (
    <div className="flex h-screen">
      <div className="w-[50%]">
        <SideImageLayout />
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
