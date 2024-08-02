import { Fragment ,useState} from "react";
import "./viewAdmin.scss";
const ViewAdmins = ({ list }) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
        <div className="view-email-list">
        <p className="list">{list.email}</p>
        <p className="list-time">boka</p>
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
