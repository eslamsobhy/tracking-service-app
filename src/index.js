import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import store & provider
import { store } from "./store";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Track from "./components/Track";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <Track />
      <App />
    </Provider>
  </React.StrictMode>
);
