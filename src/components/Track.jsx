import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getData, updateShipmentNum } from "../features/track/trackSlice";

// styles
import "../styles/track.css";
import "../styles/media.css";

// icons
import { FiSearch } from "react-icons/fi";

const Track = () => {
  const dispatch = useDispatch();
  const [searchShipment, setSearchShipment] = useState("");

  const handleSearch = () => {
    if (searchShipment) {
      dispatch(updateShipmentNum(searchShipment));
      dispatch(getData(searchShipment));
    } else {
      console.log("empty field");
    }
  };

  return (
    <>
      <div className="track-container">
        <div className="section-heading">Track your shipment</div>
        <div className="shipment-search">
          <input
            value={searchShipment}
            onChange={(e) => setSearchShipment(e.target.value)}
            type="text"
            placeholder="Tracking No."
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
