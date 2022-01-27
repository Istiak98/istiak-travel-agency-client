import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
      <div class="container">
        <a href="/" class="navbar-brand">
          <i class="fas fa-route"></i> <span>Istiak Travel & Blogs</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link className="text-light text-decoration-none me-4" to="/home">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="text-white text-decoration-none me-4"
                to="/contactus"
              >
                CONTACT
              </Link>
            </li>
            <li>
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
            </li>
            <li>
              <span>{user.displayName} </span>
              {user.photoURL && user.email && (
                <img
                  src={user?.photoURL}
                  height="40px"
                  style={{ borderRadius: "0%" }}
                  width="40px"
                  alt=""
                  className="pull-left img-circle login  align-items-end"
                />
              )}
            </li>
            <li className="justify-content-end">
              {user.email ? (
                <button onClick={handleLogOut} className="btn btn-danger ms-3">
                  LOG OUT
                </button>
              ) : (
                <button className="btn btn-primary">
                  <Link to="/loginform">Login</Link>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
