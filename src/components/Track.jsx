import React from "react";

// icons
import { FiSearch } from "react-icons/fi";

const Track = () => {
  return (
    <>
      <div className="track-container">
        <div className="section-heading">Track your shipment</div>
        <div className="shipment-search">
          <input
            type="text"
            placeholder="Tracking No."
            className="tracking-search"
          />
          <div className="search-icon">
            <FiSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Track;
