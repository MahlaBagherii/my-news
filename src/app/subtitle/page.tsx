import Sidebar from "../../components/Layout/Sidebar";
import MainLayout from "../../container/Dashboard/MainLayout";
import Topbar from "../../components/Layout/Topbar";
export default function page() {
  return (
    <div className="flex w-full h-screen bg-[#F2F2F2]">
      <div className="w-[18%] h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[82%] h-full">
        <div className=" h-[300px] w-full">
          <Topbar />
        </div>
        <div className=" h-[700px] w-full">
          <MainLayout />
        </div>
      </div>
    </div>
  );
}
