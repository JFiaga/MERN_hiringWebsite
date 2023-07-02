import React, { useState } from "react";
import { uiImg } from "../assets";

type Props = {
  img: string;
  title: string;
};

const Category = ({ img, title }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover((val) => true);
      }}
      onMouseLeave={() => {
        setHover((val) => false);
      }}
      className="flex flex-col space-y-2"
    >
      <div className="h-[80px] w-[80px] overflow-hidden">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <hr
        className={`border-[2px] transition-all duration-500 ${
          hover && "border-primary"
        } `}
      />

      <span className="capitalize">{title}</span>
    </div>
  );
};

export default Category;
