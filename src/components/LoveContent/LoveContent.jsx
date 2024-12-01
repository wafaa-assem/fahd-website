const LoveContent = ({ h2, h3, p1, p2, className, img, size,rating }) => {
  
  return (
    // col
    <div className="w-full md:w-1/2 lg:w-1/3 p-5">
      <div className="inner bg-white p-9 shadow-xl rounded-[8.59px] border-[1.03px] border-[#E2E2E2] relative min-h-[294.78px]">
        <div className="flex flex-col gap-4 h-full">
          <h2 className="font-bold text-[15.69px] text-[#1A202C]">{h2}</h2>
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              // defaultChecked return true or false 
               defaultChecked = {rating === 1 }
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked = {rating === 2 }
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked = {rating === 3 }
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked = {rating === 4 }
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked = {rating === 5 }
            />
          </div>
          <p className="text-[10.46px] leading-[15.92px] md:leading-[20.92px]" dangerouslySetInnerHTML={{__html:p1}}>
          </p>
          <div className="mt-auto">
            <h3 className="text-[#1A202C] font-bold text-[11.31px]">{h3}</h3>
            <p className="text-[#718096] text-[8.48px] font-[Poppins]" >{p2}</p>
          </div>
        </div>
        <div className={`absolute ${className}`}>
          <img src={img} className={size} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoveContent;
