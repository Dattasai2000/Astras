import React from 'react'
import './styles.jsx'
import { modul1 } from './styles.jsx'

export default function Button() {
  // .........................................................................................................................................
  // Inline--And-InternalCss
  // const style={textAlign:'center',fontSize:'50px',color:'red',backgroundColor:'green',margin:'20px',padding: '30px',border:'10px solid yellow'};
  // const p={textAlign:'center',fontSize:'50px',color:'red'}
  // return (
  //   <div >
  //     <p style={p}>Inline-Css</p>
  //     <h1 style={style}>We are entering into the reactjs</h1>
  //   </div>
  // )
  // ...........................................................................................................................................
  // External-css
  // return(
  //   <div>
  //     <h1>External Css</h1>
  //   </div>
  // )
  // ..........................................................................................................................................
// Module-Css

return(
  <div>
    <h1 style={modul1} >Internal Css</h1>
  </div>
)
}


