import React from 'react'
import Mujer from '../components/mujer';
import Hombre from '../components/hombre';
import Home from '../components/home';
import Electronica from '../components/electronica';
import Register from '../components/register';
import Login from '../components/login'
import NavBarHeader from '../layouts/navbar';
import SelectProduct from '../components/selectProduct';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import  {ShoppingCart}  from '../components/ShoppingCart';

const Storerouter = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={ <NavBarHeader /> }>
        <Route index element={ <Home /> } />
        <Route path='hombre' element={ <Hombre /> } />
        <Route path='mujer' element={ <Mujer /> } />
        <Route path='electronica' element={ <Electronica /> } />
        <Route path='register' element={ <Register /> } />
        <Route path='login' element={ <Login /> } />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path='/product/:id' element={ <SelectProduct /> } />
        <Route path='*' element={ <Navigate replace to="/"/> }/>
      </Route>
  </Routes> 
  </BrowserRouter>
  )
}

export default Storerouter
