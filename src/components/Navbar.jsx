import hackWinesAdminLogo from "../assets/images/logoadmin.png";
import "../styles/customStyles.css";

function Navbar() {
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">
          <img
            alt="hackWinesAdminLogo"
            src={hackWinesAdminLogo}
            style={{ width: "10rem" }}
          />
        </a>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 "
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>

        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Buscar..."
              aria-label="Buscar..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary searchButton"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
