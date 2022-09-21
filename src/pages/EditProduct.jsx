import EditWineForm from "../components/EditWineForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function EditProduct({ setRefresh, refresh }) {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <EditWineForm refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
      ;
    </>
  );
}

export default EditProduct;
