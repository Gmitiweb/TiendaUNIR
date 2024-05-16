import React , { useContext }from "react";
import {useNavigate} from "react-router";
import { CartContext } from "../context/ShoppingCartContext";
import { AddToCartIcon,RemoveFromCartIcon } from '../components/icon'
export const Product = ({ id,name, price, image }) => {
    const navigate = useNavigate();
   
    const [cart, setCart] = useContext(CartContext);
    //funcion para agregar al carrito
    const addToCart = () => {
      setCart((currItems) => {
        const isItemsFound = currItems.find((item) => item.id === id);
        if (isItemsFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1,name };
            } else {
              return item;
            }
          });
        } else {
          return [...currItems, { id, quantity: 1, price,name }];
        }
      });
    };
     //funcion para quitar del carrito
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
              <img src={`${image}`} alt="" height="100" width="100"/>
              <h6>{name}</h6>
              <p>Precio: {price}</p>
            </div>
            {quantityPerItem === 0 ? (
                <button className="item-add-button" onClick={() => addToCart()}>
               <AddToCartIcon/>
                </button>
                ) : (
                <button className="item-plus-button" onClick={() => addToCart()}>
                <AddToCartIcon/>
                </button>
            )}
            
            {quantityPerItem > 0 && (
                <button className="item-minus-button" onClick={() => removeItem(id)}>
                <RemoveFromCartIcon/>
                </button>
            )}
         
        </div>
    );
}