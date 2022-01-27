import React, { useState } from "react";
import { Switch, Link, useRouteMatch, Route } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../AdminRoute/AdminRoute";
import "./DashBoard.css";
import useAuth from "../../../Hooks/useAuth";
import ManageTours from "../ManageTours/ManageTours";
import Pay from "../Pay/Pay";
import AddTour from "../AddTour/AddTour";
const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const { admin, logOut } = useAuth();
  return (
    <div id="dashboard">
      <div className="wrapper">
        {/* Dashboard Sidebar  */}
        <nav id="sidebar" className={toggle ? "" : "active"}>
          <div className="sidebar-header">
            <Link to={"/home"}>
              <h3>Istiak Travels & Blogs</h3>
            </Link>
          </div>
          <ul className="list-unstyled components">
            {admin ? (
              <div>
                <li>
                  <Link to={`${url}/manageTours`}>Manage All Tours</Link>
                </li>
                <li>
                  <Link to={`${url}/addTour`}>Add A Tour</Link>
                </li>
                <li>
                  <Link to={`${url}/manageTours`}>Manage Tours</Link>
                </li>
                {/* <li>
                  <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                </li> */}
              </div>
            ) : (
              <div>
                <li>
                  <Link to={`${url}/pay`}>Pay</Link>
                </li>
                <li>
                  <Link to={`${url}/myTours`}>My Tours</Link>
                </li>
                <li>
                  <Link to={`${url}/review`}>Tour Review</Link>
                </li>
                <li>
                  <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                </li>
                <li>
                  <Link to={`${url}/addTour`}>Add Tour</Link>
                </li>
                <li>
                  <Link to={`${url}/manageTours`}>Manage Tours</Link>
                </li>
              </div>
            )}
            <li>
              <Link to={`/home`} onClick={logOut}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>

        {/* Dashboard Content */}
        <div id="content" className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3 shadow-sm">
            <div className="container-fluid">
              <button
                onClick={handleToggle}
                type="button"
                id="sidebarCollapse"
                className="btn btn-outline-secondary"
              >
                <i className="fas fa-align-left"></i>
              </button>

              <button
                className="navbar-toggler px-3 py-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-align-justify"></i>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ms-auto">
                  <li className="nav-item active">
                    <span className="nav-link">
                      <Link className="fw-bold fs-5" to={"/home"}>
                        Home
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Switch>
            {/* <Route exact path={path}>
                            <h3>Dashboard Home</h3>
                        </Route> */}
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addTour`}>
              <AddTour></AddTour>
            </Route>
            {/* <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <UserReview></UserReview>
            </Route> */}
            <AdminRoute path={`${path}/addTour`}>
              <AddTour></AddTour>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <Route path={`${path}/manageTours`}>
              <ManageTours></ManageTours>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
