import React from "react";
import drobdown from "./DropDown.png";
import "./Small.css";
function Small() {
  return (
    <section className="a3">
      <div className="container">
        <div className="a">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <b>ShopNow</b>
          </p>
          <div className="a1">
            <p>English</p>
            <img src={drobdown} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Small;
