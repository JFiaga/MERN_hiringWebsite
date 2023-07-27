import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { newRequest } from "../utils/newRequest";
import { useParams } from "react-router-dom";
import { ModalContext } from "../pages/Profile";


type Props = {
  modalStatus?: boolean;
};

const AddExperience = (props:Props) => {

  const {id} = useParams()

  const currentUser = JSON.parse(localStorage.getItem("currentUserJhire") as string)
  
  const {modalStatus, toggleModal} = useContext(ModalContext)

  const [userData, setUserData] = useState({
    role: "",
    projectName: "",
    projectLink: "",
    technologiesUsed: "",
    projectDesc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

  
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await newRequest.post(`experiences/createNewExperience`, { ...userData });
     toggleModal()
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };



 if(currentUser && currentUser._id === id){
  return (
    <>
       {modalStatus &&  <div className="w-[100vw] min-h-[100vh] h-[100%] absolute  ">
     <div 
       onClick={toggleModal}
  
     className="w-[100vw] h-[100%] bg-black/50 absolute"></div>
  
     <form
     onSubmit={handleSubmit}
       action=""
       className="flex flex-col items-center w-[90%] max-w-[800px] justify-center space-y-2 md:space-y-4 p-4  bg-[#f1f1f1] z-[100] absolute top-[10%] left-[50%] -translate-x-[50%] rounded-sm"
     >
       <div
         onClick={toggleModal}
         className="text-red-500 absolute right-[-20px] top-[-10px] text-xl rounded-full bg-black p-2 cursor-pointer "
       >
         <ImCross />
       </div>
       <div className="flex flex-col w-[90%] max-w-[500px] ">
         <label className="font-medium text-xl  " htmlFor="role" >
           Role
         </label>
         <input
           onChange={handleChange}
           required
           type="text"
           id="role"
           name="role"
           placeholder="ex: Frontend Developper"
           className="outline-none p-2 rounded border border-transparent focus-within:border-primary transition-all duration-300"
         />
       </div>
  
       <div className="flex flex-col w-[90%] max-w-[500px] ">
         <label htmlFor="projectName" className="font-medium text-xl ">
           Project or company name
         </label>
         <input
           onChange={handleChange}
           required
           type="text"
           id="projectName"
           name="projectName"
            className="outline-none p-2 rounded border border-transparent focus-within:border-primary transition-all duration-300"
         />
       </div>
  
       <div className="flex flex-col w-[90%] max-w-[500px] ">
         <label htmlFor="projectLink" className="font-medium text-xl ">
           Project link or github repository
         </label>
         <input
           onChange={handleChange}
           required
           type="text"
           id="projectLink"
           name="projectLink"
            className="outline-none p-2 rounded border border-transparent focus-within:border-primary transition-all duration-300"
         />
       </div>
  
       <div className="flex flex-col w-[90%] max-w-[500px] ">
         <label htmlFor="technologiesUsed" className="font-medium text-xl ">
           Technologies used ?
         </label>
         <input
           required
           onChange={handleChange}
           type="text"
           id="technologiesUsed"
           name="technologiesUsed"
            className="outline-none p-2 rounded border border-transparent focus-within:border-primary transition-all duration-300"
         />
       </div>
  
       <div className="flex flex-col w-[90%] max-w-[500px] ">
         <label htmlFor="projectDesc" className="font-medium text-xl  ">
          Description of your accomplishment
         </label>
         <textarea
           onChange={handleChange}
           required
           id="projectDesc"
           name="projectDesc"
            className="outline-none p-2 rounded border border-transparent focus-within:border-primary transition-all duration-300 h-[400px]"
         />
       </div>
  
       <button type="submit" className="w-full max-w-[430px] bg-primary  px-2 py-2 text-center text-white rounded-md font-medium outline-none border border-transparent hover:border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
         Submit
       </button>
     </form>
  
   </div>}
     </>
    );
 }
 else{
  return null
 }
};

export default AddExperience;
