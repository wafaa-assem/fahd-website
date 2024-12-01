import dots from "../../assets/dots2.png";
// import imagePerson from "../../assets/nn.png";
const WhatAboutContent = ({ img, h2, p, dir, show }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8" dir={dir}>
      <div className="flex items-center justify-center relative z-10 px-8 pt-10 bg-[#F7FBF7] rounded-tl-[48.36px] rounded-tr-[48.36px] rounded-br-[19.34px] rounded-bl-[19.34px] border-[2px] border-[#E1E1E1]">
        <img
          src={img}
          className="relative z-10 w-full h-[350px] object-cover rounded-tl-[48.36px] rounded-tr-[48.36px]"
          alt="Image 1"
        />
        <img
          src={dots}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Dots Bg"
        />
      </div>

      <div className="flex flex-col justify-center items-center md:items-start gap-4">
        <h2 className="text-[26.95px] md:text-[30.95px] text-[#1A202C] font-medium md:font-bold">
          {h2}
        </h2>
        <p className="text-sm md:text-[16.01px] text-[#4F5D77] leading-[20.02px] md:leading-[24.02px]" dangerouslySetInnerHTML={{__html:p}} >
        </p>

        {/* {show && (
          <div className="flex items-center gap-5">
            <div>
              <img src={imagePerson} alt="" />
            </div>
            <div>
              <h3 className="text-[14.72px] text-[#1A202C]">خالد حسين محمد</h3>
              <h4 className="text-[11.96px] text-[#4F5D77]">CEO</h4>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default WhatAboutContent;
