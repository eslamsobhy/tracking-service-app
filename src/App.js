// Components

import ActivityLog from "./components/ActivityLog";
import Status from "./components/Status";
import Modal from "./components/Modal";
import NotFound from "./components/NotFound";
import Blank from "./components/Blank";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function App() {
  const { isModalOpen } = useSelector((store) => store.modal);
  const { shipment, isLoading, shipmentNum, isBlank } = useSelector(
    (store) => store.track
  );

  const { t } = useTranslation();

  if (isBlank) {
    return (
      <>
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "bold",
          }}
        >
          {t("Welcome to React")}
        </p>
        <Blank />
        <Modal />
      </>
    );
  }

  if (shipment.status === "Not Found.") {
    return (
      <>
        <NotFound />
        <Modal />
      </>
    );
  }
  return (
    <>
      <Modal />
      {!isModalOpen && !isLoading && (
        <>
          <Status />
          <ActivityLog />
        </>
      )}
    </>
  );
}

export default App;
