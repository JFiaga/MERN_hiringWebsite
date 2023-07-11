import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import upload from "../utils/upload";
import { newRequest } from "../utils/newRequest";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {};


const Register = (props: Props) => {
  

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

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(fileUpload);
  if (!currentUser) {
    return (
      <section className="text-black mt-10 w-[100vw] flex justify-center py-10 px-8">
        <div className="w-full max-w-[1400px] flex flex-col items-center  space-y-5">
          <form
            onSubmit={handleSubmit}
            action=""
            className="w-full overflow-hidden h-auto flex flex-col items-center space-y-2 md:space-y-4"
          >
            <div className="flex flex-col max-w-[480px]  items-start justify-start  ">
              <label className="font-medium" htmlFor="username">
                {" "}
                Nom
              </label>
              <input
                className="outline-none px-4 py-2 rounded-sm focus-within:border-primary border border-transparent transition-all duration-300 shadow-md"
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-start max-w-[430px] justify-start  ">
              <label className="font-medium" htmlFor="username">
                {" "}
                Prenom
              </label>
              <input
                className="outline-none px-4  py-2 rounded-sm focus-within:border-primary border border-transparent transition-all duration-300 shadow-md"
                type="text"
                id=""
              />
            </div>
            <div className="flex flex-col items-start max-w-[430px] justify-start  ">
              <label className="font-medium" htmlFor="email">
                {" "}
                Email
              </label>
              <input
                className="outline-none px-4  py-2 rounded-sm focus-within:border-primary border border-transparent transition-all duration-300 shadow-md"
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-start max-w-[430px] justify-start  ">
              <label className="font-medium" htmlFor="password">
                Mot de passe
              </label>
              <input
              onChange={handleChange}
                name="password"
                className="outline-none px-4  py-2 rounded-sm focus-within:border-primary border border-transparent transition-all duration-300 shadow-md"
                type="password"
                id="password"
              />
            </div>
            <div className="flex flex-col items-start max-w-[430px] justify-start   ">
              <label className="font-medium" htmlFor="checkPassword">
                Confirmer le mot de passe
              </label>
              <input
                className="outline-none px-4  py-2 rounded-sm focus-within:border-primary border border-transparent transition-all duration-300 shadow-md"
                type="text"
                id="checkPassword"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col items-start max-w-[430px] w-full justify-start cursor-pointer text-primary  break-words overflow-hidden  outline-none   py-2 rounded-sm bg-white  transition-all duration-300 shadow-md ">
              <label
                className="font-medium cursor-pointer w-[100%] text-center "
                htmlFor="profilePic"
              >
                {fileUpload ? (
                  <div className=" flex space-x-2 ">
                    <span className="text-center px-2">Fichier importe </span>
                    <FiCheck className="bg-primary text-white font-bold rounded-full w-[30px] h-[30px] " />
                  </div>
                ) : (
                  <span>Selectionner une photo de profil</span>
                )}
              </label>
              <input
                id="profilePic"
                type="file"
                className=""
                onChange={(e: any) => setFileUpload(e.target.files[0])}
              />

            </div>

            <div className="flex flex-col items-start max-w-[430px] justify-start  ">
              <label className="font-medium" htmlFor="country">
                Votre pays
              </label>
              <input
                className="outline-none px-4  py-2 rounded-sm focus-within:border-primary border border-transparent transition-all duration-300 shadow-md w-fit"
                type="text"
                id="country"
              />
            </div>

            <button className="w-full max-w-[430px] bg-primary  px-2 py-2 text-center text-white rounded-md font-medium outline-none border border-transparent hover:border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
              Submit
            </button>
          </form>
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
