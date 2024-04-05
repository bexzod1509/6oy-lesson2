import React from "react";
import "./Products.css";
import arrowl from "./arrow-left.png";
import heart from "./Fill Heart.png";
import eye from "./Fill Eye.png";
import icon from "./icons arrow-right.png";
import star from "./Three Star.png";
let Data = [
  {
    id: 1,
    images: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    title: "iPhone 9",
    price: 549,
    stock: 94,
  },
  {
    id: 2,
    images: "https://cdn.dummyjson.com/product-images/2/1.jpg",
    title: "iPhone X",
    price: 899,
    stock: 34,
  },
  {
    id: 3,
    images: "https://cdn.dummyjson.com/product-images/3/1.jpg",
    title: "Samsung Universe 9",
    price: 1249,
    stock: 36,
  },
  {
    id: 4,
    images: "https://cdn.dummyjson.com/product-images/4/1.jpg",
    title: "OPPOF19",
    price: 280,
    stock: 123,
  },
  {
    id: 5,
    images: "https://cdn.dummyjson.com/product-images/5/1.jpg",
    title: "Huawei P30",
    price: 499,
    stock: 32,
  },
  {
    id: 6,
    images: "https://cdn.dummyjson.com/product-images/6/1.png",
    title: "MacBook Pro",
    price: 1749,
    stock: 83,
  },
  {
    id: 7,
    images: "https://cdn.dummyjson.com/product-images/7/1.jpg",
    title: "Samsung Galaxy Book",
    price: 1499,
    stock: 50,
  },
  {
    id: 8,
    images: "https://cdn.dummyjson.com/product-images/8/1.jpg",
    title: "Microsoft Surface Laptop 4",
    price: 1499,
    stock: 68,
  },
];
let product = Data.map((el) => (
  <div className="f1">
    <img class="f4" src={el.images} alt="" />
    <div class="f2">
      <img src={heart} alt="" />
      <img src={eye} alt="" />
    </div>
    <p>Add To Cart</p>
    <h1>{el.title}</h1>
    <div class="f3">
      <h4>${el.price}</h4>
      <img src={star} alt="" />
      <span>({el.stock})</span>
    </div>
  </div>
));
function Products() {
  return (
    <section>
      <div className="container">
        <div className="d">
          <div className="d1"></div>
          <p>Our Products</p>
        </div>
        <div className="d2">
          <h1>Explore Our Products</h1>
          <div>
            <img src={arrowl} alt="" />
            <img src={icon} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="f">{product}</div>
        <div className="f5">
          <button>View All Products</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
