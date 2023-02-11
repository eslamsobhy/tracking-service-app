import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

// styling
import "../styles/not-found.css";

// icons
import { ImWarning } from "react-icons/im";

const NotFound = () => {
  const { t } = useTranslation();

  const { shipmentNum } = useSelector((store) => store.track);

  return (
    <>
      <div className="error-container">
        <p className="shipment-num">
          {t("ui_shipment_no")} {shipmentNum.payload}
        </p>
        <div className="error-info">
          <ImWarning />
          <p>{t("ui_not_found_msg")}</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
