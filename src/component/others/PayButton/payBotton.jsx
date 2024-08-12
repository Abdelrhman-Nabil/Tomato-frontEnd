import { Fragment, useContext } from "react"
import { AuthContext } from "../../../context/authContext"
import axios from 'axios'
import Button from "../button/button"
const PayButton=({cartItems})=>{
    const{userId}=useContext(AuthContext)
    const handlerCheckOut=async()=>{
      axios.post(`http://localhost:5000/api/Stripe/create-checkout-session`,{
        cartItems,
        userId:userId
      }).then((res)=>{
        if(res.data.url){
            window.location.href=res.data.url
        }
      }).catch((err)=>{
        alert(err.message)
      })
    }
   return(
    <Fragment>
        <Button onClick={handlerCheckOut}>PAY</Button>
    </Fragment>
   )
}
export default PayButton