import { Fragment, useEffect, useState } from "react";
import "./dashBoard.css";
const DashBoard = () => {

  return (
    <Fragment>
      <div className="DashBoard">
        <div className="dashBoard-body">
        <div className="dashBoard-orders">
          <div className="dashBoard-orders-header">
            <text>Orders</text>
          </div>
          <div className="dashBoard-orders-element">
            <div className="dashBoard-orders-today">
              <text>Today</text>
              <h1>{10}</h1>
              <text className="dashBoard-orders-today-bottom">
                {20} Order Today
              </text>
            </div>
            <div className="dashBoard-orders-thisWeek">
              <text>This Week</text>
              <h1>{10 + 8} </h1>
              <text className="dashBoard-orders-today-bottom">
                {20 + 8} Order This Week
              </text>
            </div>
            <div className="dashBoard-orders-thisMonth">
              <text>This Month</text>
              <h1>{15 + 15}</h1>
              <text className="dashBoard-orders-today-bottom">
                {22 + 15} Order This Month
              </text>
            </div>
          </div>
        </div>
        <div className="dashBoard-orders-totals">
          <div className="dashBoard-orders-header">
            <text>Renvenue</text>
          </div>
          <div className="dashBoard-orders-element-totals">
            <div className="dashBoard-orders-today">
              <text>Today</text>
              <h1>85,785$</h1>
              <text className="dashBoard-orders-today-bottom">
                {55} Order Today
              </text>
            </div>
            <div className="dashBoard-orders-thisWeek">
              <text>This Week</text>
              <h1>226,650$</h1>
              <text className="dashBoard-orders-today-bottom">
                {22 + 8} Order This Week
              </text>
            </div>
            <div className="dashBoard-orders-thisMonth">
              <text>This Month</text>
              <h1>230,093$</h1>
              <text className="dashBoard-orders-today-bottom">
                {12 + 15} Order This Month
              </text>
            </div>
          </div>
        </div>
      </div>
  
      </div>
    </Fragment>
  );
};
export default DashBoard;

