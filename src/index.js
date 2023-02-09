import React from "react";
import ReactDOM from "react-dom/client";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import "./index.css";
import App from "./App";

// import store & provider
import { store } from "./store";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Track from "./components/Track";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
        },
      },
      ar: {
        translation: {
          "Welcome to React":
            "react-i18next مرحبًا بك في ريأكت و خاصية الترجمة المقدمة من ",
        },
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
  });

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
