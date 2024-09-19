import React, { useState, useEffect } from "react";
import "../Styling/CabinCard.css";
import CabinCard from "./CabinCard";

const CabinList = () => {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    fetch("/properties")
      .then((response) => response.json())
      .then((data) => setCabins(data))
      .catch((error) => console.error("Error fetching cabins:", error));
  }, []);

  return (
    <div>
      <h1>View Cabins</h1>
      <div className="cabin-list">
        {cabins.map((cabin) => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
      </div>
    </div>
  );
};

export default CabinList;
