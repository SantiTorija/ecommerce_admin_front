import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NewTypeForm() {
  const adminState = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const [typeName, setTypeName] = useState(null);

  async function createType() {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}admin/`,
        data: {
          name: typeName,
        },
        headers: {
          Authorization: `Bearer ${adminState.token}`,
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="layoutSidenav_content" className="m-4">
      <div className="d-flex justify-content-between py-4">
        <h1>Crear nueva categoría</h1>

        <Form
          style={{ marginBottom: "100%" }}
          onSubmit={() => {
            createType();
            navigate("/Categorias");
          }}
        >
          <Form.Group className="mb-3 w-50">
            <Form.Label>Nuevo tipo de vino</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="Ingrese tipo"
              onChange={(e) => setTypeName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button
            onClick={() => navigate("/administradores")}
            className="ms-4"
            variant="light"
          >
            Back
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default NewTypeForm;
