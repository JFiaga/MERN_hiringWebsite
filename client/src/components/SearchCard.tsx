import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";

import { NoAvatar } from "../assets";
import Certified from "./Certified";

type Props = {
  imgLink:string;
  firstName: string;
  lastName: string;
  specialisation: string;
  city: string;
  desc: string;
  id: string;
  isCertified: boolean;

};

const   GigsCard = ({
  firstName,
  lastName,
  specialisation,
  city,
  desc,
  id,
  isCertified,
  imgLink
}: Props) => {
  return (
    <div className="text-black  bg-white   flex flex-col items-center justify-between space-y-4 w-[90%] sm:max-w-[25%] min-w-[300px] h-[600px]shadow-sm border border-black/10 rounded-md relative   overflow-hidden px-4 ml-4 mb-4 pb-5 h-fit">
      <div className="absolute w-[100px] h-[100px] rounded-full bg-primary top-[-5%] left-[-15%] "></div>
      <div className="flex flex-col justify-center items-center space-y-4 capitalize">
        <div className="h-[150px] w-[150px] rounded-full overflow-hidden border border-primary ">
          <img
            src={imgLink || NoAvatar}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        {isCertified ? (
          <div>
            <Certified bool={true} value="Certified" />
          </div>
        ) : (
          <div>
            <Certified value="Not Certified" bool={false} />
          </div>
        )}
        <span className="font-bold text-center">
          {firstName.toLocaleLowerCase()} {lastName.toLocaleLowerCase()}
        </span>
        <span className="font-semibold text-center" >
          <span className="text-primary">{specialisation}</span> developper
        </span>
        <div className="flex justify-center items-center space-x-1 flex-wrap">
          <GrLocation className="text-xl mr-1" />
          <span>{city}</span>
        </div>
      </div>
        <span className="text-sm text-gray-700 text-center">
          {desc.substring(0, 80)} {desc.length > 80 && '. . .'}
        </span>
      <div className="flex flex-col items-center"></div>
      <div className="flex w-full text-white font-semibold ">
        <Link
          to={`/profile/${id}`}
          className="w-full bg-primary text-center capitalize rounded-md py-3 transition-all duration-500 border border-transparent hover:border-primary hover:bg-transparent hover:text-primary"
        >
          
          {" "}
          view Profile
        </Link>
      </div>
      {/* <div className='text-black/80 text-center flex space-x-3 flex-wrap w-[90%] items-center justify-center  space-y-1'>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>Laravel</button>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>node</button>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>c#</button>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>Typescript</button>
          <button className='border border-primary w-fit rounded-full px-2 capitalize cursor-default'>Vue</button> */}
      {/* </div> */}
    </div>
  );
};

export default GigsCard;
