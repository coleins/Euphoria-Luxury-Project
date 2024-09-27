import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CabinDetailsPage() {
  const { id } = useParams(); // Get the cabin ID from the URL
  const [cabin, setCabin] = useState(null);

  useEffect(() => {
    // Fetch the specific cabin details using the ID
    fetch(`http://localhost:5500/properties/${id}`)
      .then((response) => response.json())
      .then((data) => setCabin(data))
      .catch((error) => console.error("Error fetching cabin details:", error));
  }, [id]);

  if (!cabin) {
    return <div>Loading...</div>; // Show loading if cabin data hasn't loaded yet
  }

  return (
    <div>
      <h2>{cabin.name}</h2>
      <img src={cabin.image} alt={cabin.name} />
      <p>
        <strong>Price: </strong>KES {cabin.price}
      </p>
      <p>
        <strong>Description: </strong>
        {cabin.detail}
      </p>
      <p>
        <strong>Capacity: </strong>
        {cabin.capacity}
      </p>
    </div>
  );
}
