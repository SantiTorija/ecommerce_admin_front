import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function UsersTables() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const dataUser = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}users/`,
      });
      setUsers(response.data);
      return response;
    };
    dataUser();
  }, []);

  return (
    users && (
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    )
  );
}

export default UsersTables;
