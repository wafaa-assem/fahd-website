import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
// function to scroll to top
// const handleScrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

const Footer = () => {
  const { data, iconsData } = useSelector((store) => store.footerReducer);
  const { t } = useTranslation("global");

  return (
    <footer className="py-12 bg-[#F6F3F3]">
      <div className="container font-[Almarai]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-32">
          {/* first section */}
          <div className="space-y-7 max-w-[300px]">
            <div className="flex items-center gap-4">
              <img src={data?.logo} className="w-[130px]" alt="fahd elnaser" />
              <h2 className="text-base md:text-lg text-[#158E1A]">
                {data?.name}
              </h2>
            </div>
            <p
              className="text-[#4F5D77] text-sm md:text-base leading-5 md:leading-[26px]"
              dangerouslySetInnerHTML={{ __html: data?.overview }}
            ></p>
            <div className="icons">
              <ul className="flex flex-wrap items-center gap-5">
                {iconsData?.map((icon) => (
                  <a key={icon.id} target="_blank" href={icon.link}>
                    <li className="bg-white size-8 rounded-full flex justify-center items-center shadow-[0px_4px_14px_0px_#00000026]">
                      {icon.classname === "FaTwitter" && (
                        <FaTwitter className="text-sm" />
                      )}
                      {icon.classname === "FaInstagram" && (
                        <FaInstagram className="text-sm" />
                      )}
                      {icon.classname === "FaWhatsapp" && (
                        <FaWhatsapp className="text-sm" />
                      )}
                      {icon.classname === "FaFacebook" && (
                        <FaFacebookF className="text-sm" />
                      )}
                      {icon.classname === "FaTiktok" && (
                        <FaTiktok className="text-sm" />
                      )}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-10 md:mt-0 gap-10">
            {/* second section */}
            <div className="space-y-4 text-[#1A202C]">
              <h1 className="text-lg font-extrabold font-[Poppins]">
                {t("links.links")}
              </h1>
              <div>
                <ul className="space-y-4 text-[#4F5D77] font-[Cairo]">
                  <li className="cursor-pointer duration-200">
                    <Link to="/us">{t("links.who_we_are")}</Link>
                  </li>
                  <li className="cursor-pointer duration-200">
                    <Link to="/services">{t("links.services")}</Link>
                  </li>
                  <li className="cursor-pointer duration-200">
                    <span>{t("links.partners")}</span>
                  </li>
                  <li className="cursor-pointer duration-200">
                    <Link to="/contact">{t("links.contact_us")}</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* third section */}
            <div className="space-y-4 ">
              <h1 className="text-lg font-extrabold text-[#1A202C] font-[Poppins]">
                {t("contact_us.title")}
              </h1>
              <div className="text-[#4F5D77] font-[Cairo] space-y-8">
                <p>{t("contact_us.description")}</p>
                <p>{data?.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm font-[Cairo] text-center mt-20">
          {t("footer.copyright")}{" "}
          <span className="text-[#1E67F8]">{t("footer.developedBy")}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
