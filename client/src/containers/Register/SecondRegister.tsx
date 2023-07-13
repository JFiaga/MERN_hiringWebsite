import { useState } from "react";
import RegisterDevTag from "../../components/RegisterDevTag";

type UserData = {
  email: string;
};

type UserFormCategory = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const SecondRegister = ({ updateFields }: UserFormCategory) => {
  const devTag = [
    { name: "frontend", id: 1 },
    { name: "backend", id: 2 },
    { name: "Mobile", id: 3 },
    { name: "embarquee", id: 4 },
    { name: "devOps", id: 5 },
    { name: "Designer Graphique", id: 6 },
    { name: "Jeux Video", id: 7 },
  ];

  const [click, setClick] = useState<boolean | null>(null);
  const handleClick = () => {
    setClick((val) => !val);
  };

  return (
    <div className="bg-white w-full max-w-[1400px] shadow-2xl  rounded-md py-4 flex flex-col px-10">
      <h2 className=" font-semibold text-2xl text-center my-4">
        Selectionne une ou plusieurs specialisation
      </h2>

      <div className="flex flex-wrap items-center justify-center">
        {devTag.map((tag, index) => (
          <div
            onClick={handleClick}
            className={` w-[300px]  px-4 py-2 rounded-full ${
              click ? "bg-primary" : "bg-black "
            } cursor-pointer text-white font-semibold capitalize text-center m-2`}
            updateFields={updateFields}
            // onChange={(e) => updateFields()}}
            key={index}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondRegister;

{
  /* <input
type="email"
required
id="email"
className=" border border-primary p-2"
value={email}
onChange={(e) => updateFields({email : e.target.value})}
/> */
}
