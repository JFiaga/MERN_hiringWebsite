import React from "react";
import { FiCheck } from "react-icons/fi";
import { mainPresentaion } from "../../assets";

type Props = {};

const dataPresentation = [
  {
    title: "Le meilleur pour tut budge",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto magnam ab voluptate rem minima maiores. Ma",
  },
  {
    title: "Le meilleur pour tut budge",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto magnam ab voluptate rem minima maiores. Ma",
  },
  {
    title: "Le meilleur pour tut budge",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto magnam ab voluptate rem minima maiores. Ma",
  },
];

function MainPresentation({}: Props) {
  return (
    <section className="text-black w-full flex flex-col">
        <h2 className="font-semibold text-xl md:text-3xl mb-10 w-[90%]  max-w-[900px] text-center self-center">
          Decouvrez des developpeurs talentueux et{" "}
          <span className="text-primary">certifies employable</span> par des
          developpeur seniors
        </h2>
    <div className=" flex items-center">
    <div className="w-1/2 flex flex-col space-y-5">

{dataPresentation.map((data, index) => (
  <div key={index} className=" flex flex-col space-y-2 ">
    <div className="flex space-x-2 items-center">
      <FiCheck className="rounded-full text-xl text-white/80 bg-primary font-bold" />
      <span className="font-bold">{data.title}</span>
    </div>
    <p className="text-black/70 max-w-[80%]">{data.desc}</p>
  </div>
))}
</div>

<div className="w-1/2 h-[500px] overflow-hidden ">
<img
  src={mainPresentaion}
  alt=""
  className="h-full w-full object-cover  transition-[transform] duration-300 hover:scale-125"
/>
</div>
    </div>
    </section>
  );
}

export default MainPresentation;
