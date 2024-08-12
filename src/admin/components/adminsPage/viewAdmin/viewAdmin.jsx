import { Fragment ,useState} from "react";
import BackDrop from "../../../../component/others/backDrop/backDrop";
import DeleteAddminEmail from "../deleteAdmin/deleteAddmin";
import "./viewAdmin.scss";
const ViewAdmins = ({ list }) => {
    const [showModal, setShowModal] = useState(false);
    let date
    if(list.time){
     date=list.time.slice(0,10)
  }
  return (
    <Fragment>
    {showModal && (<BackDrop onClick={() => {setShowModal(false);}}/>)}
    {showModal && (<DeleteAddminEmail id={list.id} onClick={() => {setShowModal(false);}}/>)}

        <div className="view-email-list">
        <p className="list">{list.email}</p>
        <p className="list-time">{date}</p>
          <div>
            <div className="view-email-list-buttton-contianer">
              <button className="view-email-list-deleteButton" onClick={()=>{setShowModal(true)}}>🗑️ delete</button>
            </div>
          </div>
        </div>
    </Fragment>
  );
};
export default ViewAdmins;
