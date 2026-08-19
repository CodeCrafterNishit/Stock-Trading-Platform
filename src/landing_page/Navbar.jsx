import Investo from "../../../frontend/images/investo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg py-1 border-bottom"
        style={{ borderColor: "rgba(0,0,0,0.06)" }}
      >
        <div className="container-fluid px-3 px-md-5 ">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={Investo}
              alt="Investo"
              style={{ maxWidth: "140px", height: "90px", marginLeft: "100px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link className="nav-link px-3" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link px-3" to="#" aria-label="menu">
                  Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
