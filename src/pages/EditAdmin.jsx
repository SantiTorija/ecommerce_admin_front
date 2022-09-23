import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EditAdminForm from "../components/EditAdminForm";

function EditAdmin({ setRefresh, refresh }) {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <EditAdminForm refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
      ;
    </>
  );
}

export default EditAdmin;
