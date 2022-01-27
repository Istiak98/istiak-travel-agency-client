import React, { useEffect, useState } from "react";
import TourCard from "../TourCard/TourCard";
import "./Tour.css";
const Tour = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("./Tour.json")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return (
    <div id="prducts">
      <h1 className=" mt-2 text-center title">ISTIAK Tour & Blogs</h1>

      <div className="tour-details mt-3">
        {tours.map((tour) => (
          <TourCard tour={tour} key={tour.id}></TourCard>
        ))}
      </div>
    </div>
  );
};

export default Tour;
