import React from "react";

export default function CabinDetailsPage({ cabin }) {
  return (
    <div>
      <h2>{cabin.name}</h2>
      <p>{cabin.price}</p>
      <p>{cabin.detail}</p>
    </div>
  );
}
