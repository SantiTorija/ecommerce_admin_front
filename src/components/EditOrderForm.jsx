import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EditOrderForm() {
  const params = useParams();
  const adminState = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const dataOrder = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}orders/${params.id}`,
        headers: {
          Authorization: `Bearer ${adminState.token}`,
          "Content-Type": "application/json",
        },
      });
      setOrderInfo(response.data);
      console.log(response.data);
      return response;
    };
    dataOrder();
  }, []);

  async function editOrder() {
    try {
      const response = await axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_API_URL}orders/${params.id}`,
        data: {
          state: status,
        },
        headers: {
          Authorization: `Bearer ${adminState.token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    orderInfo && (
      <div id="layoutSidenav_content" className="m-4">
        <div className="d-flex justify-content-between py-4">
          <h1>Detalle y edición de estado</h1>
        </div>

        <ul>
          <li>
            Usuario: {orderInfo.user.firstname + " " + orderInfo.user.lastname}
          </li>
          <li>Email: {orderInfo.email}</li>
          <li>Total: US$ {orderInfo.total}</li>
          <li>Fecha: {orderInfo.Date.split("T")[0]}</li>
        </ul>

        <Form
          style={{ marginBottom: "100%", maxWidth: "15rem" }}
          onSubmit={() => {
            editOrder();
            navigate("/Ordenes");
          }}
        >
          <Form.Label>Seleccione estado de la orden</Form.Label>
          <Form.Select
            className="mb-3"
            required={true}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Default select example"
          >
            <option>{orderInfo.state}</option>
            <option value="pagada">pagada</option>
            <option value="en_preparación">en preparación</option>
            <option value="en_camino">en camino</option>
            <option value="entregada">entregada</option>
          </Form.Select>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button
            onClick={() => navigate("/ordenes")}
            className="ms-4"
            variant="light"
          >
            Back
          </Button>
        </Form>
      </div>
    )
  );
}

export default EditOrderForm;
