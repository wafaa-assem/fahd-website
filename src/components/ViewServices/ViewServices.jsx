import Heading from "../Heading/Heading";
import ServicesContent from "../ServicesContent/ServicesContent";
import { FaCameraRetro } from "react-icons/fa6";

const ViewServices = ({ services, titleServices }) => {
  return (
    <section className="py-12">
      <div className="container font-[Almarai]">
        {/* heading */}
        <Heading
          h1={`${titleServices?.title}`}
          p={`  ${titleServices?.description}`}
        />
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          {/* map */}
          {services?.map((service) => (
            <ServicesContent
              key={service.id}
              h2={`${service.name} `}
              p={`${service.overview}`}
              img={service.image}
              icon={<FaCameraRetro className="text-[#158E1A]" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewServices;
