import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function CategoriesTable() {
  const [types, setTypes] = useState(null);
  const adminState = useSelector((state) => state.admin);
  let [tinto, setTinto] = useState(0);
  let [blanco, setBlanco] = useState(0);
  let [rose, setRose] = useState(0);
  let [espumante, setEspumante] = useState(0);

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}wines/`,
      });

      for (const wine of response.data) {
        if (wine.type.name === "tinto") {
          console.log("tinto");
          setTinto((tinto += 0.5));
        } else if (wine.type.name === "blanco") {
          setBlanco((blanco += 0.5));
        } else if (wine.type.name === "rose") {
          setRose((rose += 0.5));
        } else {
          setEspumante((espumante += 0.5));
        }
      }

      console.log(response.data);
      return response;
    };
    dataWine();
  }, []);

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
        <Table
          responsive
          striped
          bordered
          hover
          style={{ marginBottom: "100%" }}
        >
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
                  {type.name === "tinto" ? <td>{tinto}</td> : ""}
                  {type.name === "blanco" ? <td>{blanco}</td> : ""}
                  {type.name === "rose" ? <td>{rose}</td> : ""}
                  {type.name === "espumante" ? <td>{espumante}</td> : ""}
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
