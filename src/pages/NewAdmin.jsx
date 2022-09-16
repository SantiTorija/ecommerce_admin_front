import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreateAdminForm from "../components/NewAdminForm";

function NewAdmin() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <CreateAdminForm />
        </div>
      </div>
    </>
  );
}

export default NewAdmin;
