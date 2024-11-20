import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import MainLayout from "../../components/MainLayout";

const layout = ({ children }) => {
  return (
    <div className="flex w-full h-screen bg-[#F2F2F2] overflow-hidden">
      {/* Sidebar */}
      <div className="w-[18%] h-full">
        <Sidebar />
      </div>

      <div className="flex flex-col w-[82%] h-full px-4 py-4">
        <div className="h-[300px] w-full mb-4">
          <Topbar />
        </div>

        <div className="bg-white rounded-[20px] p-4 h-[1000%]">
          <div>{children}</div>
          <MainLayout />
        </div>
      </div>
    </div>
  );
};

export default layout;
