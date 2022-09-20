import "../styles/customStyles.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/adminSlice";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

function Sidebar() {
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }
  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav  sb-sidenav-dark" id="sidenavAccordion">
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

            <Link className="nav-link collapsed" to={"/productos"}>
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

            <Link className="nav-link collapsed" to={"/administradores"}>
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
            <Link className="nav-link collapsed" to={"/ordenes"}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Ordenes
            </Link>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            ></div>
            <Link className="nav-link collapsed" to={"/categorias"}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Categorías
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
          <OverlayTrigger
            trigger="click"
            key="top"
            placement="top"
            overlay={
              <Popover id={`popover-positioned-top`}>
                <Popover.Header as="h3">Admin logout</Popover.Header>
                <Popover.Body>
                  <strong>{admin.name}</strong>
                  <button onClick={handleLogout} className="btn btn-light ms-3">
                    click to logout
                  </button>
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="secondary">
              Logueado como:
              <br /> {admin.name}
            </Button>
          </OverlayTrigger>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
