import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreateProductForm from "../components/NewProductForm";

function NewProduct() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <CreateProductForm />
        </div>
      </div>
      ;
    </>
  );
}

export default NewProduct;
