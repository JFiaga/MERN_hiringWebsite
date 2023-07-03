import { MouseEventHandler, useState } from "react";
import { uiImg } from "../../assets";
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

  return (
    <section className="text-black mt-10 w-[100vw] py-10 px-8">
      <h2 className="font-semibold text-xl md:text-3xl mb-10  text-center ">
        Explorer
        <span className="text-primary"> toute les categories</span>
      </h2>

      <div className="w-full max-w-[1400px] flex flex-col items-start">
        <div className="flex flex-col sm:flex-row  sm:space-x-24">
          {array.map((value, index) => (
            <Link to="/">
              <Category img={value.img} title={value.categoryTitle} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCategory;
