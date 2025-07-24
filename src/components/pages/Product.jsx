import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../HeaderandFooter/Header';
import Footer from '../HeaderandFooter/Footer';
export default function Product() {
  const [data, setData] = useState([]);
  let [value,setValue]=useState(1)

  async function fetchData() {
    
      const {data} = await axios.get('https://dummyjson.com/products');
   
      console.log(data.products);
      setData(data.products)
      
   
  }

  useEffect(() => {
    fetchData();
  }, []);
  let totalProducts=3
  let output=data.slice((value-1)*totalProducts,value*totalProducts)
  

  return (
    <>
    <Header/>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px'
      }}>
        {output.length==0?'Loadin...':  output.map((item, index) => (
          <div
            key={index}
            style={{
              flex: '0 1 calc(33.33% - 40px)',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              boxSizing: 'border-box',
              textAlign: 'center'
            }}
          >
           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '180px' }}>
    <img
      src={item.image}
      alt={item.title}
      style={{ maxWidth: '100px', maxHeight: '150px', objectFit: 'contain' }}
    />
  </div>
            <h3>{item.title}</h3>
            <p><strong className='text-amber-400'>Price:</strong> ₹{item.price}</p>
            <p>{item.description.substring(0, 100)}...</p>
            <button style={{border:'2px solid', marginRight:'10px',width:'100px'}}>Add to cart</button>
          <Link to={`/productDetails/${item.id}`}>
            <button style={{border:'2px solid', marginRight:'10px',width:'100px',color:'black'}}>Details</button></Link>
          </div>
        ))}
      </div>
      <div className=' mt-2 mb-2 d-flex justify-center'>
        <button onClick={()=>{setValue(1)}} className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>1</button>
      <button onClick={()=>{setValue(2)}}  className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>2</button>
       <button onClick={()=>{setValue(3)}}  className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>3</button>
        <button onClick={()=>{setValue(4)}}  className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>4</button>
         <button onClick={()=>{setValue(5)}}  className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>5</button>
          <button onClick={()=>{setValue(6)}}  className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>6</button>
           <button onClick={()=>{setValue(7)}}  className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>7</button>
            <button onClick={()=>{setValue(8)}}  className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>8</button>
             <button onClick={()=>{setValue(9)}}  className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>9</button>
              <button onClick={()=>{setValue(10)}}  className='border-2 border-b-gray-950 bg-blue-700 text-cyan-50 w-6 '>10</button>
      </div>
      <Footer/>
    </>
  );
}
