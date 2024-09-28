import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styling/CabinDetailsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

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
    return <div>Loading...</div>;
  }

  return (
    <div
      className="cabin-details-container"
      style={{
        backgroundImage: `url(${cabin.image})`
      }}
    >
      <div className="cabin-details-content">
      <h2>{cabin.name}</h2>
      {/* <img src={cabin.image} alt={cabin.name} /> */}
      <button>Book Now</button>
      <p>
        <strong>Price: </strong>KES {cabin.price}
      </p>
      <p>
        <strong>Rating: </strong> {cabin.rating}{" "}
        <FontAwesomeIcon icon={faStar} />
      </p>
      <p>
        <strong>Description: </strong>
        {cabin.detail}
      </p>
      <p>
        <strong>Capacity: </strong> {cabin.capacity}{" "}
      </p>
      </div>
    </div>
  );
}
