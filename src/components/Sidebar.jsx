import "../styles/customStyles.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Dashboard</div>
            <Link className="nav-link collapsed" to={"/"}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Inicio
            </Link>
            <div className="sb-sidenav-menu-heading">Administrador</div>

            <Link className="nav-link collapsed" to={"/products"}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns"></i>
              </div>
              Productos
            </Link>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            ></div>

            <Link className="nav-link collapsed" to={"/administators"}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Administradores
            </Link>

            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            ></div>
            <Link className="nav-link collapsed" to={"/orders"}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Ordenes
            </Link>

            <div className="sb-sidenav-menu-heading">Más</div>
            <a className="nav-link" href="charts.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area"></i>
              </div>
              Estadisticas actuales
            </a>
            <a className="nav-link" href="tables.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table"></i>
              </div>
              Proyecciones a futuro
            </a>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logueado como:</div>
          Carla Sarasa
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
