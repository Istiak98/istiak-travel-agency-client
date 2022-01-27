import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ManageTour from "../ManageTour/ManageTour";
import "./ManageTours.css";

const ManageTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `http://localhost:5000/tours`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure, you want to delete the product?"
    );
    if (proceed) {
      const url = `http://localhost:5000/deleteProduct/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("successfullly deleted!");
            const remaining = tours.filter((order) => order._id !== id);
            setTours(remaining);
          }
        });
    }
  };

  return (
    <>
      {!loading ? (
        <div
          style={{ marginBottom: "300px" }}
          className="container border p-2 rounded-3 mt-5"
        >
          <div id="table-container">
            <table>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>In Site</th>
                <th>Delete</th>
               
              </tr>
              {tours.map((product) => (
                <ManageTour
                  key={product._id}
                  product={product}
                  handleDeleteProduct={handleDeleteProduct}
                ></ManageTour>
              ))}
            </table>
          </div>
        </div>
      ) : (
        <div
          style={{ marginBottom: "300px" }}
          className="container text-center mt-5"
        >
          <Spinner animation="border" variant="dark" />
        </div>
      )}
    </>
  );
};

export default ManageTours;
