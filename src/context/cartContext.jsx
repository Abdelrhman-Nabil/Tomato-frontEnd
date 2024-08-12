import { createContext,useEffect,useState } from "react";

const addCardItem=(cartItems,productToAdd)=>{
    const existing=cartItems.find((cartItem)=>cartItem.id ===productToAdd.id)
    if(existing){
        return cartItems.map((cartItem)=>cartItem.id === productToAdd.id?
        {...cartItem, quantity:cartItem.quantity + 1}:cartItem)
    }else{
    return [...cartItems ,{...productToAdd ,quantity: 1}]
}
}
const removeCartItem=(cartItems,productToRemove)=>{
const existing=cartItems.find((cartItem)=>cartItem.id ===productToRemove.id)
  if(existing.quantity === 1){
    return cartItems.filter((cartItem=>cartItem.id !== productToRemove.id))
  }else{
    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } :  cartItem )
  }
}
const clearCartItem=(cartItems,productToClear)=>{
    return cartItems.filter((cartItem)=>cartItem.id !==productToClear.id)
}
export const CartContext=createContext({
    cartItems:[],
    cartCount: 0,
    cartTotal:0,
    addItemsToCart:()=>{},
    clearItemFromCart:()=>{},
    removeItemFromCart:()=>{},
    IsAccoutCartOpen: false,
    setIsAccoutCartOpen: () => {},
    selected:"",
    setSelected:()=>{}
})


export const CartProvider=({children})=>{
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal]=useState(0);
    const [IsAccoutCartOpen, setIsAccoutCartOpen] = useState(false)
    const [selected,setSelected]=useState("Salad")
    const [totalOrder,setTotalOrder]=useState(0)


    const addItemsToCart=(productToAdd)=>{
        setCartItems(addCardItem(cartItems,productToAdd))
        localStorage.setItem("userCart",JSON.stringify({cartItems:cartItems}))

    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const clearItemFromCart=(productToClear)=>{
        setCartItems(clearCartItem(cartItems,productToClear))
    }

    useEffect((()=>{
        const newTotalCart=cartItems.reduce((total,cartItem)=>total +cartItem.quantity * cartItem.price ,0)
       setCartTotal(newTotalCart);   
    }),[cartItems])
    
      useEffect(()=>{
        const newCartCount=cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
        setCartCount(newCartCount);
      },[cartItems]);

    const value={cartItems,setCartItems,addItemsToCart,cartCount,removeItemFromCart,clearItemFromCart,cartTotal,IsAccoutCartOpen,setIsAccoutCartOpen,
      selected,setSelected,totalOrder,setTotalOrder}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}