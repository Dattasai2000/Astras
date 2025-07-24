import React, { useContext } from 'react'

import Header from '../HeaderandFooter/Header'
import Footer from '../HeaderandFooter/Footer'
import CartContext from './CartContext'


export default function Cart() {
  const {data}=useContext(CartContext)
  console.log(data);
  
  return (
    <>
    <Header/>
      <h1>{data}</h1>
      <Footer/>
      </>
  )
}
