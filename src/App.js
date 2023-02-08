// Components

import ActivityLog from "./components/ActivityLog";
import Status from "./components/Status";
import Modal from "./components/Modal";
import NotFound from "./components/NotFound";

import { useSelector } from "react-redux";

function App() {
  const { isModalOpen } = useSelector((store) => store.modal);
  const { shipment, isLoading } = useSelector((store) => store.track);

  if (shipment.status === "Not Found.") {
    return <NotFound />;
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
