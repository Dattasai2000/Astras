import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
   const navigate=useNavigate();
    const [user,setUser]=useState(
        {
            fname:'',
            lname:'',
            password:'',
            confirmPassword:''


        }
    )
      const handlingChanges=(e)=>{
         setUser({...user,[e.target.name]: e.target.value });
        }
        console.log(user);
        
        const handleSubmit = (e) => {
    e.preventDefault();
   if(user.fname=='Dattasai' &&  user.lname=='Kurumeti' && user.password=='password' && user.confirmPassword=='password'){ navigate('/Home');}
    else{
            alert('Invalid Data')
        }
        }
       
   return (
   <>
     <h1 className='d-flex justify-center mt-5'>SignUp Form</h1>
   <div className="container d-flex justify-center">
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='First Name' name='fname'onChange={handlingChanges}/><br />
      <input type="text" placeholder='Last Name' name='lname'onChange={handlingChanges} /><br />
      <input type="password" placeholder=' Enter password' name='password'onChange={handlingChanges} /><br />
      <input type="text" placeholder='Confirm Password' name='confirmPassword' onChange={handlingChanges}/><br />
      <button>Submit</button>
      </form>
   </div>
   </>
  )
}
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     fname: '',
//     lname: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};

//     // Regex patterns
//     const nameRegex = /^[A-Za-z]{2,}$/;
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

//     if (!nameRegex.test(user.fname)) {
//       newErrors.fname = 'First name should be at least 2 characters and only letters';
//     }

//     if (!nameRegex.test(user.lname)) {
//       newErrors.lname = 'Last name should be at least 2 characters and only letters';
//     }

//     if (!passwordRegex.test(user.password)) {
//       newErrors.password = 'Password must be at least 6 characters, with letters and numbers';
//     }

//     if (user.password !== user.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       navigate('/Home');
//     }
//   };

//   return (
//     <>
//       <h1 className='d-flex justify-content-center mt-5'>SignUp Form</h1>
//       <div className="container d-flex justify-content-center">
//         <form onSubmit={handleSubmit} className="w-50">
//           <input
//             type="text"
//             name="fname"
//             placeholder="First Name"
//             onChange={handleChange}
//             className="form-control mt-2"
//             required
//           />
//           {errors.fname && <span className="text-danger">{errors.fname}</span>}

//           <input
//             type="text"
//             name="lname"
//             placeholder="Last Name"
//             onChange={handleChange}
//             className="form-control mt-2"
//             required
//           />
//           {errors.lname && <span className="text-danger">{errors.lname}</span>}

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             onChange={handleChange}
//             className="form-control mt-2"
//             required
//           />
//           {errors.password && <span className="text-danger">{errors.password}</span>}

//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             onChange={handleChange}
//             className="form-control mt-2"
//             required
//           />
//           {errors.confirmPassword && (
//             <span className="text-danger">{errors.confirmPassword}</span>
//           )}

//           <button type="submit" className="btn btn-primary mt-3">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }


