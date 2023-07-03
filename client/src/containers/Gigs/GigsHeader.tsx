import React from "react";
import { FiHome } from "react-icons/fi";
import { laravelLogo } from "../../assets";

type Props = {};

const GigsHeader = (props: Props) => {
  return (
    <header className="text-black mt-10 w-[100vw] py-10 px-8">
      <div className="w-full max-w-[1400px] flex flex-col items-start space-y-5">
        <div className=" flex items-center justify-center space-x-4 text-black/80">
          <FiHome  className="text-primary"/>
          <span>/ BackEnd</span>
        </div>

        <div className="flex flex-col  ">
          <h3 className="font-bold text-xl md:text-2xl">Backend Developper</h3>
          <p className="text-black/70">Find the best backend developper for your project</p>
        </div>

        <div className="flex flex-col space-y-5 items-start">
          <span className="font-semibold text-lg md:text-2xl text-black/u80">Filtrer la categorie recherche</span>
          <div>
            <button className="flex items-center space-x-4 rounded-full  justify-center w-[220px]  py-2 cursor-pointer border border-black/40 hover:border-primary ">
              <div className="h-[65px] w-[65px] rounded-full overflow-hidden bg-black/10 p-2">
                <img
                  src={laravelLogo}
                  alt="laravel logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-medium">Laravel</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GigsHeader;
