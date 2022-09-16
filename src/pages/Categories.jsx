import CategoriesTable from "../components/CategoriesTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Categories() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <CategoriesTable />
      </div>
    </div>
  );
}

export default Categories;
