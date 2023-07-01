import { Link } from "react-router-dom";
import { Saxo, laravel } from "../../assets/index";
import { CardPopular } from "../../components";

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
  ];

  return (
    <section className=" flex flex-col w-full max-w-[1400px] md:px-8 px-4 pt-16 pb-10 ">
      <h3 className="text-black text-2xl font-semibold mb-12 text-center">
        Popular services
      </h3>

      <Link to="/gigs?category=backend">
        <div className="flex space-x-2 items-center">
          {cardDesc.map((card, index) => (
            <CardPopular title={card.title} desc={card.desc} img={card.img} />
          ))}
        </div>
      </Link>
    </section>
  );
};

export default MainPopular;
