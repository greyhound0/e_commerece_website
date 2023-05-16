import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const Product = (props) => {
  const { id, productImage, productName, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="productImage" />
      <div>
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>{price}</b>
        </p>
        <button className="addToCartButton" onClick={() => addToCart(id)}>
          Add To Cart
        </button>
        <span className="productCount">
          {cartItemAmount > 0 && <>({cartItemAmount}) </>}
        </span>
      </div>
    </div>
  );
};
