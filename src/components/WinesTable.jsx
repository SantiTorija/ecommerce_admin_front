import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { handleDeleteWine } from "./DeleteAlert";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { useSelector } from "react-redux";

function WinesTable() {
  const [wines, setWines] = useState(null);
  const adminState = useSelector((state) => state.admin);

  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}wines/`,
      });
      setWines(response.data);
      console.log(response.data);
      return response;
    };
    dataWine();
  }, []);

  return (
    wines && (
      <div id="layoutSidenav_content" className="m-4">
        <div className="d-flex justify-content-between py-4">
          <h1>Productos</h1>
          <Link to={"/create/wine"}>
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
              <th>Wine name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Highlighted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wines.map((wine, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{wine.name}</td>
                  <td>{wine.price}</td>
                  <td>{wine.stock}</td>
                  <td>{wine.highlighted ? "true" : "false"}</td>
                  <td className="d-flex justify-content-center gap-3 text-center">
                    <Link to={`/edit/${wine.slug}`}>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <GrEdit />
                      </button>
                    </Link>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        color: "red",
                      }}
                      onClick={() =>
                        handleDeleteWine(wine._id, adminState.token)
                      }
                    >
                      <FaTrashAlt />
                    </button>
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

export default WinesTable;
