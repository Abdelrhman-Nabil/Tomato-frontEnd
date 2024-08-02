import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import Meals from "./routes/meals/meals";
import CheckOut from "./routes/checkOut/checkOut";
import SearchPage from "./routes/searchPage/searchPage";
import Auth from "./routes/auth/auth";
import PaymentForm from "./routes/PaymentForm/paymentFOrm"; 
import AdminPanel from "./admin/routes/adminPanel/adminPanel";
import DashBoard from "./admin/routes/dashBoard/dashBoard";
import ProductsPage from "./admin/routes/products/products";
import AddProduct from "./admin/components/products/addProudcts/addProducts";
import OrderList from "./admin/routes/ordersList/ordersList";
import AdminPage from "./admin/routes/adminPage/adminPage";
import ClientOrder from "./routes/clientOrders/clientOrders";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/authContext";
import { CartContext } from "./context/cartContext";
const App = () => {
  const {logIn}=useContext(AuthContext);
  const {setCartItems}=useContext(CartContext);
  const {state,setState}=useState('')

  useEffect(()=>{
    const storeData=JSON.parse(localStorage.getItem('userData'));
    if(storeData && storeData.token && new Date(storeData.expiration) > new Date()){
      logIn(storeData.userId,storeData.token,new Date(storeData.expiration) )

      const CartData=JSON.parse(localStorage.getItem("userCart"));
      if(CartData){
         setCartItems(CartData.cartItems)
      }
    }  },[logIn,setCartItems])
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="meals/*" element={<Meals />} />
          <Route path="CheckOut" element={<CheckOut />} />
          <Route path="SearchPage" element={<SearchPage />} />
          <Route path="PaymentForm" element={<PaymentForm />} />
          <Route path="Myorders" element={<ClientOrder />} />
        </Route>
        <Route path="/AdminPanel" element={<AdminPanel/>}>
        <Route path="dashBoard" element={<DashBoard/>}/>
        <Route path="Products" element={<ProductsPage/>}/>
        <Route path="addProduct" element={<AddProduct/>}/>
        <Route path="orderList" element={<OrderList/>}/>
        <Route path="AdminPage" element={<AdminPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
