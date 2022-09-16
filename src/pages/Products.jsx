import WinesTable from "../components/WinesTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Products() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <WinesTable />
        </div>
      </div>
      ;
    </>
  );
}

export default Products;
