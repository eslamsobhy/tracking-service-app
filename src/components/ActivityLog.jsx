import React from "react";
import { useSelector } from "react-redux";

// styles
import "../styles/activity-log.css";
import "../styles/media.css";

const ActivityLog = () => {
  const { shipment } = useSelector((store) => store.track);

  if (shipment.CurrentStatus) {
    return (
      <>
        <div className="activity-container">
          <div className="activity-title">ACTIVITY LOG</div>
          {shipment.TransitEvents.map((event) => {
            return (
              <div className="activity-info">
                <div className="log-date">{event.timestamp.slice(0, 10)}</div>
                <div className="log-details">
                  <p className="log-info">
                    {event.state.startsWith("TICKET") ||
                    event.state.startsWith("PACKAGE")
                      ? event.state.replaceAll("_", " ").toLowerCase()
                      : "The order is " +
                        event.state.replaceAll("_", " ").toLowerCase()}
                  </p>
                  <p className="log-time">{event.timestamp.slice(11, 16)} PM</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default ActivityLog;
