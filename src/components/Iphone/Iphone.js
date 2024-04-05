import React from "react";
import "./Iphone.css";
import apple from "./apple.png";
import arrow from "./arrow-right.png";
import iphone from "./iphone.png";
function Iphone() {
  return (
    <section>
      <div className="container">
        <div className="c">
          <div>
            <div className="c1">
              <img src={apple} alt="" />
              <p>iPhone 14 Series</p>
            </div>
            <h1>Up to 10% off Voucher</h1>
            <div className="c2">
              <p>Shop Now</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <img src={iphone} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Iphone;
