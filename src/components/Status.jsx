import React from "react";
import { useSelector } from "react-redux";

// styles
import "../styles/status.css";
import "../styles/media.css";

const Status = () => {
  const { shipment } = useSelector((store) => store.track);

  if (shipment.CurrentStatus) {
    const status =
      shipment.CurrentStatus.state === "DELIVERED" ? "Delivered" : "Returned";
    const message =
      shipment.CurrentStatus.state === "DELIVERED"
        ? "Order is delivered"
        : "Order is returned";

    const date =
      shipment.TransitEvents[shipment.TransitEvents.length - 1].timestamp;
    const lastUpdate = (2023 - date.slice(0, 4).toString()) * 365;

    return (
      <>
        <div className="status-container">
          <p className="shipment-no">Shipment No. {shipment.TrackingNumber}</p>
          <h1 className="shipment-heading">{status}</h1>
          <div className="progress-bar">
            <div className="bar bar-1 checked-bar"></div>
            <div className="bar bar-2 checked-bar"></div>
            <div
              className={
                shipment.CurrentStatus.state === "DELIVERED"
                  ? "bar bar-3 checked-bar"
                  : "bar bar-3"
              }
            ></div>
          </div>
          <p className="last-info">
            {message}
            <span className="last-info-date"> {date.slice(0, 10)}</span>
          </p>
          <p className="last-update">{`last update ${lastUpdate} days ago`}</p>
        </div>
        <hr />
      </>
    );
  }
};

export default Status;
