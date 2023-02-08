import React from "react";
import { useSelector } from "react-redux";

// styles
import "../styles/activity-log.css";
import "../styles/media.css";

const ActivityLog = () => {
  const { shipment } = useSelector((store) => store.track);

  if (shipment.CurrentStatus) {
    const date =
      shipment.TransitEvents[shipment.TransitEvents.length - 1].timestamp;

    const message =
      shipment.CurrentStatus.state === "DELIVERED"
        ? "Order is delivered"
        : "Order is returned";

    return (
      <>
        <div className="activity-container">
          <div className="activity-title">ACTIVITY LOG</div>
          <div className="activity-info">
            <div className="log-date">{date.slice(0, 10)}</div>
            <div className="log-details">
              <p className="log-info">{message}</p>
              <p className="log-time">{date.slice(11, 16)} PM</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ActivityLog;
