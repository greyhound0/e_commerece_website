import React, { useContext } from "react";
import { Cart } from "./Cart";
import { ShopContext } from "../../context/shopContext";

export const CartItem = (props) => {
  const { id, productImage, productName, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItem } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="productImage" />
      <div className="discription">
        <p>
          <b>{productName}</b>
        </p>
        <p>INR{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItem(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
