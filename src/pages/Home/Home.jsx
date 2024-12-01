import AboutOffice from "../../components/AboutOffice/AboutOffice";
import BeContact from "../../components/BeContact/BeContact";
import Hero from "../../components/Hero/Hero";
import Hero2 from "../../components/Hero2/Hero2";
import Love from "../../components/Love/Love";
import ViewServices from "../../components/ViewServices/ViewServices";
import WhatAbout from "../../components/WhatAbout/WhatAbout";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../Redux/homeSlice";
import { translateContext } from "../../Context/TranslateContextProvider";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const { lng } = useContext(translateContext);
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.homeReducer);
  // console.log("data", data);

  useEffect(() => {
    dispatch(getHome());
    window.scrollTo(0, 0);
  }, [lng]); // with every change in lng useEffect htsht8al tany getHome tany => send request tany wl header hykon feh el lnag el gdeda el 7asalhaa change

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Hero data={data?.heroSection} />
      <Hero2
        img={data?.aboutSection.image}
        h={data?.aboutSection.title}
        p={data?.aboutSection.description}
      />
      <Love reviews={data?.reviews} titleReview={data?.titleReview} />
      <ViewServices
        services={data?.services}
        titleServices={data?.titleServices}
      />
      <AboutOffice view={data?.view} />
      <WhatAbout roadmap={data?.roadmap} />
      <BeContact />
    </>
  );
};

export default Home;
