import { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";



const ChooseProfile = () => {
  const [chooseLink, setChooseLink] = useState("");
  
   
  return (
    <section className=" flex  w-[100vw]   md:px-8 px-4 pt-16 pb-10 text-black justify-center ">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center h-[80vh]  py-4 space-y-4 text-center">
        <div 
        onClick={()=> setChooseLink (link => link = 'Developer')}
        className={`cursor-pointer transition-all duration-500 w-[90%] p-2 h-1/2 flex flex-col items-center justify-center  shadow-md ${chooseLink === 'Developer' ? 'bg-primary text-white' : 'bg-white text-black'}`}>
          <div>
            <BiCodeAlt className={`text-[60px] ${chooseLink === 'Developer' ? 'text-white':'text-primary'}`} />
          </div>
          <span className="text-xl md:text-2xl ">I am a developper looking for work</span>
        </div>

        <div
        onClick={()=> setChooseLink (link => link = 'Recruiter')}
        className={`cursor-pointer transition-all duration-500 w-[90%] p-2 h-1/2 flex flex-col items-center justify-center shadow-md ${chooseLink === 'Recruiter' ? 'bg-primary text-white' : 'bg-white text-black'}`}>
           <div>
            <MdOutlineManageSearch className={`text-[60px] ${chooseLink === 'Recruiter' ? 'text-white':'text-primary'}`} />
          </div>
          <span className="text-xl md:text-2xl">I am a recruiter, hiring for a work</span>
        </div>

        <Link to={`/register${chooseLink}`} >
          <button className="bg-primary w-[200px] px-2 py-2 rounded-sm text-white font-bold border border-transparent hover:border-primary hover:text-primary hover:bg-transparent transition-all duration-300">
            Go
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ChooseProfile;
