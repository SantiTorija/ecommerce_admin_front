import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreateProductForm from "../components/NewProductForm";

function NewProduct({ setRefresh, refresh }) {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <CreateProductForm refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
    </>
  );
}

export default NewProduct;
