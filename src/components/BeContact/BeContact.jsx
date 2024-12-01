import Btn from "../Btn/Btn";
import dots from "../../assets/dots2.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BeContact = () => {
  const { t } = useTranslation("global");
  return (
    <section className="py-12 relative">
      <div className="container font-[Almarai] bg-[#ECECEC] rounded-[15.51px] border-[0.78px] border-[#ECECEC] py-[62.06px] relative">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 relative z-30">
          <div className="space-y-2">
            <h2 className="text-[35.9px] md:text-[41.9px] text-[#1A202C]">
              {t("beContact.text1")}{" "}
              <span className="text-[#36EB32B8]">{t("beContact.text2")}</span>
            </h2>
            <p className="md:text-[17.96px] text-[#4F5D77]">
              {t("beContact.text3")}
            </p>
          </div>
          <div>
            <Link to="/contact">
              <Btn
                word={t("button.text")}
                className={`rounded-[63.61px] py-[13.96px] px-[23.27px] text-[13.96px]`}
              />
            </Link>
          </div>
        </div>
        {/* dots */}
        <img
          src={dots}
          className="absolute top-0 rtl:left-0 ltr:right-0 h-full object-cover z-20 hidden md:block"
          alt="Dots Bg"
        />
      </div>
    </section>
  );
};

export default BeContact;
