import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EditOrderForm from "../components/EditOrderForm";

function EditOrder() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <EditOrderForm />
        </div>
      </div>
      ;
    </>
  );
}

export default EditOrder;
