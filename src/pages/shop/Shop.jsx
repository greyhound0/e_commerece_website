import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";

export const Shop = (props) => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Greyhound Technologies</h1>
      </div>
      <div className="products">
        {" "}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}{" "}
      </div>
    </div>
  );
};
