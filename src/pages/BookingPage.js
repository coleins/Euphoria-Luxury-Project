import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styling/BookingPage.css";

export default function BookingPage() {
  const { id } = useParams();
  const [cabin, setCabin] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5500/properties/${id}`)
      .then((response) => response.json())
      .then((data) => setCabin(data))
      .catch((error) => console.error("Error fetching cabin details", error));
  }, [id]);

  if (!cabin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="booking-page" style={{
      backgroundImage: `url(${cabin.image})`,}}>
      <div className="booking-content">
      <h1>Book Your Stay at <span>{cabin.name}</span></h1>
      

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Check-in Date:
          <input type="date" name="checkin" />
        </label>
        <label>
          Check-out Date:
          <input type="date" name="checkout" />
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
    </div>
  );
}
