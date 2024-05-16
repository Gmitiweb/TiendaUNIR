import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

import { CartIcon,ClearCartIcon } from '../components/icon'
export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  
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
  return (
    
    <div className="container">
        <div className="table-responsive">
        <h1>Carrito de compras <CartIcon/></h1>
            <table className="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Codigo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                    {cart.map((product,index)=>(
                    <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.price*product.quantity}</td>
                    <td><button className="btn btn-danger"  onClick={() => removeItem(product.id)}><ClearCartIcon/></button></td>
                  </tr>   
                  ))}
                <tr>
                  <td></td>
                  <td>Items in cart:</td>
                  <th>{quantity}</th>
                  <td>Total:</td>
                  <th>${totalPrice}</th>
              
                </tr>
              </tbody>
            </table>
      </div>
      <div className="mx-auto">
        <button className="btn btn-success" onClick={() => console.log(cart)}>Checkout</button>
      </div>
    </div>
  );
};
