import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { translateContext } from "../../Context/TranslateContextProvider";

const Layout = () => {
  const { lng } = useContext(translateContext);
  return (
    <div dir={lng === "ar" ? "rtl" : "ltr"}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
