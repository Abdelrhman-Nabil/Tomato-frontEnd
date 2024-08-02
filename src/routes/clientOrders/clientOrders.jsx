import ViewClientOrders from '../../component/clientOrder/ViewClientOrders/ViewClientOrders'
import './clientOrders.scss'
const ClientOrder=()=>{
    const orders=[{
        title:"greek salad",
        quaitity:2,
        total:35,
        address:"sssssssssssssssssssss",
    },{
        title:"greek salad",
        quaitity:3,
        total:39,

    },
    {
        title:"greek salad",
        quaitity:2,
        total:35,
    }
]
return(
    <div className='clientOrder-page'>
    <span className='header'>My Orders</span>
    <div className='orders'>
    {orders.map((order)=>{
        return(
            <ViewClientOrders data={order}/>
        )
    })}
    </div>
    <div className="fifth-part">
    <div className="colums">
    <div className="frist-colmun">
    <span className="header">Tomato.</span>
    <span className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
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
    <span className="nextLine">copyright 2024 @ Tomato.com - All Right Reserved</span>
   </div>
    </div>
)
}
export default ClientOrder