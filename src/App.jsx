import React from 'react'
import PromoBanner from './components/PromoBanner'

export default function App() {
   const user ="Dattasai";
   const featureproduct={
    name:'Noise Wireless Headphones',
    price:1999,
    instock:true
   };
  return (
    <div>
      <PromoBanner />
      <main className='p-6 text-center' >
        <h1 className='text-3xl font-bold text-gray-800'>Welcome to Astras,{user}</h1>
      </main>
      <section className='bg-cyan-100 shadow p-4 rounded-lg max-w-md  '>
      <h2 className='text-2xl font-semibold mb-2'>Featured Products</h2>
      <p><strong>Name:</strong>{featureproduct.name}</p>
      <p><strong>price:</strong>{featureproduct.price}</p>
      <p><strong>Status:</strong><span className={featureproduct.instock ? "text-green-400" : "text-red-500"  }>{featureproduct.instock ? "Available" : "Out of Stock"}</span></p> </section>
    </div>
  )
}
