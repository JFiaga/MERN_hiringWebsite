import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  // desc: string;
  link: string;
  img: string;
};

const CardPopular = ({ title, img, link }: Props) => {
  return (
    <div className="bg-black cursor-pointer h-[345px] w-[90%] sm:max-w-[500px] lg:max-w-[400px] relative overflow-hidden rounded-sm mx-2 mb-4">
        <Link to={link}>
        <img
          src={img}
          alt=""
          className="h-full w-full hover:scale-125 object-cover object-right z-20 transition-all duration-500 opacity-50"
        />

        <div className="flex flex-col absolute top-[50%] -translate-y-[50%]">
          <span className="font-bold capitalize text-lg md:text-2xl mx-4">
          {title}
          </span>
          {/* <span className=" md:text-lg mx-4 mt-2">{desc}</span> */}
          <span className=" md:text-lg mx-4 mt-2">Developer</span>
        </div>
    </Link>
      </div>
  );
};

export default CardPopular;
