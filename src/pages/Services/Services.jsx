import Hero2 from "../../components/Hero2/Hero2";
import ServicesContent from "../../components/ServicesContent/ServicesContent";
import { FaCameraRetro } from "react-icons/fa6";
import BeContact from "../../components/BeContact/BeContact";
import { useContext, useEffect } from "react";
import { translateContext } from "../../Context/TranslateContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../../Redux/serviceSlice";
import Loading from "../../components/Loading/Loading";
const Services = () => {
  // call api btgeb kol el services => hyege m3aaha id
  const { lng } = useContext(translateContext);
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.serviceReducer); // {{x,y},isLoading} X no destruct mozdweg in js
  const { title, services } = data || {}; // data {mawgoda destruct sa7 mnl object} tyb lw null undefined destruct mnhom ezay == error .. 34an keda {fady} 34an lw el data == null aw undefined lma yege destruct l destruct hyb2a sa7 bs sa3etha l value el by3mlha destruct == undefined bdal mydrab error fhmty ? ah
  // console.log("services", services);

  useEffect(() => {
    dispatch(getService());
    window.scrollTo(0, 0);
  }, [lng]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Hero2 img={title?.background} h={title?.title} p={title?.description} />
      <section className="py-12">
        {/* send id when call api */}
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {services?.map((service) => (
              <ServicesContent
                key={service.id}  // key is unique not be sent as prop neverrrrr
                id={service.id} // send id
                h2={service.name}
                p={service.overview}
                img={service.image}
                icon={<FaCameraRetro className="text-[#158E1A]" />}
              />
            ))}
          </div>
        </div>
      </section>
      <BeContact />
    </>
  );
};

export default Services;
