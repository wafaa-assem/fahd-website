import img1 from "../../assets/Vector.png";
import img2 from "../../assets/Vector2.png";
import Heading from "../Heading/Heading";
import LoveContent from "../LoveContent/LoveContent";

const Love = ({ reviews, titleReview }) => {
  return (
    <section className="py-12">
      <div className="container font-[Almarai]">
        {/* heading */}
        <div className="flex flex-col items-center max-w-[600.52px] px-4 m-auto relative">
          <div className="bg-[#36EB32B8] w-[68.54px] h-[4.59px]" />
          <Heading
            h1={titleReview?.title}
            p={titleReview?.description}
          />
          {/* vector image */}
          <div className="absolute right-0 bottom-14 md:bottom-5">
            <img src={img1} alt="" />
          </div>
          <div className="absolute left-0 bottom-24 md:bottom-20">
            <img src={img2} alt="" />
          </div>
        </div>
        {/* content */}
        <div className="flex justify-center items-center flex-wrap mt-10">
          {reviews?.map((review, index) => (
            <LoveContent
              key={index}
              h2={review.title}
              h3={review.name}
              p1={review.comment}
              p2={review.title_job}
              img={review.image}
              rating={review.rate}
              size={"size-12 rounded-full"}
              className={"-right-8 top-[50%] -translate-y-[50%]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Love;
