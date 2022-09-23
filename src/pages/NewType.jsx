import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NewTypeForm from "../components/NewTypeForm";

function NewType() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <NewTypeForm />
        </div>
      </div>
    </>
  );
}

export default NewType;
