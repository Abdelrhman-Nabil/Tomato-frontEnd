import ViewOrders from '../../components/orders/viewOrder/viewOrder'
import './ordersList.scss'
const OrderList=()=>{
    const orders=[{
        title:"greek salad",
        quaitity:2,
        total:35,
        address:"sssssssssssssssssssss",
        phoneNumber:"0505",
        name:"boka nabil"
    },{
        title:"greek salad",
        quaitity:3,
        total:39,
        address:"aaaaaaaaaaa",
        phoneNumber:"050522",
        name:"boka nabil"

    },
    {
        title:"greek salad",
        quaitity:2,
        total:35,
        address:"sssssssssssssssssssss",
        phoneNumber:"0505",
        name:"boka nabil"
    }
]
return(
    <div className='orderList-page'>
    <span className='header'>Orders List</span>
     <div className='body'>
     {orders.map((order)=>{
        return(
         <ViewOrders data={order}/>
        )
       })}
     </div>
    </div>
)
}
export default OrderList