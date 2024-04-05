import React from "react";
import "./Navbar.css";
import Logo from "./Logo.png";
import Wish from "./Wishlist.png";
import Search from "./search.png";
import Cart from "./Cart1 with buy.png";
let link = ["Home", "Contact", "About", "Sign in"];
let links = link.map((val, ind) => (
  <a key={ind} href="#">
    {val}
  </a>
));
function Navbar() {
  return (
    <header>
      <div className="container">
        <nav className="b3">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <div className="nav">
            <div className="b">{links}</div>
            <div className="b1">
              <div className="b2">
                <input type="search" placeholder="What are you looking for?" />
                <img src={Search} alt="" />
              </div>
              <img src={Wish} alt="" />
              <img src={Cart} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
