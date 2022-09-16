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
        url: `http://localhost:8000/admin/`,
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
        onSubmit={() => {
          createAdmin();
          navigate("/Administradores");
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese nombre"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateAdminForm;