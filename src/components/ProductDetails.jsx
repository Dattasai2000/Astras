import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "./HeaderandFooter/Header"
import Footer from "./HeaderandFooter/Footer"


export const ProductDetails=()=>{
    const {id}=useParams()
    const [data,setData]=useState({})
    const fetchData=async ()=>{
        let {data}=await axios.get(`https://dummyjson.com/products/${id}`)
        setData(data);
    }
    useEffect(()=>{
        fetchData()
    },[id])
    return(
        <>
        <Header/>
        <div>
           <div> <h1 className="ms-5">{data.title}</h1></div>
           <div className="d-flex justify-content-evenly">
      <img src={data.image} alt="" className="w-25 h-28 ms-5" />
          <div  > 
            <div className="lead fw-bolder mt-5 w-50">{data.description}</div>
            <div className="fw-bold mt-5">Price:{data.price}</div>
            <div className="btn btn-primary mt-5">Add to cart</div>
            </div> 
           </div>
           </div>
        <Footer/>
        </>
    )
}