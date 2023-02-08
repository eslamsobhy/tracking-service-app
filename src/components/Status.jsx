import React from "react";
import { useSelector } from "react-redux";

// styles
import "../styles/status.css";
import "../styles/media.css";

const Status = () => {
  return (
    <>
      <div className="status-container">
        <p className="shipment-no">Shipment No. 7234258</p>
        <h1 className="shipment-heading">Delivered</h1>
        <div className="progress-bar">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
        <p className="last-info">
          Your shipper requested a pickup. Bosta will pick it up soon
          <span className="last-info-date"> july 22nd, 2021</span>
        </p>
        <p className="last-update">(last update 230 days ago)</p>
      </div>
      <hr />
    </>
  );
};

export default Status;
