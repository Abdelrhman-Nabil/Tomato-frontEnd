import { Fragment, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import "./adminPanel.scss";

const AdminPanel = () => {
  const {isLoggedIn,logOut}=useContext(AuthContext)
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="adminPanel">
        <div className="header">
          <div className="fristPart">
            <span className="title">Tomato.</span>
            <span className="subTitle">AdminPanel</span>
          </div>
        </div>
        <div className="sideBar">
          <div className="actions">
            <span
              className="spanHeader"
              onClick={() => {
                navigate("DashBoard");
              }}
            >
              <svg
                fill="#000000"
                width="40px"
                height="40px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title></title>{" "}
                  <g id="home">
                    {" "}
                    <path d="M29.71,15.29l-3-3h0l-10-10a1,1,0,0,0-1.42,0l-10,10h0l-3,3a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L5,15.41V29a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V15.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,15.29ZM25,28H7V13.41l9-9,9,9Z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <sapn className="spanChild">DashBoard</sapn>
            </span>
            <span
              className="spanHeader"
              onClick={() => {
                navigate("Products");
              }}
            >
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9 14H15M4.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V5.6C21 5.03995 21 4.75992 20.891 4.54601C20.7951 4.35785 20.6422 4.20487 20.454 4.10899C20.2401 4 19.9601 4 19.4 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10ZM5 10H19V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H8.2C7.07989 20 6.51984 20 6.09202 19.782C5.71569 19.5903 5.40973 19.2843 5.21799 18.908C5 18.4802 5 17.9201 5 16.8V10Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <sapn className="spanChild">Proudcts</sapn>
            </span>
            <span
              className="spanHeader"
              onClick={() => {
                navigate("orderList");
              }}
            >
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(45)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12.0004 18.5816V12.5M12.7976 18.754L15.8103 19.7625C17.4511 20.3118 18.2714 20.5864 18.7773 20.3893C19.2166 20.2182 19.5499 19.8505 19.6771 19.3965C19.8236 18.8737 19.4699 18.0843 18.7624 16.5053L14.2198 6.36709C13.5279 4.82299 13.182 4.05094 12.7001 3.81172C12.2814 3.60388 11.7898 3.60309 11.3705 3.80958C10.8878 4.04726 10.5394 4.8182 9.84259 6.36006L5.25633 16.5082C4.54325 18.086 4.18671 18.875 4.33169 19.3983C4.4576 19.8528 4.78992 20.2216 5.22888 20.394C5.73435 20.5926 6.55603 20.3198 8.19939 19.7744L11.2797 18.752C11.5614 18.6585 11.7023 18.6117 11.8464 18.5933C11.9742 18.5769 12.1036 18.5771 12.2314 18.5938C12.3754 18.6126 12.5162 18.6597 12.7976 18.754Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <sapn className="spanChild">Orders</sapn>
            </span>
            <span
              className="spanHeader"
              onClick={() => {
                navigate("AdminPage");
              }}
            >
              <svg
                fill="#000000"
                width="40px"
                height="40px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
                </g>
              </svg>
              <sapn className="spanChild">Admins</sapn>
            </span>
            <span
              className="spanHeader"
              onClick={() => {
                navigate("/");
                logOut();

              }}
            >
              <svg
                fill="#000000"
                width="40px"
                height="40px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M1.3 3.75h5.88V2.5H1.3A1.25 1.25 0 0 0 .05 3.75v8.5A1.25 1.25 0 0 0 1.3 13.5h5.88v-1.25H1.3z"></path>
                  <path d="m15.4 7-4-2.74-.71 1 3.08 2.1H4.71v1.26h9.07l-3.08 2.11.71 1L15.4 9a1.24 1.24 0 0 0 0-2z"></path>
                </g>
              </svg>
              <sapn className="spanChild">Log Out</sapn>
            </span>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default AdminPanel;
