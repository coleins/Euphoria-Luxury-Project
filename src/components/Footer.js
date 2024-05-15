import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",

          fontSize: "40px",
        }}
      >
        <div style={{ display: "flex", fontSize: "80px" }}>
          <a
            style={{ color: "black", paddingRight: "30px" }}
            href="https://www.facebook.com/euphorialuxurycabins"
            target="_blank"
            rel="noopener norefferer"
          >
            <FaFacebook />
          </a>
          <a
            style={{ color: "black", paddingRight: "30px" }}
            href="https://www.instagram.com/euphorialuxurycabins"
            target="_blank"
            rel="noopener norefferer"
          >
            <FaInstagram />
          </a>
          <a
            style={{ color: "black", paddingRight: "30px" }}
            href="https://www.twitter.com/euphorialuxurycabins"
            target="_blank"
            rel="noopener norefferer"
          >
            <FaTwitter />
          </a>
          <a
            style={{ color: "black", paddingRight: "30px" }}
            href="https://www.linkedin.com/euphorialuxurycabins"
            target="_blank"
            rel="noopener norefferer"
          >
            <FaLinkedin />
          </a>
        </div>
        <p>© 2024 Euphoria Luxury Cabins. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
