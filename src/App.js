// Components

import ActivityLog from "./components/ActivityLog";
import Status from "./components/Status";
import Modal from "./components/Modal";
import NotFound from "./components/NotFound";
import Blank from "./components/Blank";

import { useSelector } from "react-redux";

function App() {
  const { isModalOpen } = useSelector((store) => store.modal);
  const { shipment, isLoading, shipmentNum, isBlank } = useSelector(
    (store) => store.track
  );

  if (isBlank) {
    return (
      <>
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
