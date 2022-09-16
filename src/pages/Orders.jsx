import OrdersTable from "../components/OrdersTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Orders() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <OrdersTable />
      </div>
    </div>
  );
}

export default Orders;
