import { FiArrowRight, FiTag } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { newRequest } from "../utils/newRequest";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

type Props = {
  role: string;
  projectName: string;
  technologiesUsed?: string;
  projectLink: string;
  projectDesc: string;
  experienceId:string;
};

const LastExperiencesCard = ({
  role,
  projectName,
  technologiesUsed,
  projectLink,
  projectDesc,
  experienceId
}: Props) => {
  
  

  



  const handleDelete = () => {
          newRequest.delete(`experiences/unique/${experienceId}`)
          window.location.reload()
  }

  return (
    <div className="bg-white text-black w-full relative flex flex-col items-start justify-center  border border-black/40 shadow-lg rounded-sm px-2 space-y-4 py-2">
      <div className="flex space-x-1 items-center">
        <FiArrowRight />

        <h3 className="font-bold capitalize">{role}</h3>
        <span>-</span>
        <h3 className="font-bold text-primary">{projectName}</h3>
      </div>

      <div className="mr-3 flex flex-wrap space-x-1 items-center font-bold ">
        <FiArrowRight />
        Project Link or github repository :
        <a
          href={projectLink}
          className="mr-3 font-semibold bg-primary text-white px-4 rounded-sm hover:bg-transparent border border-transparent hover:border-primary hover:text-primary transition-all duration-300"
        >
          {projectLink}
        </a>
      </div>

      <div className="flex flex-col items-start ">
        <div className="mr-3 flex space-x-1 flex-wrap items-center font-medium ">
          <FiArrowRight />
          <h4 className="mr-3 font-bold">Technologie utilisees:</h4>

          {/* {technologiesUsed && technologiesUsed.map((technology, index) => (
            <div key={index}>
              <div className="flex justify-center items-center">
                <FiTag className="rotate-90 text-primary" />
                <span className=" ml-1">{technology}</span>
              </div>
            </div>
          ))} */}

          {/* <FiTag className="rotate-90 text-primary" /> */}
          <span className=" mx-1 text-primary">{technologiesUsed}</span>
        </div>
      </div>

      {/* Description du poste */}

      <div className="flex flex-col items-start ">
        <div className="mr-3 flex space-x-1 items-center font-bold flex-wrap">
          <FiArrowRight />
          Description du poste:
        </div>
        <p className="">
          {projectDesc} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga inventore quaerat aliquid voluptatum beatae sit obcaecati,
          tempora blanditiis error alias?
        </p>
      </div>

      <div 
      onClick={handleDelete}
      className="bg-red-500 text-[40px] text-white rounded-full  right-[-2%] bottom-[-5%] cursor-pointer self-end">
        <MdDelete />
      </div>
    </div>
  );
};

export default LastExperiencesCard;
