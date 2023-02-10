import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  getData,
  updateShipmentNum,
  returnHome,
  leaveHome,
} from "../features/track/trackSlice";

// styles
import "../styles/track.css";
import "../styles/media.css";

// icons
import { FiSearch } from "react-icons/fi";

const Track = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [searchShipment, setSearchShipment] = useState("");

  const handleSearch = () => {
    if (searchShipment) {
      dispatch(leaveHome());
      dispatch(updateShipmentNum(searchShipment));
      dispatch(getData(searchShipment));
    } else {
      console.log("empty field");
      dispatch(returnHome());
    }
  };

  return (
    <>
      <div className="track-container">
        <div className="section-heading">{t("ui_track_your_shipment")}</div>
        <div className="shipment-search">
          <input
            value={searchShipment}
            onChange={(e) => setSearchShipment(e.target.value)}
            type="text"
            placeholder={t("ui_tracking_no")}
            className="tracking-search"
          />
          <div className="search-icon" onClick={() => handleSearch()}>
            <FiSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Track;
