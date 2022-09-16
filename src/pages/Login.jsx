import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { login } from "../redux/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function getToken() {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/admin/token`,
        data: { email, password },
      });
      dispatch(
        login({
          token: response.data.token,
          email: email,
        })
      );
      navigate("/");
      return response.data;
    } catch (error) {
      console.log(error.response.data.error);
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
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <h1 className="mb-5">Login</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          getToken();
        }}
        className="border p-5 bg-light"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Ingrese email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
