import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreateAdminForm from "../components/NewAdminForm";

function NewAdmin({ setRefresh, refresh }) {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <CreateAdminForm refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
    </>
  );
}

export default NewAdmin;
