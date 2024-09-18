import React, { useState } from "react";
import "../Styling/CabinCard.css";
const CabinCard = ({ cabin }) => {
  return (
    <body>
    <div className="cabin-card">
      <img src={cabin.image} alt={cabin.name} />
      <h2>{cabin.name}</h2>
      <p>{cabin.description}</p>
      <p>
        <strong>Price: </strong>KES {cabin.price}
      </p>
      <button>View Details</button>
    </div>
    </body>
  );
};

export default CabinCard;
