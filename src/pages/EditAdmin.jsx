import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EditAdminForm from "../components/EditAdminForm";

function EditAdmin() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <EditAdminForm />
        </div>
      </div>
      ;
    </>
  );
}

export default EditAdmin;
