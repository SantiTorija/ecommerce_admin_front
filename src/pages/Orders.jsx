import OrdersTable from "../components/OrdersTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Orders({ refresh }) {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <OrdersTable refresh={refresh} />
      </div>
    </div>
  );
}

export default Orders;
