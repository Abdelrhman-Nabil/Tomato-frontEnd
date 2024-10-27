import { Fragment, useContext, useState } from 'react';
import {Link, Outlet ,useNavigate} from 'react-router-dom'
import Navlink from '../../component/navigation/nav-links/nav-link'
import SearchIcon from "../../component/navigation/icons/searachIcon/seacrhIcon";
import CartIcon from "../../component/navigation/icons/carticon/carticon";
import BackDrop from '../../component/others/backDrop/backDrop';
import SideDrawer from '../../component/navigation/sideDrop/sideDrop';
import { AuthContext } from '../../context/authContext';
import Button from '../../component/others/button/button';
import AccountIcon from '../../component/others/userIcon/userIcon';
import { CartContext } from '../../context/cartContext';
import UserDropDown from '../../component/others/userDropDown/userDropDown'
import './navigations.scss'
const Navigation=()=>{
  const navigate=useNavigate();
    const [drawerIsOpen,setdrawerIsOpen]=useState(false)
    const {isLoggedIn}=useContext(AuthContext)
    const {IsAccoutCartOpen}=useContext(CartContext);

    const openDrawerHandler = () => {
        setdrawerIsOpen(true);
      };
      const closeDrawerHandler = () => {
        setdrawerIsOpen(false);
      };

      
    return(
        <Fragment>
        {drawerIsOpen && (<SideDrawer onClick={closeDrawerHandler} />)}
        {drawerIsOpen && <BackDrop  onClick={closeDrawerHandler} />}
        
        <div className='nav-page'>
        <div className="navbar">
        <button className="main-navigation-menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <div className="navbar-header" onClick={(()=>{navigate('/')})}>Tomato.</div>
        <div className='nav-menu'>
        <Navlink/>
        </div>
        <div className='Icon'>
        {/* 
        <Link className='seacrch-icon' to={"/searchPage"}><SearchIcon/></Link>/

        */}
        <Link className='cart-icon' to={'/CheckOut'}><CartIcon/></Link>
          {!isLoggedIn &&<div className='loginButton'>
            <Button onClick={()=>{navigate('/auth')}}>Log in</Button>
            </div>}
 
         {isLoggedIn && <span ><AccountIcon/></span>}
         {IsAccoutCartOpen && <div><UserDropDown/></div>}
        </div>             

        </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}
export default Navigation