import ProductCard from "../../component/card/productCard/productCard";
import Circles from "../../component/home/Circles/Circles";
import { useContext, useEffect, useState} from "react";
import { MealContext } from "../../context/mealsContext";
import "./home.scss"
import { Link } from "react-router-dom";
import { useHttpClinet } from "../../utils/hooks/httpHook";
import { CartContext } from "../../context/cartContext";
const Home=()=>{
  const circleData=[{
    id:1,
    name:"Salad",
    imageUrl:"https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
{
  id:2,
  name:"Rolls",
  imageUrl:"https://images.unsplash.com/photo-1604908816649-c8bdfc3ca68b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id:3,
  name:"Sandwich",
  imageUrl:"https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D"
},
{
  id:4,
  name:"Cakes",
  imageUrl:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",
},
{
  id:5,
  name:"Pasta",
  imageUrl:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D"
},
{
  id:6,
  name:"Burger",
  imageUrl:"https://images.unsplash.com/photo-1623407176536-6b5a8c020bd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVyZ2VyJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
},
{
  id:7,
  name:"Noodels",
  imageUrl:"https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5vb2RsZXN8ZW58MHx8MHx8fDA%3D"
},
{
  id:8,
  name:"Pizza",
  imageUrl:"https://images.unsplash.com/photo-1613564834361-9436948817d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8fHww"
}
]
const [loadedProduct, setLoadedProduct] = useState();

const { error, isLoading, clearError, sendRequest } = useHttpClinet();


useEffect(() => {
  
  const fetchUsers = async () => {
    try {
      const responseDataProduct = await sendRequest(
        "http://localhost:5000/api/products/allProduct"
      );

      if (responseDataProduct) {
        setLoadedProduct(responseDataProduct.products);
      }

    } catch (err) {}
  };
  fetchUsers();

}, [sendRequest]);

const {selected}=useContext(CartContext)
const {setMealMap}=useContext(MealContext)
setMealMap(loadedProduct)
let data,homeData;
if(loadedProduct){
  data=loadedProduct.filter(item=>item.category===selected)
  homeData=data.slice(0,4)
}
return(
       <div className="home-page">
        <div className="frist-part">
        <div className="text">
        <span className="title">Order Your<br/> Favorite food here </span>
        <span className="sub-title">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</span>
        <div className='home-button '>
        <button className='view-button'><Link className='view-button' to={"/meals"}>View Menu</Link></button>
        </div>
        </div>
        <img alt="Tomato" src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="second-part">
          <span className="title">Explore Our Menu</span>
          <span className="sub-title">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</span>
          <div className="cir">
          <Circles data={circleData}/>
          </div>
        </div>
        <div className="third-part">
          <span className="header">Top dishes near You</span>
        
          <ProductCard data={homeData}/> 
        </div>
        <div className="forth-part">
           <div className="text">
           <span>For Better experience Download</span>
           <span>Tomato App</span>
           </div>
           <div className="logo">
           <img src="data:image/png;base64,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"/>
           <img src="data:image/png;base64,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"/>
           </div>
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
export default Home;

/*

*/