
import { CardCategory } from "../../components";
import { allCategory } from "../../utils/allCategory";

// type Props = {};

const MainPopular = () => {


  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-white justify-center ">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center">
        <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl mb-10 w-[90%]   max-w-[900px] text-center self-center text-black ">
          Popular <span className="text-primary">Services</span>
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap w-full  sm:justify-center  items-center lg:justify-center ">
          {allCategory.map((card, index) => (
            <CardCategory
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              link={`explore/${card.link}`}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPopular;
