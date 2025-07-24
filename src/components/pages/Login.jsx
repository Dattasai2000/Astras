import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate=useNavigate();
    const [user,setUser]=useState(
        {
            username:'',
            password:''
        }
    )
      const handlingChanges=(e)=>{
         setUser({...user,[e.target.name]: e.target.value });
        }
        console.log(user);
        
        const handleSubmit = (e) => {
    e.preventDefault();
   if(user.username=='admin' &&  user.password=='password')
    { navigate('/Home');}
    else{
            alert('Invalid Data')
        }
        }
       

  return (
    <>
     <h1 className='d-flex justify-center mt-5'>Login Form</h1>
    <div className='d-flex justify-center'>
       
        <form onSubmit={handleSubmit} action="" id='login' className='' >
        <input type="text" placeholder='Enter UserName' name='username' className='  border rounded-pill' onChange={handlingChanges} /><br />
        <input type="password" placeholder='Enter Password' name='password' className=' border rounded-pill'  onChange={handlingChanges} /><br />
        <input type="submit"  value={'Login'} className=' bg-danger border rounded-pill w-15'/> <br />
        <Link to='/Signup'>Register User</Link>
        </form>
        </div>
</> 
 )
}
