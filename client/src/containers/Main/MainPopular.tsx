import { Link } from "react-router-dom";
import { Saxo, laravel } from "../../assets/index";
import { CardPopular } from "../../components";
import Slider from "infinite-react-carousel";


// type Props = {};

const MainPopular = () => {
  const cardDesc = [
    {
      title: "Backend developper ",
      desc: "PHP - Symphony",
      img: Saxo,
    },
    {
      title: "Backend developper ",
      desc: "PHP - Laravel",
      img: laravel,
    },
    {
      title: "Backend developper ",
      desc: "PHP - Symphony",
      img: Saxo,
    },
    {
      title: "Backend developper ",
      desc: "PHP - Laravel",
      img: laravel,
    },
    {
      title: "Backend developper ",
      desc: "PHP - Symphony",
      img: Saxo,
    },
    {
      title: "Backend developper ",
      desc: "PHP - Laravel",
      img: laravel,
    },
  ];

  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-white justify-center ">
      
      <div className="max-w-[1400px] w-full flex flex-col items-center">

        
      <h3 className="text-black text-2xl font-semibold mb-12 text-center">
        Popular services
      </h3>

          
      <Slider
      
      slidesToShow={5} arrowScroll={5} className={`carousel relative w-full max-w-[1400px]`}>
        
        {cardDesc.map((card, index) => (
       
            <CardPopular
            key={index}
              title={card.title}
              desc={card.desc}
              link={"/gigs?category=backend"}
              img={card.img}
            />
          
        ))}
      </Slider>
      </div>

    </section>
  );
};

export default MainPopular;
