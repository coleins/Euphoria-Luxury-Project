import React from "react";

const CabinCard = ({ cabin }) => {
  return (
    <div>
      <div style={{ fontSize:"40px",display:"flex wrap",}}>
        <img
          style={{ height: "1000px", weight: "200px" }}
          src={cabin.imageURL}
          alt={cabin.name}
        />
        <h2 style={{borderRadius:"2rem",border:"2px solid #232323",}}> {cabin.name}</h2>
        <p>
          <strong>Location:</strong> {cabin.location}
        </p>
        <p>{cabin.description}</p>
        <p><strong>Rating: </strong>{cabin.rating} <strong>⭐</strong></p>
        <p>
          <strong>Bed capacity:</strong> {cabin.capacity}
        </p>
      </div>
    </div>
  );
};

export default CabinCard;
