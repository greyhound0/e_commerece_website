import React from "react";

export const Product = ({ data }) => {
  const handleClick = () => {};
  return (
    <div className="product">
      <img src={data.productImage} alt="productImage" />
      <div>
        <p>
          <b>{data.productName}</b>
        </p>
        <p>
          <b>{data.price}</b>
        </p>
        <button className="addToCartButton" onClick={() => handleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
