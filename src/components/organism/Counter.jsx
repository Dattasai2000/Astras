import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(0)

    let increment=()=>{
        setCount(count=count+1)
    }
    
    let decrement=()=>{
        setCount(count<=0? count=0:count=count-1)
    }

  return (
    <div className='text-center' >
        <button className='text-5xl' onClick={decrement}>-</button>
        <h1 className='text-9xl'>{count}</h1>
        <button className='text-5xl' onClick={increment}>+</button>
    </div>
  )
}

export default Counter