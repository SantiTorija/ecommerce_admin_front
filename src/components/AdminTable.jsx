import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { handleDeleteAdmin } from "./DeleteAlert";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { useSelector } from "react-redux";

function AdminTable({ setRefresh, refresh }) {
  const [admins, setAdmins] = useState(null);
  const adminState = useSelector((state) => state.admin);

  useEffect(() => {
    const dataAdmins = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}admin/`,
        headers: {
          Authorization: `Bearer ${adminState.token}`,
          "Content-Type": "application/json",
        },
      });
      setAdmins(response.data);

      return response;
    };
    dataAdmins();
  }, [refresh]);

  return (
    admins && (
      <div id="layoutSidenav_content" className="m-4">
        <div className="d-flex justify-content-between py-4">
          <h1>Administradores</h1>
          <Link to={"/create/admin"}>
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
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{admin.firstname}</td>
                  <td>{admin.lastname}</td>
                  <td>{admin.email}</td>

                  <td className="d-flex justify-content-center gap-3 text-center">
                    <Link to={`/edit/admin/${admin._id}`}>
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
                        handleDeleteAdmin(
                          admin._id,
                          adminState.token,
                          setRefresh,
                          refresh
                        )
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

export default AdminTable;
