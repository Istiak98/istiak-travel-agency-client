import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./TourInfo.css";
const TourInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Tour.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const ExactService = data.filter((sr) => sr.id === id);
  //   console.log(ExactService)
  return (
    <div className="col mt-3 ">
      <div className="p-3">
        <h4 className="h4-text">
          Travels Blogs{" "}
          <span className="text-danger">{ExactService[0]?.title}</span> DETAILS
          AT ONE GLANCE
        </h4>
        <img
          src={ExactService[0]?.image}
          className="img-thumbnail w-50"
          alt="..."
        />
        <h3 className="fs-1">{ExactService[0]?.title}</h3>
        <h4 className="fs-5 h2-text fw-bolder">{ExactService[0]?.location}</h4>
        <h5 className="h5-text fs-5 text-center">
          {ExactService[0]?.expirence}
        </h5>
        <Link to="/home">
          <button className="btn btn-outline-primary" type="submit">
            GO TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TourInfo;
