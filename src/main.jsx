import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18next from "i18next";
import AR_LANG from "./locales/ar/common.json";
import EN_LANG from "./locales/en/common.json";
import { I18nextProvider } from "react-i18next";
import TranslateContextProvider from "./Context/TranslateContextProvider.jsx";
import { Provider } from "react-redux";
import { reduxStore } from "./Redux/reduxStore.js";

const storedLang = localStorage.getItem("language") || "en";
i18next.init({
  interpolation: {
    escapeValue: false, // react already safes from xss "this is <p>hello</p>"" react bt2olak mlk4 d3wa mtrgm4 <p> if true == &lt;b&gt;
  },
  resources: {
    en: {
      global: EN_LANG,
    },
    ar: {
      global: AR_LANG,
    },
  },
  lng: storedLang, // initial lang
});

createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <TranslateContextProvider>
      <Provider store={reduxStore}>
        <App />
      </Provider>
      ,
    </TranslateContextProvider>
  </I18nextProvider>
);
