
import CartContext from "./CartContext"


 const  CartProvider=({Children})=>{
    const data='This is The cartProduct'
    return(
        <>
       <CartContext.Provider value={{data}}>
        {Children}
       </CartContext.Provider>
        </>
    )
}

export default CartProvider;