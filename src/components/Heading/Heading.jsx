const Heading = ({ h1, p }) => {
  return (
    <div
      className="flex flex-col items-center max-w-[671.52px] px-18 md:px-12 py-5 md:py-8 m-auto relative"
    >
      <h2 className="text-center text-[28.77px] md:text-[34.77px]">
        {h1} 
       
      </h2>
      <p className="text-sm md:text-[17.88px] text-[#718096] text-center !mt-2 md:!mt-5" dangerouslySetInnerHTML={{__html:p}}>
      </p>
    </div>
  );
};

export default Heading;
