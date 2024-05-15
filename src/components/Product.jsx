import React , { useContext }from "react";
import {useNavigate} from "react-router";
import { Outlet, Link } from "react-router-dom"
import { CartContext } from "../context/ShoppingCartContext";
export const Product = ({ id,name, price, image }) => {
    const navigate = useNavigate();
    // console.log("valor de id ",id)
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
      setCart((currItems) => {
        const isItemsFound = currItems.find((item) => item.id === id);
        if (isItemsFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        } else {
          return [...currItems, { id, quantity: 1, price }];
        }
      });
    };
    
  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
      };
    
      const quantityPerItem = getQuantityById(id);
    return (
        <div className="card">
            {quantityPerItem > 0 && (
                <div className="item-quantity">{quantityPerItem}</div>
            )}
            
            
            <div className="mx-auto" onClick={() => navigate("/product/"+id)}>
            <img
                src={`${image}`}
                alt=""
                 height="100"
                 width="100"
              />
            </div>
          
            <h6>{name}</h6>
            <p>Precio: {price}</p>
            {quantityPerItem === 0 ? (
                <button className="item-add-button" onClick={() => addToCart()}>
                + Add to cart
                </button>
                ) : (
                <button className="item-plus-button" onClick={() => addToCart()}>
                + add more
                </button>
            )}
            
            {quantityPerItem > 0 && (
                <button className="item-minus-button" onClick={() => removeItem(id)}>
                subtract item
                </button>
            )}
            {/* <button className="btn btn-primary" onClick={() => navigate("/product/"+id)}>Ver detalles</button> */}
            
        </div>
    );
}