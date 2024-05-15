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
      <div style={{ margin: "200px", padding: "20px" }}>
        <h2
          style={{
            color: "white",
            backgroundColor: "#232323",
            // paddingBottom: "10px",
            // paddingTop: "10px",
            textAlign: "center",
            padding: "20px",
            fontSize: "40px",
          }}
        >
          BOOK NOW
        </h2>
        <div>
          <p style={{ textAlign: "center", fontSize: "40px" }}>
            Secure your stay today! Book now for unbeatable rates and
            unforgettable experiences.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#060606",
            padding: "20px",
            borderRadius: "80px",
            width: "500px",
            height: "600px",
            margin: "auto",
            boxShadow: "10px 4px 15px 5px",
            justifyContent: "center",
            placeItems: "center",
          }}
        >
          <form style={{ color: "#687eff", fontWeight: "bold", fontSize: "20px" }} onSubmit={handleSubmit}>
            <label style={{ fontWeight: "bold", fontSize: "20px" }}>
              <div style={{ color: "#687eff" }}>Name</div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "10px",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              ></input>
              <br />
            </label>

            <label>
              <div>Email Address</div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "10px",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              ></input>
            </label >
            <br />

            <label>
              <div>Age</div>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "10px",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              ></input>
            </label>
            <br />

            <label>
              <div>Destination</div>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "10px",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              ></input>
            </label>
            <br />
            <label>
              <div>Phone Number</div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "10px",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              ></input>
            </label>
            <br />
            <label>
              <div>Check-in-Date</div>
              <input
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "10px",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              ></input>
            </label>
            <br />
            <label>
              <div>Check-out-Date</div>
              <input
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "10px",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              ></input>
            </label>
            <br />
            <label>
              <div>Gender</div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  marginBottom: "10px",
                  border: "none",
                  borderRadius: "10px",
                  outline: "none",
                  paddingLeft: "10px",
                }}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <button
              type="submit"
              style={{
                border: "none",
                borderRadius: "15px",
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {" "}
              &lt; Submit &gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
