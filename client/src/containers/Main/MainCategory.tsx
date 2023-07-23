import { MouseEventHandler, useState } from "react";
import { parallaxImg, uiImg } from "../../assets";
import { Category } from "../../components";
import { Link } from "react-router-dom";

type Props = {};

const array = [
  {
    img: uiImg,
    categoryTitle: "backend",
    id: 1,
  },
  {
    img: uiImg,
    categoryTitle: "backend",
    id: 2,
  },
  {
    img: uiImg,
    categoryTitle: "backend",
    id: 3,
  },
];

const MainCategory = (props: Props) => {
  const [hover, setHover] = useState(false);

  function hoverTarget(val: boolean) {
    val = true;
    return undefined;
  }

  //mettre un parallax
  //data scientist, data analyst, web3.0, cybersecurity developer, network engineer, software engineer, database administrator, cloud system engineer, wordpress developer, Unreal engine developper
  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-white justify-center bg-primaryDark relative">
      <div className="absolute w-full h-full bg-black  top-0">
        <img
          src={parallaxImg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center z-[1000]">
        <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl mb-10 w-fit   max-w-[1200px] text-center self-center bg-white text-black py-2  ">
          Explore all
          <span className="text-primary"> categories</span>
        </h2>

        <p className="text-center md:text-xl font-bold shadow-primaryDark mb-5">
          Click in the button below to explore all categories of developpers we
          have
        </p>

        <Link
          to="/explore"
          className="text-2xl font-semibold border border-primary px-10 py-2 shadow-md shadow-primary transition-all duration-300 hover:bg-white hover:text-primary"
        >
          Explore
        </Link>
      </div>
    </section>
  );
};

export default MainCategory;
