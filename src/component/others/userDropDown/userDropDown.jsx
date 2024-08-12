import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { useNavigate} from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import './userDropDown.scss'
const UserDropDown = () => {
  const {setIsAccoutCartOpen}=useContext(CartContext);
  const navigate=useNavigate();
  const {logOut} = useContext(AuthContext);
  const logOutHandler = () => {
    logOut();
    navigate("/");
    setIsAccoutCartOpen(false)
  };

  const orderDataHandler=()=>{
    navigate('/Myorders')
    setIsAccoutCartOpen(false)

  }

  return (
    <div className="UserDropdownContainer">
      <div className="accountItems">
      <button  className="second-button" onClick={orderDataHandler} >Order</button>
      <button className="thired-button" onClick={logOutHandler}>log out</button>
      </div>
    </div>
  );
};
export default UserDropDown;
