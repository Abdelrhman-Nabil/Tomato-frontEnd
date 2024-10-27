import { Fragment,useEffect,useState } from "react";
import AddAddmins from "../../components/adminsPage/addAdmin/addAdmin";
import ViewAdmins from "../../components/adminsPage/viewAdmin/viewAdmin";
import "./adminPage.scss";
import { useHttpClinet } from "../../../utils/hooks/httpHook";
const AdminPage = () => {
  const[addminsList,setAddminsList]=useState('')
  const{sendRequest}=useHttpClinet()

  useEffect(()=>{
  const fetchAddmin=async()=>{
    try{
      const addminsList=await sendRequest( process.env.REACT_APP_BACKEND_URL+'/api/admins/getAddminEmails')
    setAddminsList(addminsList.addminEmails)
    }catch(err){}
  }
  fetchAddmin();
 },[sendRequest])
 console.log(addminsList)
  return (
    <Fragment>
      <div className="addminPage-body">
        <AddAddmins />
        <div className="addminPage-emailList">
              <div className="view-email-header">
              <h3>Email List</h3>
              </div>
              {addminsList&&addminsList.map((addminEmail)=>{
                return(
            <ViewAdmins   list={addminEmail}/>
                )
         })}           </div>
      </div>
    </Fragment>
  );
};
export default AdminPage;
