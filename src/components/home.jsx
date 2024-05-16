import React, {useState, useEffect} from 'react'

import {Product} from "./Product";

import { useFetch } from '../hooks/useFetch';


const Home = () => {
    
    //uso de customhook
    const {fetchResponse} = useFetch("https://fakestoreapi.com/products?limit=15");
   
    const [ search, setSearch ] = useState("")
   
    //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)   
    }
    const results = !search ? fetchResponse : fetchResponse.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))
    
    //uso de useEffect
    useEffect( ()=> {
        setSearch()
    }, [])
    
    return(
        <div>
            <h2 className="center-text">Nuevos Productos</h2>
            <div className='container-search'>
            <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/></div>
            <div className="product-container">
                {results.map((product,index)=>(
                    <div className='item' key={product.id}>
                    <Product
                        key={index}
                        id={product.id}
                        name={product.title}
                        price={product.price}
                        image={product.image}
                    /></div>
                ))}
            </div>
        </div>
    )
}
export default Home
