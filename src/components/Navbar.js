import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shopContext";

export const Navbar = () => {
  const {
    cartItems,

    updateCartItem,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const totalA = getTotalCartAmount();
  console.log("total", totalA);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart color={totalA ? "red" : "white"} size={32} />
          {/* <span className="cartHighlight">.</span> */}
        </Link>
      </div>
    </div>
  );
};
