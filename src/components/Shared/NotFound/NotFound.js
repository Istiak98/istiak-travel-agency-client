import React from "react";
import "./Notfound.css";
const NotFound = () => {
  return (
    <div className="container-error">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content-error22">
        <h1 className="fs-1">404</h1>
        <h1 className="main-heading2">This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <a href="/home" target="blank">
          <button className="btn-error">
            Back to home <i className="far fa-hand-point-right"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
