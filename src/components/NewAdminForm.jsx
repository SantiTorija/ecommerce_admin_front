import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateAdminForm() {
  const adminState = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function createAdmin() {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}admin/`,
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
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
        <h1>Crear nuevo administrador</h1>
      </div>

      <Form
        style={{ marginBottom: "100%" }}
        onSubmit={() => {
          createAdmin();
          navigate("/Administradores");
        }}
      >
        <Form.Group className="mb-3 w-50">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required="true"
            type="text"
            placeholder="Ingrese nombre"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3 w-50">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required="true"
            type="text"
            placeholder="Ingrese apellido"
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required="true"
            type="email"
            placeholder="Ingrese e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required="true"
            type="password"
            placeholder="Ingrese password"
            onChange={(e) => setPassword(e.target.value)}
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
  );
}

export default CreateAdminForm;
