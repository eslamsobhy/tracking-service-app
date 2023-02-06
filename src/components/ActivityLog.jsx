import React from "react";

const ActivityLog = () => {
  return (
    <>
      <div className="activity-container">
        <div className="activity-title">ACTIVITY LOG</div>
        <div className="activity-info">
          <div className="log-date">Sat, 22 May</div>
          <div className="log-details">
            <p className="log-info">
              Your shipper requested a pickup. Bosta will pick it up soon
            </p>
            <p className="log-time">5:30 PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityLog;
