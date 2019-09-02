import React from "react";
import "./Banner.css";
import image1 from "../../images/image1.png";
import image3 from "../../images/image3.png";
import logo from "../../images/logo1.svg";
export default function Banner() {
  const text = [
    "Web Development",
    "UI/UX",
    "Mobile Development",
    "Product Strategy"
  ];
  return (
    <div className="banner">
      <div className="logo-box">
        <img className="logo" src={logo} />
        <div
          style={{
            // backgroundColor: "red",
            marginLeft: "16vw",
            width: "70%",
            display: "inline-block",
            textAlign: "left",
            marginTop: "20px"
          }}
        >
          {text.map((item, i) => {
            return (
              <button className="button" key={i}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="image-box">
        <img className="image1" src={image1} />
        <img className="image2" src={image3} />
      </div>
    </div>
  );
}
