import React from "react";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiTag,
  FiTarget,
} from "react-icons/fi";
import { GrFingerPrint } from "react-icons/gr";

type Props = {};

const LastExperiencesCard = (props: Props) => {
  return (
    <div className="bg-white w-[90%] flex flex-col items-start justify-center shadow-md text-black rounded-sm px-2 space-y-4 py-2">
      <div className="flex space-x-1 items-center">
      <FiArrowRight />

        <h3 className="font-bold">Developpeur Backend</h3>
        <span>-</span>
        <h3 className="font-bold text-primary">Cacao Talk</h3>
      </div>

      <div className="mr-3 flex space-x-1 items-center font-medium ">
          <FiArrowRight />
        <a href="https://github.com " className="mr-3 font-semibold bg-primary text-white px-4 rounded-sm hover:bg-transparent border border-transparent hover:border-primary hover:text-primary transition-all duration-300">Lien du projet ici </a>
        </div>

      <div className="flex flex-col items-start ">
      <div className="mr-3 flex space-x-1 items-center font-medium ">
          <FiArrowRight />
        <h4 className="mr-3 font-semibold">Technologie utilisees:</h4>
        </div>
        <div className="flex space-x-3">
          <div>
            <div className="flex justify-center items-center">
              <FiTag className="rotate-90 text-primary" />
              <span className=" ml-1">Laravel</span>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <FiTag className="rotate-90 text-primary" />
              <span className=" ml-1">Vue Js</span>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <FiTag className="rotate-90 text-primary" />
              <span className=" ml-1">React</span>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <FiTag className="rotate-90 text-primary" />
              <span className=" ml-1">PHP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description du poste */}
      <div className="flex flex-col items-start ">
        <div className="mr-3 flex space-x-1 items-center font-semibold ">
          <FiArrowRight />
          Description du poste:
          <span></span>
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          laudantium sed quasi dignissimos, saepe temporibus nulla aperiam magni
          laboriosam, atque dolor aliquid voluptatibus necessitatibus facilis
          molestias animi quam repudiandae id recusandae cupiditate veniam
          suscipit porro. Nam ad porro voluptas optio excepturi aspernatur
          minima nisi qui earum. Consequuntur quas facere quo.
        </div>
      </div>
    </div>
  );
};

export default LastExperiencesCard;
