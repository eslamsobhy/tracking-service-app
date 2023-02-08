import React from "react";
import { useSelector } from "react-redux";

// styling
import "../styles/not-found.css";

// icons
import { ImWarning } from "react-icons/im";

const NotFound = () => {
  const { shipmentNum } = useSelector((store) => store.track);

  return (
    <>
      <div className="error-container">
        <p className="shipment-num">Shipment No. {shipmentNum.payload}</p>
        <div className="error-info">
          <ImWarning />
          <p>
            No record of this tracking number can be found at this time, please
            check the number and try again later. For further assistance, please
            contact Customer Service.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
