import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <p style={{ border: '1px solid black', padding: '0.5vw'}}>Product Studio</p>
      </div>
      <div className="menu-items">
        <ul>
          <li className="menu-list-items">Why Us?</li>
          <li className="menu-list-items">Our Work</li>
          <li className="menu-list-items">Our Services</li>
          <li className="menu-list-items">Pricing and FAQ</li>
          <li
            className="menu-list-items"
            // style={{ borderWidth: "2px", borderColor: "black" }}
            style={{border: '0.1vw solid black', padding:'0.3vw'}}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
}
