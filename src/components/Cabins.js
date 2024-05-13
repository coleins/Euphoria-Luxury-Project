import React, { useState, useEffect } from "react";
import CabinCard from "./CabinCard";


const Cabins = () => {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    const fetchCabins = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setCabins(data.properties);
      } catch (error) {
        console.error("Error fetching cabin data:", error);
      }
    };

    fetchCabins();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        paddingBottom: "30px",
        paddingTop: "30px",
        textAlign: "center",
        margin: "200px",
      }}
    >
      {cabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
};

export default Cabins;
