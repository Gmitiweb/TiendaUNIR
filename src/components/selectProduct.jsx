import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';
import {useNavigate} from "react-router";
const SelectProduct = () => {
    const location = useLocation();
    const { id } = useParams();
    const {fetchResponse} = useFetch("https://fakestoreapi.com/products/"+id);
    const navigate = useNavigate();
    // const queryParams = new URLSearchParams(location.search);
    // const paramValue = queryParams.get("param");
    // console.log("valor de paramvalue",paramValue);
    return(
        <div>
            <h1>{fetchResponse.title}</h1>
            <div className="card-product">
            <img
                src={`${fetchResponse.image}`}
                alt=""
                // height={100}
                width="30%"
              />
            <h5>{fetchResponse.title}</h5>
            <p>Descripcion: {fetchResponse.description}</p>
            <p>Precio: {fetchResponse.price}</p>
           
            <button className="btn btn-primary" onClick={() => navigate("/product/"+id)}>Agregar al Carrito</button>
            
            </div>
           
        </div>
    )
}
export default SelectProduct