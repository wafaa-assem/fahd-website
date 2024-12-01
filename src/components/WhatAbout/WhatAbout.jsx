import success from "../../assets/success.png";
import WhatAboutContent from "../WhatAboutContent/WhatAboutContent";
import { useContext } from "react";
import { translateContext } from "./../../Context/TranslateContextProvider";

const WhatAbout = ({ roadmap }) => {
  const { lng } = useContext(translateContext);
  return (
    <section className="py-12">
      <div className="container font-[Almarai]">
        {/* heading */}
        <div className="max-w-[550px] m-auto flex items-center">
          <div>
            <img src={success} alt="success" />
          </div>
        </div>
        {/* content */}
        {roadmap?.map((item , index) => (
          <WhatAboutContent
            key={item.id}
            h2={`${item.title}`}
            p={`${item.description}`}
            img={item.image}
            dir={index % 2 === 0 ? "ltr" : "rtl"}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatAbout;
