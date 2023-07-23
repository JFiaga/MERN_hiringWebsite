
import { aiImg, backendImg, embeddedImg, frontendImg, fullstackImg, unityImg } from "../../assets/index";
import { CardPopular } from "../../components";


// type Props = {};

const MainPopular = () => {
  const cardDesc = [
    {
      title: "Backend ",
      // desc: "PHP - Symphony",
      img: backendImg,
    },
    {
      title: "Frontend ",
      img: frontendImg,
    },
    {
      title: "Fullstack ",
      img: fullstackImg
    },
    {
      title: "Embedded ",

      img: embeddedImg
    },
    {
      title: "Artificial Intelligence ",
      img: aiImg
    },
    {
      title: "Unity ",
   
      img: unityImg

    },
  ];

  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-white justify-center ">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center">
      <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl mb-10 w-[90%]   max-w-[900px] text-center self-center text-black ">
    
      Popular <span className="text-primary">Services</span>
        </h2>

      
         <div className="flex flex-col sm:flex-row flex-wrap w-full  sm:justify-center  items-center lg:justify-center ">
         {cardDesc.map((card, index) => (
            <CardPopular
              key={index}
              title={card.title}
              // desc={card.desc}
              link={"/gigs/category=backend"}
              img={card.img}
            />
          ))}
         </div>
       
      </div>
    </section>
  );
};

export default MainPopular;
