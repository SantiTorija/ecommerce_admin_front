import EditWineForm from "../components/EditWineForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function EditProduct() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <EditWineForm />
        </div>
      </div>
      ;
    </>
  );
}

export default EditProduct;
