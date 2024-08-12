import { Fragment, useState } from 'react'
import EditOrder from '../editorder/editOrder'
import BackDrop from '../../../../component/others/backDrop/backDrop'
import DeleteOrder from '../deleteOrder/deleteOrder'
import './viewOrder.scss'
const ViewOrders=(data)=>{
  const [showModal,setShowModal]=useState(false)
    const {fullName,email,address,action,phoneNumber,total,id,creator}=data.data
    const products=data.data.products

return (

  <Fragment>
  {showModal && (<BackDrop onClick={() => {setShowModal(false);}}/>)}
  {showModal && (<DeleteOrder id={id} onClick={() => {setShowModal(false);}}/>)}

  <div className="viewOrder">
    <div className="frist-part">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80px"
        height="80px"
        viewBox="0 0 420 420"
      >
        <path
          fill="#FFD43B"
          d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"
        />
      </svg>
    </div>
    <div className="second-part">
      {products &&
        products.map((product) => {
          return product.map((item) => {
            return (
              <span>
                {" "}
                {item.title} * {item.quantity}{" "}
              </span>
            );
          });
        })}
      <span>{fullName}</span>
      <span>{email}</span>
      <span>{address}</span>
      <span>{phoneNumber}</span>
    </div>
    <div className="third-part">
      <span> items : {products[0].length}</span>
    </div>
    <div className="forth-part">
      <span> {total} $ </span>
    </div>
    <div className="fifth-part">
      <div>
        <div>{action}</div>
      </div>
         {action==="Delivered"?<button onClick={() => {setShowModal(true);}}>x</button>:""}
         <EditOrder id={id} creator={creator} />
        
      </div>
  </div>
  </Fragment>
);
}
export default ViewOrders

/*
 <div className='second-part'>
     <span>{data.data.title} * {data.data.quaitity}</span>
     <span>{data.data.name}</span>
     <span>{data.data.address}</span>
     <span>{data.data.phoneNumber}</span>
     </div>
     <div className='third-part'>
     <span> items : {data.data.quaitity}</span>
     </div>
     <div className='forth-part'>
     <span>{data.data.total} $ </span>
     </div>
*/