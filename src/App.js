import ActivityLog from "./components/ActivityLog";
import Navbar from "./components/Navbar";
import Status from "./components/Status";
import Track from "./components/Track";

function App() {
  return (
    <>
      <Navbar />
      <Track />
      <Status />
      <ActivityLog />
    </>
  );
}

export default App;
