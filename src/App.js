import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
//importamos los comp creados
import Footer from './layouts/footer'
import Storerouter from './router/Storerouter'

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Storerouter></Storerouter>
        <Footer/>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
