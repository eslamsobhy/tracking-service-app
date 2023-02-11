import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// styles
import "../styles/activity-log.css";
import "../styles/media.css";

const ActivityLog = () => {
  const { t } = useTranslation();

  const { shipment, isArabic } = useSelector((store) => store.track);

  const checkLog = (log) => {
    switch (log) {
      case "NOT_YET_SHIPPED":
        return t("api_not_yet_shipped");
      case "AVAILABLE_FOR_PICKUP":
        return t("api_available_for_pickup");
      case "WAITING_FOR_CUSTOMER_ACTION":
        return t("api_waiting_for_customer_action");
      case "CANCELLED":
        return t("api_canceled");
      case "TICKET_CREATED":
        return t("api_ticket_created");
      case "PACKAGE_RECEIVED":
        return t("api_package_received");
      case "IN_TRANSIT":
        return t("api_in_transit");
      case "OUT_FOR_DELIVERY":
        return t("api_out_for_delivery");
      case "DELIVERED":
        return t("api_delivered_log");
      case "DELIVERED_TO_SENDER":
        return t("api_delivered_to_sender");
      default:
        return log;
    }
  };

  if (shipment.CurrentStatus) {
    return (
      <>
        <div
          className={
            isArabic ? "activity-container activity-rtl" : "activity-container"
          }
        >
          <div className="activity-title">{t("ui_activity_log")}</div>
          {shipment.TransitEvents.map((event, index) => {
            return (
              <div
                key={index}
                className={
                  isArabic
                    ? "activity-info info-rtl"
                    : "activity-info activity-info-s"
                }
              >
                <div className="log-date">{event.timestamp.slice(0, 10)}</div>
                <div className="log-details">
                  <p className="log-info">{checkLog(event.state)}</p>
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
