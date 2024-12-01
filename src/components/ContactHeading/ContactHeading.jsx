import { useTranslation } from "react-i18next";

const ContactHeading = ({ show, h2, p }) => {
  const { t } = useTranslation("global");
  return (
    <div
      className={`contact-us-heading ${
        show == true ? "font-[Almarai]" : "font-[Cairo]"
      }  space-y-1 md:space-y-7 flex flex-col items-center justify-center text-center`}
    >
      {show && (
        <div className="flex items-center gap-2">
          <div className="size-3 bg-[#36EB32B8]" />
          <p className="text-[#36EB32B8] text-lg">{t("form.text")}</p>
        </div>
      )}
      <h2 className="text-[#1A202C] text-xl md:text-[40px] md:font-bold">
        {h2}
      </h2>
      <p className="text-[#4F5D77] text-sm md:text-lg">{p}</p>
    </div>
  );
};

export default ContactHeading;
