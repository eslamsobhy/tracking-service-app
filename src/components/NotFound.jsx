import React from "react";

// styling
import "../styles/not-found.css";

// icons
import { ImWarning } from "react-icons/im";

const NotFound = () => {
  return (
    <>
      <div className="error-container">
        <p className="shipment-no">Shipment No. 7234258</p>
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
