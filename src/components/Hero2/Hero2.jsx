import dots from "../../assets/dots.png";

const Hero2 = ({ img, h, p, data }) => {
  return (
    <section className="py-12 lg:mt-[105px]">
      <div className="container relative z-10 bg-[#F6F3F3] grid grid-cols-1 lg:grid-cols-[50%_minmax(0,1fr)] gap-5 py-6 md:py-12 rounded-[19.36px] font-[Almarai]">
        {/* img */}
        <div>
          <img src={img} className="w-full rounded-[15.49px]" alt="" />
        </div>

        {/* info */}
        <div className="flex items-center justify-center bg-white rounded-tl-[19.36px] rounded-br-[58.08px] rounded-bl-[19.36px] py-[20px] md:h-[300.82px] px-[30px] lg:px-[30px] lg:min-w-[500px] lg:translate-x-[100px] ltr:lg:translate-x-[-100px]">
          <div className="space-y-2">
            <div className="bg-[#36EB32B8] w-[63.36px] h-[4.59px] mb-3" />
            <h2 className="text-[25.14px] md:text-[32.14px] leading-[42.5px] md:leading-[50.5px] font-extrabold">
              {h}
            </h2>
            <p className="text-[#718096] text-sm md:text-[16.53px] leading-[25.06px]" dangerouslySetInnerHTML={{__html:p}}>
              {/* {p} */}
            </p>
          </div>
        </div>

        {/* dots */}
        <div className="absolute top-0 right-0 ltr:left-0 z-[-1]">
          <img
            src={dots}
            className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] object-contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
