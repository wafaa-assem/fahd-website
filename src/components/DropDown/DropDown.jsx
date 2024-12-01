import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("global");

  const dropdownRef = useRef(null);
  // console.log(dropdownRef);  object has property current that has an element that be accessed from dom direct by hook useRef
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <li
      className="relative px-8 hidden lg:block z-20 cursor-pointer"
      ref={dropdownRef}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center">
        <span>{t("navbar.pages")}</span>
        <div className="px-2 text-md cursor-pointer">
          <MdOutlineArrowDropDown />
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown text-center w-full px-5 py-1 space-y-2 absolute top-[2.3rem] left-0 bg-[#FAFAFA] border-[0.72px] border-[#C6B4B4] rounded-[8.59px]">
          <li className="border-b-[1px]">
            <Link
              to="/"
              className="font-bold text-[15.7px] hover:text-green-500"
            >
              {t("navbar.main")}
            </Link>
          </li>
          <li className="border-b-[1px]">
            <Link
              to="/us"
              className="font-bold text-[15.7px] hover:text-green-500"
            >
              {t("navbar.who_we_are")}
            </Link>
          </li>
          <li className="border-b-[1px]">
            <Link
              to="/services"
              className="font-bold text-[15.7px] hover:text-green-500"
            >
              {t("navbar.services")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-bold text-[15.7px] hover:text-green-500"
            >
              {t("navbar.contact_us")}
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DropDown;
