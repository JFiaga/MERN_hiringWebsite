import { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";



const ChooseProfile = () => {
  const [chooseLink, setChooseLink] = useState("");

   
  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-black justify-center ">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center bg-red-400 h-[80vh] border py-4 border-gray-600 md:space-x-4 space-y-4 ">
        <div 
        onClick={()=> setChooseLink (link => link = 'Developer')}
        className=" bg-white w-[90%] p-2 h-1/2 flex flex-col items-center justify-center">
          <div>
            <BiCodeAlt className="text-[60px] text-primary" />
          </div>
          <span className="text-xl ">I am a developper looking for work</span>
        </div>

        <div
        onClick={()=> setChooseLink (link => link = 'Recruiter')}
        className=" bg-white w-[90%] p-2 h-1/2 flex flex-col items-center justify-center">
          <MdOutlineManageSearch  className="text-[60px] text-primary" />
          <span className="text-xl">I am a recruiter, hiring for a work</span>
        </div>

        <Link to={`/register${chooseLink}`} >
          <button className="bg-primary w-[200px] px-2 py-2 rounded-sm text-white font-bold">
            Go
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ChooseProfile;
