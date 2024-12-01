import { FaGoogle } from "react-icons/fa";
import Btn from "../../components/Btn/Btn";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import ContactHeading from "../../components/ContactHeading/ContactHeading";
import { useTranslation } from "react-i18next";
import imageEllipse from "../../assets/ellipse.png";
import imageEllipse1 from "../../assets/ellipse.png";
import dotsContact from "../../assets/contact.png";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { translateContext } from "../../Context/TranslateContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { sendContact } from "../../Redux/ContactUsSlice";
const Contact = () => {
  const { t } = useTranslation("global"); //وظيفة t التي تقدمها دالة useTranslation يمكن استخدامها في أي مكان داخل الكود الخاص بك، حتى خارج JSX.
  const { lng } = useContext(translateContext);
  const dispatch = useDispatch();
  const { message, isLoading } = useSelector((store) => store.contactUsReducer);
  const { data } = useSelector((store) => store.footerReducer);
  const [isVisible, setIsVisible] = useState(false);
  console.log("data", data);

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("values", values);
      // call api
      dispatch(sendContact(values));
      resetForm();
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = t("form.checkName1");
      }
      if (!values.lastname) {
        errors.lastname = t("form.checkName2");
      }
      if (!values.phone) {
        errors.phone = t("form.checkPhone");
      }

      if (!values.email) {
        errors.email = t("form.checkEmail");
      } else if (!values.email.includes("@") || !values.email.includes(".")) {
        errors.email = t("form.checkInvalidEmail");
      }

      if (!values.message) {
        errors.message = t("form.checkMessage");
      }

      return errors;
    },
  });
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setIsVisible(true);
      }, 3000);
    }
    window.scrollTo(0, 0);
  }, [message]);
  return (
    <>
      {/* keda kwys y3ne walla kol section a7oto fe component ?? wagy arandaro hena ?? walla madam msh tkrara msh lazem ? 3ade y3ne */}
      <section className="py-12 lg:mt-[105px] relative">
        <div className="relative container bg-[#F4F3F1] border-[0.93px] border-[#DADADA] rounded-[18.67px] py-[50.36px]  md:px-[20.05px]">
          {/* dots */}
          <div className="absolute top-0 right-0 ">
            <img
              src={dotsContact}
              className="w-[180px] h-[120px] lg:w-[260px] lg:h-[200px]"
              alt=""
            />
          </div>
          {/* heading-form */}
          <ContactHeading show={true} h2={t("form.h2")} p={t("form.p")} />
          {/* form */}
          <form
            onSubmit={formik.handleSubmit}
            className="lg:w-[70%] m-auto mt-8 lg:mt-10 font-[Almarai]"
          >
            <div className="row flex flex-wrap justify-center items-center">
              <div className="w-full sm:w-1/2 p-2 lg:p-4">
                <div className="inner">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("form.firstName")}
                    className="bg-[#E5E5E5C7] w-full placeholder:text-[#1A202C] p-[8.41px] sm:p-[10.41px] rounded-[82.16px] border-[0.93px] border-[#DADADA]"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2 lg:p-4">
                <div className="inner">
                  <input
                    type="text"
                    name="lastname"
                    placeholder={t("form.lastName")}
                    className="bg-[#E5E5E5C7] w-full placeholder:text-[#1A202C] p-[8.41px] sm:p-[10.41px] rounded-[82.16px] border-[0.93px] border-[#DADADA]"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastname && formik.errors.name && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.lastname}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full sm:w-1/2 p-3 lg:p-5">
                <div className="inner">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("form.email")}
                    className="bg-[#E5E5E5C7] w-full placeholder:text-[#1A202C] p-[8.41px] sm:p-[10.41px] rounded-[82.16px] border-[0.93px] border-[#DADADA]"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-3 lg:p-5">
                <div className="inner">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("form.phone")}
                    dir={lng == "ar" ? "rtl" : "ltr"}
                    className="bg-[#E5E5E5C7] w-full placeholder:text-[#1A202C] p-[8.41px] sm:p-[10.41px] rounded-[82.16px] border-[0.93px] border-[#DADADA]"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full p-3 lg:p-5">
                <div className="inner">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={t("form.msg")}
                    className="bg-[#E5E5E5C7] w-full placeholder:text-[#1A202C] p-[8.41px] sm:p-[10.41px] rounded-[33px] border-[0.93px] border-[#DADADA]"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.message}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {message && (
              <p
                className={`p-3 text-center text-[#4F5D77] font-semibold text-2xl ${
                  isVisible ? "hidden" : "block"
                }`}
              >
                {message}
              </p>
            )}
            <Btn
              isLoading={isLoading}
              type={"submit"}
              word={t("button.text2")}
              className={`md:text-xl py-[8.81px] md:py-[16.81px] px-[10.67px] md:px-[18.67px] rounded-[58.82px] w-1/2 block m-auto`}
            />

            <div className="flex items-center w-1/2 m-auto mt-3 mb-6 gap-3">
              <div className="bg-[#B3B3B3] flex-1 h-[0.8px]" />
              <h4 className="text-[#4F5D77] text-[16.81px]">
                {t("form.orContinue")}
              </h4>
              <div className="bg-[#B3B3B3] flex-1 h-[0.8px]" />
            </div>

            <div className="icons">
              <ul className="flex items-center justify-center gap-5">
                <li className="bg-[#E9EFE7] p-2 rounded-full">
                  <Link
                    to="#"
                    className="size-8 md:size-16 rounded-full flex items-center justify-center bg-[#DDF0DD] border-[0.93px] border-[#158E1A33]"
                  >
                    <FaLinkedin className="text-base md:text-2xl  text-[#36EB32B8]" />
                  </Link>
                </li>
                <li className="bg-[#E9EFE7] p-2 rounded-full">
                  <Link
                    to="#"
                    className="size-8 md:size-16 rounded-full flex items-center justify-center bg-[#DDF0DD] border-[0.93px] border-[#158E1A33]"
                  >
                    <FaFacebook className="text-base md:text-2xl text-[#36EB32B8]" />
                  </Link>
                </li>

                <li className="bg-[#E9EFE7] p-2 rounded-full">
                  <Link
                    to="#"
                    className="size-8 md:size-16 rounded-full flex items-center justify-center bg-[#DDF0DD] border-[0.93px] border-[#158E1A33]"
                  >
                    <FaGoogle className="text-base md:text-2xl text-[#36EB32B8]" />
                  </Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
        {/* ellipse */}
        <div className="hidden md:block absolute top-0 right-0 z-[-1]">
          <img src={imageEllipse} className="w-full" alt="" />
        </div>
        <div className="hidden md:block absolute top-[20%] left-[-300px] z-[-1]">
          <img src={imageEllipse1} className="w-full" alt="" />
        </div>
      </section>
      <section className="py-12 relative">
        <div className="container">
          <div className="row flex flex-wrap items-center justify-center py-5">
            <div className="w-full sm:w-1/3 p-3">
              <div className="inner">
                <div className="flex items-center justify-center gap-2">
                  <FaEnvelope className="text-[#36EB32B8] text-lg" />
                  <span className="text-[#4F5D77] lg:text-lg font-[Lexend]">
                    {data?.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3 p-3">
              <div className="inner">
                <div className="flex items-center justify-center gap-2">
                  <FaPhone className="text-[#36EB32B8] text-lg" />
                  <span className="text-[#4F5D77] lg:text-lg font-[Lexend]">
                    {data?.phone}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3 p-3">
              <div className="inner">
                <div className="flex items-center justify-center gap-2">
                  <FaLocationDot className="text-[#36EB32B8] text-lg" />
                  <span className="text-[#4F5D77] lg:text-lg font-[Lexend]">
                    location
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ellipse */}
        <div className="hidden md:block absolute top-[-200px] right-0 z-[-1]">
          <img src={imageEllipse} className="w-full" alt="" />
        </div>
      </section>
      <section className="py-12 r">
        <div className="container">
          {/* heading */}
          <ContactHeading
            show={false}
            h2={t("location.location")}
            p={t("location.description")}
          />
        </div>
        {/* map */}
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.location?.replace(
                "<iframe",
                `<iframe class="w-full h-[450px] my-10"`
              ),
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
