import { Fragment, useEffect, useState } from "react";
import { useHttpClinet } from "../../utils/hooks/httpHook";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ViewClientOrders from "../../component/clientOrder/ViewClientOrders/ViewClientOrders";
import BackDrop from "../../component/others/backDrop/backDrop";
import ErrorModal from "../../component/others/models/error/errorModel";
import LoadingSpinner from "../../component/others/loadingSpinner/loadingSpinner";
import "./clientOrders.scss";
const ClientOrder = () => {
  const orders = [
    {
      title: "greek salad",
      quaitity: 2,
      total: 35,
      address: "sssssssssssssssssssss",
    },
    {
      title: "greek salad",
      quaitity: 3,
      total: 39,
    },
    {
      title: "greek salad",
      quaitity: 2,
      total: 35,
    },
  ];  
  
   const [clientOrders,setClientOrders]=useState('')
  const {sendRequest,isLoading,error,clearError}=useHttpClinet()
      const {userId}=useContext(AuthContext)
      
  useEffect(()=>{
     const fetchOrder=async()=>{
       try{
         const responseDataOrder=await sendRequest(process.env.REACT_APP_BACKEND_URL+`/api/order/user/${userId}`)
         if(responseDataOrder){
             setClientOrders(responseDataOrder.orders)
          }
        }
        catch(err){}
     }
     fetchOrder();
   },[sendRequest,userId])
   console.log(clientOrders)
  
  return (
    <Fragment>
    {error && <BackDrop />} 
    {error && <ErrorModal data={error} onClick={clearError} />}

      <div className="clientOrder-page">
      {isLoading &&<LoadingSpinner/>}

        <span className="header">My Orders</span>
        <div className="orders">
          {clientOrders&&clientOrders.map((order) => {
            return <ViewClientOrders data={order} />;
          })}
        </div>
        <div className="fifth-part">
          <div className="colums">
            <div className="frist-colmun">
              <span className="header">Tomato.</span>
              <span className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
              <ul>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-whatsapp"></i>
                <i class="fab fa-linkedin"></i>
              </ul>
            </div>
            <div className="second-colmun">
              <span className="title">Company</span>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="third-colmun">
              <span className="title">Get In Touch</span>
              <ul>
                <li>01019627390</li>
                <li>aen_2012@live.com</li>
              </ul>
            </div>
          </div>
          <div className=" line"></div>
          <span className="nextLine">
            copyright 2024 @ Tomato.com - All Right Reserved
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default ClientOrder;
