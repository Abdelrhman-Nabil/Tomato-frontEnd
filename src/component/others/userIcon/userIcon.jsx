import { useContext} from 'react';
import { CartContext } from '../../../context/cartContext';
import UserIcon from '../../navigation/icons/userIcon/userIcon';
const AccountIcon=()=>{
    const {IsAccoutCartOpen,setIsAccoutCartOpen}=useContext(CartContext);
    const ToggleIsCartOpen=()=>setIsAccoutCartOpen(!IsAccoutCartOpen);
return(
    <div  className='accountIconContainer' onClick={ToggleIsCartOpen}>
         <UserIcon/>
    </div>
)
}
export default AccountIcon;