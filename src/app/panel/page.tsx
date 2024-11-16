import MainLayout from "../subtitle/MainLayout";
import SideImageLayout from "../login/SideImageLayout";
import Sidebar from "../../components/Layout/Sidebar";
import Topbar from "../../components/Layout/Topbar";
import DataTable from "../../components/Table/DataTable";
import LoginForm from "../../container/Auth/LoginForm";
import DashboardPage from "../../container/Dashboard/DashboardPage";

const page = () => {
  return (
    <div>
      <DashboardPage />
      <DataTable />
      {/* <LoginForm/> */}
      {/* <MainLayout/> */}
      {/* <SideImageLayout/> '' */}
      <Sidebar />
      <Topbar />
    </div>
  );
};

export default page;
