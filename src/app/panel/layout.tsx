import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import MainLayout from "../../components/MainLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-screen bg-[#F2F2F2] overflow-hidden">
      <div className="w-[18%] h-full">
        <Sidebar />
      </div>

      <div className="flex flex-col w-[82%] px-4 py-4">
        <div className="h-[300px] w-full">
          <Topbar />
        </div>

        <MainLayout>{children}</MainLayout>
      </div>
    </div>
  );
};

export default Layout;
