import Heading from "../Heading/Heading";
import dots from "../../assets/dots.png";
// import video from "../../assets/video.mp4";
import { useTranslation } from "react-i18next";

const AboutOffice = ({ view }) => {
  const { t } = useTranslation("global");
  return (
    <section className="py-12">
      <div className="container font-[Almarai]">
        {/* heading */}
        <Heading h1={`${view?.title}`} p={`${view?.description}`} />

        {/* content */}
        <div className="bg-[#F6F3F3] rounded-[19.36px] relative mt-8">
          <div className="md:py-16 md:px-24 py-5 px-8 space-y-4 md:space-y-8">
            <div className="border-[7px] border-white">
              <video
                src={view?.video}
                className="w-full rounded-md shadow-[15.96px_15.96px_59.85px_0px_#726A6A1A]"
                controls
              >
                متصفحك لا يدعم تشغيل الفيديو
              </video>
            </div>
            <p className="md:text-[19.95px]">
              {t("about.text")}
              <a href="#" className="text-[#407CF4]">
                {t("about.link")}
              </a>
            </p>
          </div>
          {/* dots */}
          <div className="absolute top-0 right-0">
            <img
              src={dots}
              className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOffice;
