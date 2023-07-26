import { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";



const ChooseProfile = () => {
  const [chooseLink, setChooseLink] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("currentUserJhire") as string)
   
 return currentUser ? (
    <Navigate to="/" />
  ) : (
    <section className=" flex  w-[100vw] h-[100vh]  md:px-8 px-4 pt-16 pb-10 text-black justify-center bg-[#f1f1f1] flex-col items-center ">

<h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl mb-10 w-[90%]   self-center  px-4  max-w-[900px] text-center md:text-center  text-black ">
              Choose your <span className="text-primary">profile</span>
            </h2>
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center h-[80vh]  py-4 space-y-4 text-center">
        <div 
        onClick={()=> setChooseLink (link => link = 'Developer')}
        className={`cursor-pointer transition-all duration-500 w-[90%] p-2 h-1/2 flex flex-col items-center justify-center max-w-[900px] shadow-md ${chooseLink === 'Developer' ? 'bg-primary text-white' : 'bg-white text-black'}`}>
          <div>
            <BiCodeAlt className={`text-[60px] ${chooseLink === 'Developer' ? 'text-white':'text-primary'}`} />
          </div>
          <span className="text-xl md:text-2xl ">I am a developper looking for work</span>
        </div>

        <div
        onClick={()=> setChooseLink (link => link = 'Recruiter')}
        className={`cursor-pointer transition-all duration-500 w-[90%] p-2 h-1/2 flex flex-col items-center justify-center max-w-[900px] shadow-md ${chooseLink === 'Recruiter' ? 'bg-primary text-white' : 'bg-white text-black'}`}>
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
