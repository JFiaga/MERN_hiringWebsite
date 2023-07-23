import React from "react";
import { FiCheck } from "react-icons/fi";
import { mainPresentaion } from "../../assets";



const dataPresentation = [
  {
    title: "wide range of developers",
    desc: "We have a large pool of qualified candidates: We have a database of over 10 thousands qualified candidates, giving you a wide choice of candidates.",
  },
  {
    title: "Talented developers but not only",
    desc: "Our certified developers are the best because they have the skills and knowledge to get the job done right. They have been through rigorous training and testing, and they are experts in their field.",
  },
  {
    title: "All in one",
    desc: " Instantly chat with the talent of your choice, and access all their information such as their CV or their github profile",
  },
];

function MainPresentation() {
  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-black justify-center ">
      <div className="max-w-[1400px] w-full flex flex-col  items-center justify-center">
      <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl mb-10 w-[90%]  max-w-[1200px] text-center self-center text-black ">
        Discover talented junior developers, 
          <span className="text-primary"> certified employable</span>  by senior developers
        </h2>
    <div className=" flex flex-col-reverse items-center md:flex-row ">
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
    </div>
    </section>
  );
}

export default MainPresentation;
