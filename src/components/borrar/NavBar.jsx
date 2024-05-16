import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import { CartIcon } from './icon'
export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
  
     
        <Link to={"/cart"} style={navStyles}>
          <li>
          <span className="cart-count">
         <CartIcon />
          {quantity}</span>
          </li>
        </Link>
     
  
  );
};
