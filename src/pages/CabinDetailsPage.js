import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styling/CabinDetailsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { Link } from "react-router-dom";
export default function CabinDetailsPage() {
  const { id } = useParams();
  const [cabin, setCabin] = useState(null);

  useEffect(() => {
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
        backgroundImage: `url(${cabin.image})`,
      }}
    >
      <div className="cabin-details-content">
        <h2>{cabin.name}</h2>
        <Link to={`/bookings/${id}`}>
          <button>Book Now</button>
        </Link>
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
