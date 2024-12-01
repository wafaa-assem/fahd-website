import { useTranslation } from "react-i18next";
import heroImg from "../../assets/Group.png";
import Btn from "../Btn/Btn";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({ data }) => {
  const { t } = useTranslation("global");
  return (
    <section className="overflow-hidden py-12 lg:mt-[105px]">
      <div className="container grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_35%] gap-10 min-h-[650px]">
        {/* hero info */}
        <div className="flex items-center">
          <div className="text-center lg:text-start space-y-5 md:space-y-7">
            <h1 className="font-semibold md:font-bold text-[20px] md:text-[35px] text-[#1A202C]">
              {data?.title}
            </h1>
            <p
              className="font-[Open Sans] font-normal md:font-semibold md:text-lg text-[#718096] max-w-[510px] m-auto lg:m-0"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></p>
            <Link to="/contact">
              <Btn
                className="rounded-md px-11 md:px-16 py-3 md:py-4 !mt-14 text-base md:text-lg"
                word={t("button.text")}
              />
            </Link>
          </div>
        </div>
        {/* hero img */}
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="flex justify-center items-center"
        >
          <img src={heroImg} alt="arrows" className="w-[350px] xl:w-[600px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
