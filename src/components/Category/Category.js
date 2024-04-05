import React from "react";
import "./Category.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { TbDeviceGamepad } from "react-icons/tb";
let data = [
  {
    id: 1,
    img: <IoIosPhonePortrait />,
    title: "Phones",
  },
  {
    id: 2,
    img: <HiOutlineComputerDesktop />,
    title: "Computers",
  },
  {
    id: 3,
    img: <BsSmartwatch />,
    title: "SmartWatch",
  },
  {
    id: 4,
    img: <CiCamera />,
    title: "Camera",
  },
  {
    id: 5,
    img: <PiHeadphones />,
    title: "HeadPhones",
  },
  {
    id: 6,
    img: <TbDeviceGamepad />,
    title: "Gaming",
  },
];
let category = data.map((el) => (
  <div key={el.id} className="e">
    {el.img}
    <p>{el.title}</p>
  </div>
));
function Category() {
  return (
    <section>
      <div className="container">
        <div className="d">
          <div className="d1"></div>
          <p>Categories</p>
        </div>
        <div className="d2">
          <h1>Browse By Category</h1>
        </div>
      </div>
      <div className="container">
        <div className="e1">{category}</div>
      </div>
    </section>
  );
}

export default Category;
