import { Fragment, useContext, useState } from "react"
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../../context/authContext";
import BackDrop from "../../others/backDrop/backDrop";
import Auth from "../../../routes/auth/auth";
import "./nav-links.scss"
const Navlink=()=>{
    const {isLoggedIn,logOut}=useContext(AuthContext)
    return(
        <Fragment>

        <div className="nav-links">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to ={'/meals'}>Meals</NavLink>
        <NavLink>Mobile App</NavLink>
        <NavLink>Contact us</NavLink>
        </div>
        </Fragment>
    )
}
export default Navlink
