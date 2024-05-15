import React from 'react';
import { useFetch } from '../hooks/useFetch';
import {Product} from "./Product";
const Electronica = () => {
    const {fetchResponse}= useFetch("https://fakestoreapi.com/products?limit=20");
    let productFilt = fetchResponse.filter(word => word.category === "electronics");
    return(
        <div>
           
        <h2 className="center-text">ELECTRONICS</h2>
        <div className="product-container">
            {productFilt.map(
                (product,index)=>(
                <Product
                    key={index}
                    id={product.id}
                    name={product.title}
                    price={product.price}
                    image={product.image}
                    
                />
                )
            )}
        </div>
        </div>
    )
}
export default Electronica