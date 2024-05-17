import React,{ useContext } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';

import { CartContext } from "../context/ShoppingCartContext";
import { AddToCartIcon } from '../components/icon'
const SelectProduct = () => {
    // const location = useLocation();
    const { id } = useParams();
    console.log("articulos es el id",id )
    const {fetchResponse} = useFetch("https://fakestoreapi.com/products/"+id);
    // const navigate = useNavigate();
    console.log("articulos traido ",fetchResponse)
    const [cart, setCart] = useContext(CartContext);
    //funcion para agregar al carrito
    const addToCart = () => {
      setCart((currItems) => {
        const isItemsFound = currItems.find((item) => item.id === id);
        console.log("articulos",currItems)
        if (isItemsFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 ,  };
            } else {
              return item;
            }
          });
        } else {
          return [...currItems, { id, quantity: 1, }];
        }
      });
    };
    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
      };
    
    const quantityPerItem = getQuantityById(id);
    return(
        <div>
            <h1>{fetchResponse.title}</h1>
            <div className="card-product">
            <img
                src={`${fetchResponse.image}`}
                alt="" width="20%" height="300"/>
            <h5>{fetchResponse.title}</h5>
            <p>Descripcion: {fetchResponse.description}</p>
            <p>Precio: $ {fetchResponse.price}</p>
            {quantityPerItem === 0 ? (
                <button className="item-add-button" onClick={() => addToCart()}>
               <AddToCartIcon/>Agrega al carrito
                </button>
                ) : (
                <button className="item-plus-button" onClick={() => addToCart()}>
                <AddToCartIcon/>
                </button>
            )}
            </div>
           
        </div>
    )
}
export default SelectProduct