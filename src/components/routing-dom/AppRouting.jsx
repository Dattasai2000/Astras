import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Blog from '../pages/Blog'
import Cart from '../pages/Cart'
import Signup from '../pages/Signup'
import { ProductDetails } from '../ProductDetails'
import Login from '../pages/Login'
import CartProvider from '../pages/CartProvider'




export default function AppRouting() {
  return (
    <>
    <div>
       
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Home' element={<Home/>} />
            <Route path='/Product' element={<Product />}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Cart' element={<Cart />}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/productDetails/:id' element={<ProductDetails/>}/>
          </Routes>
     
    </div>
    </>
  )
}
