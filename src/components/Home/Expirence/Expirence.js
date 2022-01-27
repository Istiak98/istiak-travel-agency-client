import React from "react";
import "./Expirence.css";
const Expirence = () => {
  return (
    <div class="container">
      <div class="row">
        <h1 className="fs-1">Popular Destinations</h1>
        <div class="col-md-4 col-sm-6">
          <figure class="ocean1">
            <figcaption>
              <a href="/home">
                <strong>
                  Kashmir, <br /> India
                </strong>
              </a>
            </figcaption>
          </figure>
        </div>
        <div class="col-md-4 col-sm-6">
          <figure class="ocean2">
            <figcaption>
              <strong>
                cox's bazar,
                <br />
                Bangladesh
              </strong>
            </figcaption>
          </figure>
        </div>
        <div class="col-md-4 col-sm-6">
          <figure class="ocean3">
            <figcaption>
              <strong>Costa Rica</strong>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Expirence;
