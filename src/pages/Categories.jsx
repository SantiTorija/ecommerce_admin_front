import CategoriesTable from "../components/CategoriesTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Categories({ setRefresh, refresh }) {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <CategoriesTable refresh={refresh} setRefresh={setRefresh} />
      </div>
    </div>
  );
}

export default Categories;
