import React, { useContext,useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Pedidos = () => {
  const [cart, setCart] = useContext(CartContext);
  const [show, setShow] = useState(false);
  
  function handleShow(){
    setShow(true);
  }
    
  
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
    <div> 
     <h1> Lista de pedidos</h1>
    {cart.map((product,index)=>(
    <div class="card">
        <div className="card-header">
        
        </div>
              <div className="card-body">
                <div class="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <h5 className="card-title">Fecha: 10/05/2024 Cantidad: {product.quantity}</h5>
                        <p className="card-text">{product.name}</p>
                        <button  className="btn btn-primary" onClick={() => removeItem(product.id)}>Devolver producto</button>
                        
                      </div> 
                      <div className="col-sm-6 mb-3 mb-sm-0">
                          <p className="card-text">
                          ¿Por qué quieres devolver el producto?
                          Al seleccionar el motivo que especifique mejor el porqué de su devolución nos ayuda a 
                          recopilar comentarios esenciales, lo que nos permite mejorar continuamente nuestros 
                          servicios y la calidad del producto
                          </p>
                          <select className="form-select form-select-sm" onChange={handleShow} aria-label="Default select example">
                            <option selected>Elige una respuesta</option>
                            <option value="1">Ya no lo quiero/no lo necesito</option>
                            <option value="2">No es el producto que pedi</option>
                            <option value="3">Defectuoso/No funciona bien</option>
                            <option value="4">Partes faltantes</option>
                            <option value="5">Descripcion incorrecta en la pagina web</option>
                            <option value="6">Se ha pasado la fecha de entrega estimada</option>
                          </select>
                          {show &&(
                            <div className="form-floating" id="{product.id}">Comentarios(Obligatorio):
                              <label for="floatingTextarea"></label>
                              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            </div>
                          )
                          }
                          
                      </div>
                  
                  
                  </div>  
              </div> 
            
      </div> ))}
     
        
    </div>
  )
}

export default Pedidos
