import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import upload from "../utils/upload";
import { newRequest } from "../utils/newRequest";
import { Navigate, useNavigate } from "react-router-dom";
import { inputData } from "../utils/inputData";
import { RegisterDevTag } from "../components";
import RegisterDevTechnology from "../components/RegisterDevTechnology";

type Props = {};

const Register = (props: Props) => {
  const useless = () => {};

  //category data
  const devTag = [
    "frontend",
    "backend",
    "full-stack",
    "Mobile",
    "desktop/logiciel",
    "data scientist",
    "IA",
    "machine learning",
    "Jeux Video",
    "embarquee",
    "devOps",
    "administrateur systeme",
    "data analyst",
    "Designer Graphique",
    "UX/UI",
  ];

  // for dynamic search oof technology tag
  const [technology, setTechnology] = useState<string>("");

  // select technology
  const handleTechnologyClick = () => {};

  //Verify if login
  const currentUser = JSON.parse(localStorage.getItem("currentUser") as string);

  const [fileUpload, setFileUpload] = useState<string | any>();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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

  if (!currentUser) {
    return (
      <section className="text-black mt-10 w-[100vw] flex flex-col justify-center py-10 px-8">
        {/* <div className="w-full max-w-[1400px] flex flex-col items-center  space-y-5">
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
        </div> */}

        <div className="bg-white w-full max-w-[1400px] shadow-2xl  rounded-md py-4 flex flex-col px-10">
          <h2 className=" font-semibold text-2xl text-center my-4">
            Selectionne une ou plusieurs specialisation
          </h2>

          <div className="flex flex-wrap items-center justify-center">
            {devTag.map((tag, index) => (
              <RegisterDevTag key={index} categoryName={tag} />
            ))}
          </div>
        </div> 
        <div className="bg-white w-full max-w-[1400px] shadow-2xl  rounded-md py-4   mx-auto px-10 ">
          <div className="flex flex-col ">
            <h2
              className=" font-semibold text-2xl text-center my-4"
              id="technology"
            >
              Entree vos technologies
            </h2>
            <input
              type="text"
              id="technology"
              className=" p-5 bg-green-50 outline-none"
              onChange={(e: any) => setTechnology(e.target?.value)}
            />
            <div className=" text-black  flex-wrap flex space-x-2 px-4">
              {devTag
                .filter((item, index) => {
                  return item.toLowerCase() === ""
                    ? ""
                    : item.toLowerCase().includes(technology);
                })
                .map((tag, index) => (
                  <>
                    {" "}
                    {!technology ? (
                      ""
                    ) : (
                      <div onClick={handleTechnologyClick}>
                        : <RegisterDevTechnology tag={tag} />
                      </div>
                    )}
                  </>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }
};

export default Register;

// replace any
