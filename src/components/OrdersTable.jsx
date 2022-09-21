import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OrdersTable() {
  const [orders, setOrders] = useState(null);
  const adminState = useSelector((state) => state.admin);

  useEffect(() => {
    const dataOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}orders/`,
        headers: {
          Authorization: `Bearer ${adminState.token}`,
          "Content-Type": "application/json",
        },
      });
      setOrders(response.data);

      return response;
    };
    dataOrders();
  }, []);

  return (
    orders && (
      <div id="layoutSidenav_content" className="m-4">
        <div className="d-flex justify-content-between py-4">
          <h1>Ordenes de compra</h1>
        </div>
        <Table striped bordered hover style={{ marginBottom: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>User e-mail</th>
              <th>Fecha de emisión</th>
              <th>Cantidad de items</th>
              <th>Estado</th>
              <th>Total (US$)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.email}</td>
                  <td>{order.Date.split("T")[0]}</td>
                  <td>{order.products.length}</td>
                  <td>{order.state}</td>
                  <td>{order.total}</td>
                  <td className="d-flex justify-content-center gap-3 text-center">
                    <Link to={`/editar/orden/${order._id}`}>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <GrEdit />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    )
  );
}

export default OrdersTable;
