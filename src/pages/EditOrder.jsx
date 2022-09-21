import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EditOrderForm from "../components/EditOrderForm";

function EditOrder({ setRefresh, refresh }) {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <EditOrderForm refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
      ;
    </>
  );
}

export default EditOrder;
