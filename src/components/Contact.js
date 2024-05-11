import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email", email);
  };

  return (
    <div>
      <div sytle={{ margin: "200px", padding: "20px" }}>
        <h2
          style={{
            color: "white",
            backgroundColor: "#232323",
            paddingBottom: "30px",
            paddingTop: "30px",
            textAlign: "center",
            margin: "200px",
          }}
        >
          CONTACT US
        </h2>
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
          height: "500px",
          margin: "auto",
          boxShadow: "10px 4px 15px 5px",
          justifyContent: "center",
          placeItems: "center",
        }}
      >
        <form
          style={{ fontSize: "20px", textAlign: "center" }}
          onSubmit={handleSubmit}
        >
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            <div style={{ color: "#687eff" }}>Name:</div>
            <input
              placeholder="Enter name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            />
          </label>
          <br />
          <label style={{ fontWeight: "bold", fontSize: "20px" }}>
            <div style={{ color: "#687eff" }}>Email:</div>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </label>
          <br />
          <label>
            <div style={{ color: "#687eff" }}>Message:</div>
            <input
              placeholder="Enter your message"
              style={{
                border: "none",
                width: "100%",
                height: "100px",
                fontSize: "16px",
                borderRadius: "15px",
                resize: "none",
                overflowY: "auto",
                boxSizing: "border-box",
                lineHeight: "1.5em",
              }}
            ></input>
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
  );
}

export default Contact;
