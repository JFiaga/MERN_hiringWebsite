import { CardCategory } from "../components";
import { allCategory } from "../utils/allCategory";


type Props = {};

const Explore = (props: Props) => {
  return (
    <section className=" flex  w-[100vw] min-h-[100vh]  md:px-8 px-4 pt-16 pb-10  justify-center bg-white/50">
      <div className="max-w-[1400px] w-full flex flex-col">
      <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl mb-10 w-[90%]   max-w-[900px] text-center self-center text-black ">
          Explore All <span className="text-primary">Category</span>
        </h2>
        
       
        <div className="flex flex-col sm:flex-row flex-wrap w-full  sm:justify-center  items-center lg:justify-center ">
          {allCategory.map((card, index) => (
            <CardCategory
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              link={`/explore/${card.link}`}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
