import { FiSearch } from "react-icons/fi";
import { mainHeaderImg1, mainHeaderImg2, mainHeaderImg3 } from "../../assets";
import { useEffect, useState } from "react";

type Props = {};

const imgCaroussel = [
  {
    imgSrc: mainHeaderImg1,
    bg: "bg-orange-700",
    value:"hover:text-orange-700"
  },
  {
    imgSrc: mainHeaderImg2,
    bg: "bg-blue-700",
    value:"hover:text-blue-700"
  },
  {
    imgSrc: mainHeaderImg3,
    bg: "bg-green-700",
    value:"hover:text-green-700"
  },
   {
    imgSrc: mainHeaderImg3,
    bg: "bg-green-700",
    value:"watherver"
  },
];
const MainHeader = (props: Props) => {
  const [index, setIndex] = useState(0);
  const isActive = true

  function reset() {
    setIndex(0);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setIndex((index) => index + 1);
      }, 4000);
    } else if (!isActive && index !== 0) {
      clearInterval(interval);
    }
    if (isActive && index === 3) {
      reset();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, index]);
  return (
<div className={`${imgCaroussel[index].bg}  flex  w-[100vw] transition-colors duration-500 overflow-hidden`}>
<div className={`pt-4 pb-12 md:pb-0 flex items-center justify-between md:pt-16 md:justify-between md:space-x-8  transition-all duration-500 max-w-[1400px] md:px-8 `}>
      <div className="flex flex-col w-[80%] px-8 md:px-0 space-y-5 md:max-w-[50%]">
        <h1 className="text-xl sm:text-2xl ">
          Recruter les meilleurs{" "}
          <span className="font-bold"> developpeurs Juniors du marche</span>,
          certifies par des senior
        </h1>

        <form
          action=""
          className="flex flex-col space-y-2 md:space-y-0 md:flex-row "
        >
          <input
            type="text"
            className="bg-white text-black p-2 rounded-sm outline-none md:rounded-tr-none md:rounded-br-none"
            placeholder="Entrez la technologie de votre choix"
          />

          <button className="  bg-primary py-3 rounded-sm border border-transparent transition-all hover:bg-transparent hover:border-primary md:rounded-tl-none md:rounded-bl-none md:px-4">
            <FiSearch className="font-bold mx-auto" />
          </button>
        </form>
      <div className="hidden md:flex space-x-5">
        <span>Les Plus demandes:</span>
        <div className="flex items-center space-x-2">
          <button className={`rounded border border-white px-2 cursor-pointer ${imgCaroussel[index].value} hover:bg-white font-bold transition-all duration-500 `}>Laravel</button>
          <button className={`rounded border border-white px-2 cursor-pointer ${imgCaroussel[index].value} hover:bg-white font-bold transition-all duration-500 `}>C#</button>
          <button className={`rounded border border-white px-2 cursor-pointer ${imgCaroussel[index].value} hover:bg-white font-bold transition-all duration-500 `}>React</button>
          <button className={`rounded border border-white px-2 cursor-pointer ${imgCaroussel[index].value} hover:bg-white font-bold transition-all duration-500 `}>Angular</button>
        </div>
      </div>
      </div>

      <div className="hidden md:block  h-[500px] w-1/2 max-h-[500px] max-w-[50%] overflow-hidden">
        <img
          src={imgCaroussel[index].imgSrc}
          alt=""
          className="h-full w-full object-contain transition-all duration-500"
        />
      </div>
    </div>
</div>
  );
};

export default MainHeader;
