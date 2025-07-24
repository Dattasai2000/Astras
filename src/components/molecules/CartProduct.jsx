

export default function CartProduct({cart}) {
    let [qnt,setQnt]=useState(item.quantity)
  return (
    <div>
        <h1>CartProducts</h1>
        <div className='Container'>
        {cart.map((item,index)=>{
            
                <div key={index}>
                    <img src={item.imageUrl} alt={item.name} />
                    <h3>{item.name}</h3>
                    <div>
                        <div>
                        <button onClick={()=>{setQnt(qnt-=1)}}>-</button>
                        {/* {qnt} */}
                        <button onClick={()=>{setQnt(qnt+=1)}}>+</button>
                        </div>
                    </div>
                </div>
           

        })}
        </div>
    </div>
  )
}
