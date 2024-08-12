import { Fragment, useState } from "react"
import Button from "../../../../component/others/button/button"
import { useContext } from "react"
import { AuthContext } from "../../../../context/authContext"
import { useHttpClinet } from "../../../../utils/hooks/httpHook"
import { useNavigate } from "react-router-dom"
const EditOrder=(props)=>{
    const {id,creator}=props;
    console.log(id)
    const navigate=useNavigate();
    const [ShowModel,setShowModel]=useState(false)
    const [action,setAction]=useState('')
    const {sendRequest}=useHttpClinet()
    const CategoryHandler=(event)=>{
        setAction(event.target.value)
    }
    const editHandler=async()=>{
            try{
            await sendRequest(`http://localhost:5000/api/order/${id}`,"PATCH",JSON.stringify({
                action:action,
                creator:creator
            }),{
                'Content-Type':"application/json"
              })
            }catch(err){}
            navigate('/AdminPanel/orderList')
               
    
        };
    return(
   <Fragment>
   {ShowModel===false &&<Button onClick={()=>{setShowModel(true)}}>edit Action</Button>}
    {ShowModel&&<div>
        <div className="select">
        <select name="Categories" id="categories-select" onChange={CategoryHandler}>
        <option value="">--Please choose an option--</option>
        <option value="Food processing"> Food processing</option>
        <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
        </select></div>
        <div><Button inverse disabled={!action} onClick={editHandler}>Save</Button></div>
        </div>
       
    }
        </Fragment>
)
}
export default EditOrder