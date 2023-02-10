import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// styles
import "../styles/activity-log.css";
import "../styles/media.css";

const ActivityLog = () => {
  const { t } = useTranslation();

  const { shipment } = useSelector((store) => store.track);

  if (shipment.CurrentStatus) {
    return (
      <>
        <div className="activity-container">
          <div className="activity-title">{t("ui_activity_log")}</div>
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
                  <p className="log-time">
                    {event.timestamp.slice(11, 13) < 12
                      ? event.timestamp.slice(11, 16) + " " + t("ui_am")
                      : event.timestamp.slice(11, 16) + " " + t("ui_pm")}
                  </p>
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
