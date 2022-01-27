import React from "react";
import { useForm } from "react-hook-form";

const AddTour = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const url = 'http://localhost:5000/tours';
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New Tour Added successfully");
          reset();
        }
      });
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="border p-5 rounded" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="forName" className="form-label text-start">
            Tour name
          </label>
          <input
            defaultValue=""
            {...register("name")}
            type="text"
            className="form-control"
            id="forName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="forDescription" className="form-label">
           Expirence
          </label>
          <textarea
            defaultValue=""
            {...register("description")}
            type="text"
            className="form-control"
            id="forDescription"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="forRating" className="form-label">
            Date
          </label>
          <input
            defaultValue=""
            {...register("rating")}
            type="text"
            className="form-control"
            id="forRating"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="forImg" className="form-label">
            Image url
          </label>
          <input
            defaultValue=""
            {...register("img")}
            type="text"
            className="form-control"
            id="forImg"
          />
        </div>
        <input
          className="btn btn-dark w-100"
          type="submit"
          value="Add New Tour"
        />
      </form>
    </div>
  );
};

export default AddTour;
