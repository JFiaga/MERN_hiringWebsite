import { FiArrowRight, FiTag } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { newRequest } from "../utils/newRequest";
import {  useParams } from "react-router-dom";

type Props = {
  role: string;
  projectName: string;
  technologiesUsed?: string;
  projectLink: string;
  projectDesc: string;
};

const LastExperiencesCard = ({
  role,
  projectName,
  technologiesUsed,
  projectLink,
  projectDesc,
}: Props) => {

  const {id} = useParams()
  const handleClick = () => {
  try {
    newRequest.delete(`/experiences/${id}`)
    console.log('deleted')
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <div className="bg-white w-[90%] relative flex flex-col items-start justify-center shadow-md text-black rounded-sm px-2 space-y-4 py-2">
      <div className="flex space-x-1 items-center">
        <FiArrowRight />

        <h3 className="font-bold">{role}</h3>
        <span>-</span>
        <h3 className="font-bold text-primary">{projectName}</h3>
      </div>

      <div className="mr-3 flex space-x-1 items-center font-medium ">
        <FiArrowRight />
        lien du projet :
        <a
          href={projectLink}
          className="mr-3 font-semibold bg-primary text-white px-4 rounded-sm hover:bg-transparent border border-transparent hover:border-primary hover:text-primary transition-all duration-300"
        >
          {projectLink}
        </a>
      </div>

      <div className="flex flex-col items-start ">
        <div className="mr-3 flex space-x-1 items-center font-medium ">
          <FiArrowRight />
          <h4 className="mr-3 font-semibold">Technologie utilisees:</h4>

          {/* {technologiesUsed && technologiesUsed.map((technology, index) => (
            <div key={index}>
              <div className="flex justify-center items-center">
                <FiTag className="rotate-90 text-primary" />
                <span className=" ml-1">{technology}</span>
              </div>
            </div>
          ))} */}
          <div className="flex justify-center items-center">
            {/* <FiTag className="rotate-90 text-primary" /> */}
            <span className=" ml-1">{technologiesUsed}</span>
          </div>
        </div>
      </div>

      {/* Description du poste */}

      <div className="flex flex-col items-start ">
        <div className="mr-3 flex space-x-1 items-center font-semibold ">
          <FiArrowRight />
          Description du poste:
        </div>
        <div className="">{projectDesc}</div>
      </div>
 <div 
 onClick={handleClick}
 className="bg-red-500 text-[40px] text-white rounded-full absolute right-[-2%] bottom-[-5%] cursor-pointer">
  <MdDelete/>
</div>
    </div>
  );
};

export default LastExperiencesCard;
