import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {
  const { user, handleLogOut } = useAuth();

  return (
    <div className="border-bottom">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="py-1">
          <Navbar.Brand
            className="fs-5 fw-bold text-dark ms-2"
            style={{ fontFamily: "Charmonman" }}
          >
            ISTIAK Travels & Blogs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <nav className="ms-lg-5 me-auto">
              <div className="d-md-block d-lg-inline">
                <Link
                  className="text-light text-decoration-none me-4"
                  to="/home"
                >
                 HOME
                </Link>
              </div>
              <div className="d-md-block d-lg-inline">
                <Link
                  className="text-white text-decoration-none me-4"
                  to="/contactus"
                >
                  CONTACT
                </Link>
              </div>
              {user.email && (
                <div className="d-md-block d-lg-inline">
                  <Link
                    className="text-white text-decoration-none me-4"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </div>
              )}
            </nav>
            <hr className="d-md-block d-lg-none" />
            <div>
              <span>{user.displayName}</span>
              {/* {user.photoURL && user.email && (
                <img
                  src={user?.photoURL}
                  height="20px"
                  style={{ borderRadius: "50%" }}
                  width="20px"
                  alt=""
                  className="pull-left img-circle login"
                />
              )} */}
            </div>
            {user.email ? (
              <button onClick={handleLogOut} className="btn btn-danger ms-3">
               LOG OUT
              </button>
            ) : (
              <button className="btn btn-dark ms-3">
                <Link
                  className="text-light text-decoration-none"
                  to="/loginform"
                >
                  Login
                </Link>
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
