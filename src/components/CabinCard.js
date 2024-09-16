import React from "react";
import "../Styling/CabinCard.css";
const CabinCard = ({ cabin }) => {
  return (
    <div className="cabin-card">
      <img src={cabin.image} alt={cabin.name} />
      <h2>{cabin.name}</h2>
      <p>{cabin.description}</p>
      <p><strong>Price: </strong>KES {cabin.price}</p>
    </div>
  );
};

export default CabinCard;
