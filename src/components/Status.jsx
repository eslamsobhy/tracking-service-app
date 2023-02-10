import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// styles
import "../styles/status.css";
import "../styles/media.css";

const Status = () => {
  const { t } = useTranslation();

  const { shipment } = useSelector((store) => store.track);

  if (shipment.CurrentStatus) {
    const status =
      shipment.CurrentStatus.state === "DELIVERED"
        ? t("api_delivered")
        : t("api_returned");
    const message =
      shipment.CurrentStatus.state === "DELIVERED"
        ? t("api_delivered_message")
        : t("api_returned_message");

    const date = shipment.CurrentStatus.timestamp;
    const lastUpdate = (2023 - date.slice(0, 4).toString()) * 365;

    return (
      <>
        <div className="status-container">
          <p className="shipment-no">
            {t("ui_shipment_no")} {shipment.TrackingNumber}
          </p>
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
          <p className="last-update">
            {t("ui_last_update")} {`${lastUpdate}`} {t("ui_days_ago")}
          </p>
        </div>
        <hr />
      </>
    );
  }
};

export default Status;
