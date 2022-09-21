import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { useSelector } from "react-redux";

function CategoriesTable() {
  const [types, setTypes] = useState(null);
  const adminState = useSelector((state) => state.admin);

  useEffect(() => {
    const dataTypes = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}types/`,
        headers: {
          Authorization: `Bearer ${adminState.token}`,
          "Content-Type": "application/json",
        },
      });
      setTypes(response.data);

      return response;
    };
    dataTypes();
  }, []);
  console.log(types);

  return (
    types && (
      <div id="layoutSidenav_content" className="m-4">
        <div className="d-flex justify-content-between py-4">
          <h1>Categorías</h1>
          <Link to={"/crear/tipo"}>
            <button className="btn btn-success">Agregar nuevo</button>
          </Link>
        </div>
        <Table striped bordered hover style={{ marginBottom: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Tipo</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {types.map((type, index) => {
              return (
                <tr key={type._id}>
                  <td>{index + 1}</td>
                  <td>{type.name}</td>
                  <td>{Math.floor(Math.random() * 50)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    )
  );
}

export default CategoriesTable;
