import { Link } from "react-router-dom";
// hystlm el id
const ServicesContent = ({ img, icon, h2, p, id }) => {
  return (
    // to={`/ServiceDetails/${id}`}  waro7 fel api.jsx  /ServicesDetails/:id  : colon repesent ene id == variable ok ? ok
    <Link to={`/ServicesDetails/${id}`}>
      <div className="relative group">
        <img
          src={img}
          className="w-full h-[250px] object-cover rounded-[11.79px]"
          alt="service image"
        />
        <div className="absolute top-0 bottom-0 start-0 end-0 opacity-0 group-hover:opacity-[100%] duration-300 bg-white flex flex-col justify-center items-center gap-5 p-3 rounded-[11.79px] border-[0.98px] border-[#36EB32B8] box-shadow">
          <div className="size-[53.16px] rounded-full bg-[#158E2109] flex justify-center items-center">
            {icon}
          </div>
          <h2 className="text-[19.64px] text-[#1A202C]">{h2}</h2>
          <p className="text-[#4F5D77] text-[13.75px] text-center leading-[19.64px]" dangerouslySetInnerHTML={{__html:p}}>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServicesContent;
