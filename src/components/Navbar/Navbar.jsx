import imageEllipse1 from "../../assets/ellipse1.png";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
import { useContext, useEffect, useRef, useState } from "react";
import { translateContext } from "./../../Context/TranslateContextProvider";
import { useTranslation } from "react-i18next";
import DropDown from "../DropDown/DropDown";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { handleChangeLang, lng } = useContext(translateContext);
  const { t } = useTranslation("global");
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsShow(false); // Close the menu if clicked outside
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`lg:fixed top-0 left-0 w-full z-50 ${
          isScrolled && "lg:bg-white lg:shadow-sm"
        }`}
      >
        <div className="container py-8 flex items-center justify-between font-[Almarai] text-lg text-[#1A202C]">
          {/* logo section */}
          <div>
            <Link to="/">
              <img src={logo} className="w-[130px]" alt="fahd" />
            </Link>
          </div>

          {/* menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-5">
              <li>
                <NavLink className="px-5" to="/">
                  {t("navbar.main")}
                </NavLink>
              </li>
              <li>
                <NavLink className="px-5" to="/us">
                  {t("navbar.who_we_are")}
                </NavLink>
              </li>
              <DropDown />
              <li>
                <NavLink className="px-5" to="/services">
                  {t("navbar.services")}
                </NavLink>
              </li>
              <li>
                <button
                  className="px-5"
                  onClick={() => handleChangeLang(lng === "ar" ? "en" : "ar")}
                >
                  {lng === "ar" ? "ENGLISH" : "العربية"}
                </button>
              </li>
            </ul>
          </div>

          {/* button contact us section*/}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="px-3 py-1 border-2 border-black rounded-full hover:bg-[#36eb33b8] hover:text-white hover:border-white duration-200">
                {t("navbar.contact_us")}
              </button>
            </Link>
          </div>

          {/* mobile hamburger menu */}
          <div
            ref={buttonRef}
            className="text-4xl cursor-pointer lg:hidden"
            onClick={() => setIsShow((prev) => !prev)}
          >
            <IoMdMenu />
          </div>
        </div>

        <div className="hidden md:block absolute top-[-180px] left-0 z-[-1]">
          <img src={imageEllipse1} className="w-full" alt="" />
        </div>
      </nav>

      {/* mobile sidebar section */}
      <ResponsiveMenu isShow={isShow}/>
    </>
  );
};

export default Navbar;
