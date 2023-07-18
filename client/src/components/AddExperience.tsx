import { useState } from "react";
import { ImCross } from "react-icons/im";
import { newRequest } from "../utils/newRequest";

type Props = {
  modalStatus?: boolean;
};

const AddExperience = ({ modalStatus }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  const [userData, setUserData] = useState({
    role: "",
    projectName: "",
    projectLink: "",
    technologiesUsed: "",
    projectDesc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    console.log(userData);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await newRequest.post("/experiences/createNewExperience", { ...userData });
      setModalOpen (val => val=false)
      console.log('done')
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <>
        {modalOpen &&  <div className="w-[100vw] min-h-[100vh] h-[100%] absolute ">
      <div className="w-[100vw] h-[100%] bg-red-300/50 absolute"></div>

      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center justify-center space-y-2 md:space-y-4 p-4  bg-[#f1f1f1] z-[100] absolute top-[10%] left-[50%] -translate-x-[50%] rounded-sm"
      >
        <div
          onClick={() => setModalOpen((bool) => (bool = false))}
          className="text-red-500 absolute right-[-20px] top-[-10px] text-xl rounded-full bg-black p-2 cursor-pointer"
        >
          <ImCross />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="role" className="font-medium text-xl ">
            Role {modalOpen ? "true" : "false"}
          </label>
          <input
            onChange={handleChange}
            required
            type="text"
            id="role"
            name="role"
            className="outline-none p-2 rounded border"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="projectName" className="font-medium text-xl ">
            nom du de l'entreprise ou du projet
          </label>
          <input
            onChange={handleChange}
            required
            type="text"
            id="projectName"
            name="projectName"
            className="outline-none p-2 rounded border"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="projectLink" className="font-medium text-xl ">
            Lien du site ou du github du projet
          </label>
          <input
            onChange={handleChange}
            required
            type="text"
            id="projectLink"
            name="projectLink"
            className="outline-none p-2 rounded border"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="technologiesUsed" className="font-medium text-xl ">
            Technologie Utilises ?
          </label>
          <input
            required
            onChange={handleChange}
            type="text"
            id="technologiesUsed"
            name="technologiesUsed"
            className="outline-none p-2 rounded border"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="projectDesc" className="font-medium text-xl ">
            Description du poste o
          </label>
          <input
            onChange={handleChange}
            required
            type="text"
            id="projectDesc"
            name="projectDesc"
            className="outline-none p-2 rounded border"
          />
        </div>

        <button type="submit" className="w-full max-w-[430px] bg-primary  px-2 py-2 text-center text-white rounded-md font-medium outline-none border border-transparent hover:border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
          Submit
        </button>
      </form>
    </div>}
      </>
  );
};

export default AddExperience;
