import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="contact-items">
      <h1 className="help">How can we help?</h1>
      <div className="info-container">
        <p>
          <input className="info" type="text" placeholder="Location*" />
        </p>
        <p>
          <input
            className="info"
            type="text"
            placeholder="Tell Us About Your Product*"
          />
        </p>
        <p>
          <input
            className="info"
            type="text"
            placeholder="Your Estimated Budget For The Project*"
          />
        </p>
        <button className='send-message'>Send Message</button>
      </div>
      <span className="contact">
        <p style={{ marginLeft: "0.09vw", fontSize: '1.5vw' }}>Get in Touch</p>
        <p> hello@productstudio.us</p>
      </span>
      <span>
        <p
          style={{
            marginBottom: "-5vw",
            color: "grey",
            float: "right",
            marginTop: "-0.3vw",
            marginRight: "8vw",
            fontSize:'1.2vw'
          }}
        >
          ©2019 KarmaCircles All rights reserved.
        </p>
      </span>
      <div className="line">
        <p style={{backgroundColor:'rgb(65, 70, 69)'}}>OR</p>
      </div>
    </div>
  );
}
