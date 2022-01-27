import React from "react";
import "./TourCard.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const TourCard = (props) => {
  const { title, image, expirence, rating, date, location , id} = props.tour;
  return (
    <div class="container">
      <main class="grid mt-3">
        <article>
          <img
            className="mt-2"
            src={image}
            alt="tshirt"
            style={{ width: "220px", height: "220px" }}
          />
          <div class="text">
            <h3>{title}</h3>
            <p>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              ></Rating>
            </p>
            <p>Date:{date}</p>
            <h6>
              Location:<span>{location}</span>
            </h6>
            <p className="text-start">{expirence}</p>

            <Link to={`/detailTours/${id}`}>
              <button className="btn btn-outline-dark fa-light fa-cart-circle-arrow-down">
                Details
              </button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default TourCard;
