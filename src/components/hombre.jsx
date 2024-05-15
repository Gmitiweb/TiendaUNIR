import React from 'react';

import { useFetch } from '../hooks/useFetch';
import {Product} from "./Product";

 const Hombre = () => {

    const {fetchResponse} = useFetch("https://fakestoreapi.com/products?limit=15");
    let productFilt = fetchResponse.filter(word => word.category === "men's clothing");
  
    console.log('mens clothing...',productFilt);
    console.log('montando header...');
    return ( <div>
       
        <h2 className="center-text">HOMBRES</h2>
        
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
        </div>)
};
export default Hombre
