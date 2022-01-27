import React from "react";

const ManageTour = (props) => {
  const { _id, title, image } = props.product;
  const { handleDeleteTour } = props;

  return (
    <tr>
      <td>
        <img src={image} style={{ width: "50px", height: "50px" }} alt="" />
      </td>
      <td>{title}</td>

      <td>Posted</td>
      <td>
        <span>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleDeleteTour(_id)}
          >
            <i className="fas fa-times-circle"></i>
          </button>
        </span>
      </td>
    </tr>
  );
};

export default ManageTour;
