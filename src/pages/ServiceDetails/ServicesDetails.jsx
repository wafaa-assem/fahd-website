import { Link, useParams } from "react-router-dom";
import BeContact from "./../../components/BeContact/BeContact";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { translateContext } from "../../Context/TranslateContextProvider";
import { getServiceDetails } from "../../Redux/serviceDetails";
import Loading from "../../components/Loading/Loading";
import ServiceDetailsContent from "../../components/ServiceDetailsContent/ServiceDetailsContent";

const ServicesDetails = () => {
  // lma da8t 3aala el service b3t el id m3a el path fo2
  // hook mn react-router-dom == useParams return lya object gowah el id el fo2 fel path da hagebo ba2a h3mlo destruct
  // asba7 a2dar ab3to wana b call api ba2a
  const { id } = useParams(); // id public
  const dispatch = useDispatch();
  const { lng } = useContext(translateContext);
  const { data, isLoading } = useSelector(
    (store) => store.serviceDetailsReducer
  );

  console.log("data", data);

  // call api hena => mestnya mene el id 34an ab3to wana b call api
  useEffect(() => {
    dispatch(getServiceDetails(id));
    window.scrollTo(0, 0);
  }, [lng]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="section py-12 lg:mt-[105px]">
        <div className="container space-y-12">
          {/* Breadcrumbs */}
          <nav>
            <ol className="font-[Almarai] flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="text-[#4F5D77] text-[13px]">
                  الرئيسية
                </Link>
              </li>
              <li className="text-[#4F5D77] text-[13px]">&gt;</li>{" "}
              <li>
                <Link to="/services" className="text-[#4F5D77] text-[13px]">
                  الخدمات
                </Link>
              </li>
              <li className="text-[#4F5D77] text-[13px]">&gt;</li>{" "}
              <li className="text-[#1A202C] text-[13px]">{data?.name}</li>
            </ol>
          </nav>
          <p className="font-[Almarai] bg-[#F4F3F1] border-[0.98px] border-[#DADADA] rounded-[11.79px] py-[29.47px] px-[19.64px] text-center">
            {data?.name}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          {/* ?msh lazem compononet sa7?  */}
          <div className="flex flex-wrap justify-center items-center font-[Cairo] text-base md:text-[21.62px] leading-7 md:leading-[40.53px] text-[#4F5D77]">
            <ServiceDetailsContent
              img={data?.image}
              p={data?.description}
            />
            {/* <div className="w-full md:w-1/2 p-4 md:p-8">
              <div className="inner">
                <img
                  src={data?.image}
                  className="w-full max-h-[450px] object-cover rounded-lg"
                  alt="service image"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8">
              <div className="inner">
                <p className="text-sm md:text-base leading-6 md:leading-8 max-w-[700px] mx-auto">
                  {data?.description}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <BeContact />
    </>
  );
};

export default ServicesDetails;
