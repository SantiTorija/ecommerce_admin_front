import WinesTable from "../components/WinesTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Products({ setRefresh, refresh }) {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <WinesTable refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
      ;
    </>
  );
}

export default Products;
