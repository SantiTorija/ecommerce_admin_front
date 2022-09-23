import "../styles/customStyles.css";
import UsersTable from "./UsersTable";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Ventas en éste ejercicio",
    },
  },
};
export const options_users = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Nuevos usuarios en este ejercicio",
    },
  },
};

const labels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "En dólares, mensuales",
      data: [
        "4000",
        "3520",
        "5000",
        "3500",
        "4521",
        "3660",
        "4500",
        "5000",
        "3540",
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const data_users = {
  labels,
  datasets: [
    {
      fill: true,
      label: "sólo los que compran por primera vez",
      data: ["10", "13", "11", "6", "8", "15", "20", "25", "10"],
      borderColor: "olive",
      backgroundColor: "#82c80071",
    },
  ],
};

function Layout() {
  return (
    <>
      <div id="layoutSidenav_content_dash">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Admin Dashboard</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card bg-success mb-4">
                  <div className="card-body text-light">
                    Ingresos úlima semana: US$ 578
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between"></div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                  <div className="card-body text-light">
                    Ingresos último mes: US$ 3800
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between"></div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                  <div className="card-body text-light">
                    Usuarios nuevos último mes: 15
                  </div>
                  <div className="card-footer d-flex align-items-center justify-content-between"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <Line options={options} data={data} />
                  </div>
                  <div className="card-body">
                    <canvas id="myAreaChart" width="100%" height="40"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <Line options={options_users} data={data_users} />
                  </div>
                  <div className="card-body">
                    <canvas id="myBarChart" width="100%" height="40"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table me-1"></i>
                Listado de usuarios
              </div>
              <div className="card-body">
                <UsersTable />
              </div>
            </div>
          </div>
        </main>
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">
                Copyright &copy; Your Website 2022
              </div>
              <div>
                <a href="hrefCambiar">Privacy Policy</a>
                &middot;
                <a href="hrefCambiar">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
