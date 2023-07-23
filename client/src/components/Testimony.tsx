import React from "react";

type Props = {

    img:string;
name:string;
companyName:string;
roleInCompany:string;
message:string;
};

const Testimony = ({img,
    name,
    companyName,
    roleInCompany,
    message}: Props) => {
  return (
    <div className="flex flex-col bg-black rounded-md   max-w-[500px]     h-[430px] w-[90%] sm:max-w-[500px]  relative overflow-hidden mx-2 mb-4 ">
             <div className="flex flex-col items-center justify-center p-8 rounded-md text-white bg-primary">
             <img
             src={img}
               alt=""
               className="w-20 h-20 mb-2 -mt-12 bg-center bg-cover object-cover rounded-full"
             />
             <p className="text-xl font-semibold ">{name} - {roleInCompany}</p>
             <p className="text-sm uppercase text-black font-medium">{companyName}</p>
           </div>
           <div className="px-4  rounded-t-lg sm:px-8  ">
             <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512"
                 fill="currentColor"
                 className="w-8 h-8 text-primary "
               >
                 <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                 <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
               </svg>
             {message}
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512"
                 fill="currentColor"
                 className="absolute right-0 w-8 h-8 text-primary"
               >
                 <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                 <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
               </svg>
             </p>
           </div>
        
         </div>
    
  );
};

export default Testimony;
