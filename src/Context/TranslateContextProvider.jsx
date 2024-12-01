import { createContext } from "react";
import { useTranslation } from "react-i18next";

export const translateContext = createContext();
const TranslateContextProvider = ({ children }) => {
  const { i18n } = useTranslation("global");
  const handleChangeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  let lng = i18n.language; // get currunt language that in config in main.jsx

  return (
    <translateContext.Provider
      value={{
        handleChangeLang,
        lng,
      }}
    >
      {children}
    </translateContext.Provider>
  );
};
export default TranslateContextProvider;
