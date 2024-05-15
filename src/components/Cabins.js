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
    <div>
      <div>
        <h1>Filter</h1>
        <button onClick={(event) => console.log(event)}>Click Me</button>
        <form>
          <input type="text" placeholder="Type something" />
          <select>
            <option value="1">price</option>
            <option value="2">rating</option>
          </select>
          <button type="submit">Submit that form</button>
        </form>
      </div>
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
    </div>
  );
};

export default Cabins;
