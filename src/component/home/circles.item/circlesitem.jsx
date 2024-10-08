import { useContext } from 'react'
import { CartContext } from '../../../context/cartContext'
import  './circlesitem.scss'
const CirclesItem=({data})=>{
    const {selected,setSelected}=useContext(CartContext)
   const{name,imageUrl}=data
   const filterHandler=()=>{
    setSelected(data.name)
   }

    return(
    <div className={`${selected===data.name?"selected":"circleItem"}`}  >
    <div  className='circle-img' onClick={filterHandler}>
     <img className="img" src={imageUrl} alt={name}/>
    </div>
    <span className="header">{name}</span>
    </div>
)

}
export default CirclesItem

//     // <div className={`circle-img ${selected ===data.name}`} onClick={filterHandler}>
