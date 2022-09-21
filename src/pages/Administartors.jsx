import AdminTable from "../components/AdminTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Administrators({ setRefresh, refresh }) {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <AdminTable refresh={refresh} setRefresh={setRefresh} />
      </div>
    </div>
  );
}

export default Administrators;
