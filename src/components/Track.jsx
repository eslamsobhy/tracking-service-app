import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
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

  const { isArabic } = useSelector((store) => store.track);
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
      <div
        className={isArabic ? "track-container track-rtl" : "track-container"}
      >
        <div
          className={
            isArabic ? "section-heading heading-rtl" : "section-heading"
          }
        >
          {t("ui_track_your_shipment")}
        </div>
        <div className="shipment-search">
          <input
            value={searchShipment}
            onChange={(e) => setSearchShipment(e.target.value)}
            type="text"
            placeholder={t("ui_tracking_no")}
            className={
              isArabic ? "tracking-search search-rtl" : "tracking-search"
            }
          />
          <div
            className={isArabic ? "search-icon icon-rtl" : "search-icon"}
            onClick={() => handleSearch()}
          >
            <FiSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Track;
