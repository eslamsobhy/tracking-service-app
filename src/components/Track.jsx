import React from "react";
import { useSelector } from "react-redux";

// styles
import "../styles/track.css";
import "../styles/media.css";

// icons
import { FiSearch } from "react-icons/fi";

const Track = () => {
  const { isModalOpen } = useSelector((store) => store.modal);

  return (
    <>
      <div
        className={
          isModalOpen ? "modal-container" : "modal-container modal-hide"
        }
      >
        <div className="modal-option">العربية</div>
      </div>
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
