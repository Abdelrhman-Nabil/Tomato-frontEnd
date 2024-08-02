import { Fragment,useState } from "react";
import AddAddmins from "../../components/adminsPage/addAdmin/addAdmin";
import ViewAdmins from "../../components/adminsPage/viewAdmin/viewAdmin";
import "./adminPage.scss";
const AdminPage = () => {
//   const[addminsList,setAddminsList]=useState('')
  const addminsList=["aen_2012@live.com","boka@google.com"]
  return (
    <Fragment>
      <div className="addminPage-body">
        <AddAddmins />
        <div className="addminPage-emailList">
              <div className="view-email-header">
              <h3>Email List</h3>
              </div>
              {addminsList.map((addminEmail)=>{
                return(
            <ViewAdmins   list={addminEmail}/>
                )
         })} 
          </div>
      </div>
    </Fragment>
  );
};
export default AdminPage;
