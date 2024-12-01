import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useContext} from "react";
import { translateContext } from "../../Context/TranslateContextProvider";
import { useTranslation } from "react-i18next";

const ResponsiveMenu = ({ isShow }) => {
  const { handleChangeLang, lng } = useContext(translateContext);
  const { t } = useTranslation("global");
  
  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 z-40 left-0 w-full lg:hidden "
        >
          <div className="py-10 bg-green-400 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-8 text-white font-semibold">
              <li>
                <Link className="px-5" to="/">
                  {t("navbar.main")}
                </Link>
              </li>
              <li>
                <Link className="px-5" to="/us">
                  {t("navbar.who_we_are")}
                </Link>
              </li>
              <li>
                <Link className="px-5" to="/services">
                  {t("navbar.services")}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleChangeLang(lng === "ar" ? "en" : "ar")}
                >
                  {lng === "ar" ? "ENGLISH" : "العربية"}
                </button>
              </li>
              <li>
                <Link to="/contact">
                  <button className="px-3 py-1 border-2 border-white rounded-full hover:bg-white hover:text-[#1A202C] duration-200">
                    {t("navbar.contact_us")}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
