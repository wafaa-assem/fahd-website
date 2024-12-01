import Hero2 from "../../components/Hero2/Hero2";
import WhatAboutContent from "../../components/WhatAboutContent/WhatAboutContent";
import BeContact from "../../components/BeContact/BeContact";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUs } from "../../Redux/usSlice";
import Loading from "../../components/Loading/Loading";
import { translateContext } from "../../Context/TranslateContextProvider";

const Us = () => {
  const { lng } = useContext(translateContext);
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.usReducer);
  // console.log("data", data);

  useEffect(() => {
    dispatch(getUs());
    window.scrollTo(0, 0);
  }, [lng]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Hero2
        img={data?.title.image}
        h={data?.title.title}
        p={data?.title.description}
      />

      <section className="py-12">
        <div className="container font-[Almarai] my-10">
          {data?.stepdevelopment.map((item, index) => (
            <WhatAboutContent
              key={item.id}
              h2={item.title}
              p={item.description}
              img={item.image}
              dir={index % 2 === 0 ? "ltr" : "rtl"}
              show={true}
            />
          ))}
        </div>
      </section>

      <BeContact />
    </>
  );
};

export default Us;
