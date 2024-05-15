import React from 'react';
import { useFetch } from '../hooks/useFetch';
import {Product} from "./Product";


const Mujer = () => {
    const {fetchResponse} = useFetch("https://fakestoreapi.com/products?limit=20");
    let productFilt = fetchResponse.filter(word => word.category === "women's clothing");
   
    console.log('womens clothing...',productFilt);
    console.log('montando header...');
    return ( <div>
       
        <h2 className="center-text">MUJER</h2>
        
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

export default Mujer