import { useState } from "react";
import { newRequest } from "../../utils/newRequest";
import upload from "../../utils/upload";
import { useNavigate } from "react-router-dom";
import { inputData } from "../../utils/inputData";


type UserData = {
  adress: string;
};

type UserFormAdress = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const FormAdress = ({ adress, updateFields }: UserFormAdress) => {


  const navigate = useNavigate()

  const [fileUpload, setFileUpload] = useState<string | any>();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
  });


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const imgUrl = await upload(fileUpload);
    try {
      await newRequest.post("auth/register", {
        ...userData,
        img: imgUrl,
      });

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
 
  
       <div className="w-full max-w-[1400px] flex flex-col items-center  space-y-5">
          <form
            onSubmit={handleSubmit}
            action=""
            className="w-full overflow-hidden h-auto flex flex-col items-center space-y-2 md:space-y-4"
          >
            {inputData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[480px]  items-start justify-start  "
              >
                <label className="font-medium" htmlFor={data.id}>
                  {" "}
                  {data.name}
                </label>
                <input
                  className="outline-none px-4 py-2 rounded-sm focus-within:border-primary border border-transparent transition-all duration-300 shadow-md"
                  type={data.type}
                  id={data.id}
                  name={data.id}
                  onChange={
                    data.foo
                      ? data.foo === "handleChange"
                        ? handleChange
                        : (e: any) => setFileUpload(e.target.files[0])
                      : useless
                  }
                />
              </div>
            ))}
            <button className="w-full max-w-[430px] bg-primary  px-2 py-2 text-center text-white rounded-md font-medium outline-none border border-transparent hover:border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
              Submit
            </button>
          </form>
        </div> 

  );
};

export default FormAdress;


{/* <input
required
type="text"
id="adress"
autoFocus
className=" border border-primary p-2"
value={adress}
onChange={(e) => updateFields({ adress: e.target.value })}
/> */}