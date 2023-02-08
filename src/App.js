// Components

import ActivityLog from "./components/ActivityLog";
import Navbar from "./components/Navbar";
import Status from "./components/Status";
import Track from "./components/Track";
import Modal from "./components/Modal";

import { useSelector } from "react-redux";

function App() {
  const { isModalOpen } = useSelector((store) => store.modal);

  return (
    <>
      <Navbar />
      <Modal />
      {!isModalOpen && (
        <>
          <Track />
          <Status />
          <ActivityLog />
        </>
      )}
    </>
  );
}

export default App;
