import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EditAdminForm() {
  const params = useParams();
  const admin = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const [adminInfo, setAdminInfo] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    const dataAdmin = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}admin/${params.id}`,
        headers: {
          Authorization: `Bearer ${admin.token}`,
          "Content-Type": "application/json",
        },
      });

      setAdminInfo(response.data);
      return response;
    };
    dataAdmin();
  }, []);

  async function editAdmin() {
    try {
      const response = await axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_API_URL}admin/${params.id}`,
        data: {
          firstname: firstname ? firstname : adminInfo.firstname,
          lastname: lastname ? lastname : adminInfo.lastanme,
          email: email ? email : adminInfo.email,
          password: password ? password : adminInfo.password,
        },
        headers: {
          Authorization: `Bearer ${admin.token}`,
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
    adminInfo && (
      <div id="layoutSidenav_content" className="m-4">
        <div className="d-flex justify-content-between py-4">
          <h1>Editar administrador</h1>
        </div>

        <Form
          style={{ marginBottom: "100%" }}
          onSubmit={() => {
            editAdmin();
            navigate("/Administradores");
          }}
        >
          <Form.Group className="mb-3 w-50">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required={true}
              type="text"
              defaultValue={adminInfo.firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3 w-50">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required={true}
              type="text"
              defaultValue={adminInfo.lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-50">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required={true}
              type="email"
              defaultValue={adminInfo.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-50">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required={true}
              type="password"
              defaultValue={adminInfo.password}
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
    )
  );
}

export default EditAdminForm;
