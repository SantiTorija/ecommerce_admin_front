import AdminTable from "../components/AdminTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Administrators() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <AdminTable />
      </div>
    </div>
  );
}

export default Administrators;
