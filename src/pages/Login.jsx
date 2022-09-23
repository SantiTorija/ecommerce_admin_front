import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { login } from "../redux/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/customStyles.css";

function Login() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function getToken() {
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}admin/token`,
        data: { email, password },
      });
      dispatch(
        login({
          token: response.data.token,
          email: email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
        })
      );
      navigate("/");
      return response.data;
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  function loadFakeData(checked) {
    if (!checked) {
      setEmail("");
      setPassword("");
    } else {
      setEmail("admin@gmail.com");
      setPassword("password");
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      id="login-box"
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <h1 className="mb-5 w-100 text-center">Login</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          getToken();
        }}
        className="border p-5 bg-light w-100"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="form-control-login"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Ingrese email"
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="form-control-login"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
        </Form.Group>
        <div className="form-check input__checkbox mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            defaultChecked={true}
            onChange={(e) => loadFakeData(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Cargar datos de prueba
          </label>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
