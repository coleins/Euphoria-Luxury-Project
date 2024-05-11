import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    destination: "",
    phoneNumber: "",
    checkInDate: "",
    checkOutDate: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Welcome to Euphoria!");
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: " ",
          margin: "200px",
          padding: "20px",
        }}
      >
        <h2
          style={{
            color: "white",
            backgroundColor: "#232323",
            paddingBottom: "30px",
            paddingTop: "30px",
            textAlign: "center",
          }}
        >
          BOOK NOW
        </h2>{" "}
        <form
          style={{ textAlign: "center", margin: "200px", padding: "20px" }}
          onSubmit={handleSubmit}
        >
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            Name:
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            Email Address:
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            Age:
            <br />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            Destination:
            <br />
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            Phone Number:
            <br />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            Check-in Date:
            <br />
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            Check-out Date:
            <br />
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            Gender:
            <br />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;