import { Fragment, useContext,useEffect,useState } from 'react'
import ViewOrders from '../../components/orders/viewOrder/viewOrder'
import { useHttpClinet } from "../../../utils/hooks/httpHook";
import {CartContext} from '../../../context/cartContext'
import BackDrop from "../../../component/others/backDrop/backDrop";
import ErrorModal from "../../../component/others/models/error/errorModel";
import LoadingSpinner from "../../../component/others/loadingSpinner/loadingSpinner";
import './ordersList.scss'
const OrderList=()=>{
const [orders,setOrders]=useState('')
  const{setTotalOrder}=useContext(CartContext)

  const{sendRequest,isLoading,error,clearError}=useHttpClinet()

  useEffect(()=>{
    const fetchOrder=async ()=>{
      const responseData=await sendRequest(process.env.REACT_APP_BACKEND_URL+'/api/order/getOrders')
       setOrders(responseData.orders)
       setTotalOrder(responseData.orders.length)
      }
    fetchOrder()
  },[sendRequest,setTotalOrder])

return(
    <Fragment>
    {error && <BackDrop />} 
    {error && <ErrorModal data={error} onClick={clearError} />}
    <div className='orderList-page'>
    {isLoading &&<LoadingSpinner/>}
    <span className='header'>Orders List</span>
     <div className='body'>
     {orders&&orders.map((order)=>{
        return(
         <ViewOrders data={order}/>
        )
       })}
     </div>
    </div>
    </Fragment>
)
}
export default OrderList