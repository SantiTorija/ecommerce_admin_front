import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function MenuModal(props) {
  return (
    <Modal
      {...props}
      style={{ backgroundColor: "rgb(19, 19, 19, 0.5)" }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        style={{ backgroundColor: "rgb(19, 19, 19, 0.9)" }}
        className="d-flex flex-column justify-content-center align-items-center text-light"
      >
        <h2 className="mb-3">MENU</h2>
        <Link className="nav-link collapsed" to={"/"}>
          <div className="sb-nav-link-icon mb-2">Inicio</div>
        </Link>

        <Link className="nav-link collapsed" to={"/productos"}>
          <div className="sb-nav-link-icon mb-2">Productos</div>
        </Link>
        <div
          className="collapse"
          id="collapseLayouts"
          aria-labelledby="headingOne"
          data-bs-parent="#sidenavAccordion"
        ></div>

        <Link className="nav-link collapsed" to={"/administradores"}>
          <div className="sb-nav-link-icon mb-2">Administradores</div>
        </Link>

        <div
          className="collapse"
          id="collapsePages"
          aria-labelledby="headingTwo"
          data-bs-parent="#sidenavAccordion"
        ></div>
        <Link className="nav-link collapsed" to={"/ordenes"}>
          <div className="sb-nav-link-icon mb-2">Ordenes</div>
        </Link>
        <div
          className="collapse"
          id="collapsePages"
          aria-labelledby="headingTwo"
          data-bs-parent="#sidenavAccordion"
        ></div>
        <Link className="nav-link collapsed" to={"/categorias"}>
          <div className="sb-nav-link-icon mb-2">Categorías</div>
        </Link>
        <Button className="mt-3 bg-light text-dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default MenuModal;
