import React, { useState } from "react";
import "../Styling/CabinCard.css";
const CabinCard = ({ cabin }) => {
  return (
    <div className="cabin-card">
      <img src={cabin.image} alt={cabin.name} />
      <h2>{cabin.name}</h2>
      <p>{cabin.description}</p>
      <p>
        <strong>Bed Capacity: </strong>
        {cabin.capacity}
      </p>
      <p>
        <strong>Price/ Night: </strong>KES {cabin.price}
      </p>
      <button>View Details</button>
    </div>
  );
};

export default CabinCard;
