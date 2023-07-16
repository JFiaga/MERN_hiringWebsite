import React, { useState } from "react";
import { newRequest } from "../utils/newRequest";

const RegisterRecruiter = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    console.log(userData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await newRequest.post("/authRecruiter/registerRecruiter", {
        ...userData,
      });
      window.location.pathname = '/'
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <section className="text-black mt-10 w-[100vw] flex flex-col justify-center py-10 px-8">
      <div className="w-full max-w-[1400px] flex flex-col items-center  space-y-5">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-full overflow-hidden h-auto flex flex-col items-center space-y-2 md:space-y-4"
        >
          <div className="flex flex-col ">
            <label htmlFor="firstName" className="font-medium text-xl ">
              Nom
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="firstName"
              name="firstName"
              className="outline-none p-2 rounded border"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="lastName" className="font-medium text-xl ">
              Prenom
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="lastName"
              name="lastName"
              className="outline-none p-2 rounded border"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="font-medium text-xl ">
              Email Professionnel
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="email"
              name="email"
              className="outline-none p-2 rounded border"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="companyName" className="font-medium text-xl ">
              Nom de votre entreprise
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="companyName"
              name="companyName"
              className="outline-none p-2 rounded border"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="city" className="font-medium text-xl ">
              Ville
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="city"
              name="city"
              className="outline-none p-2 rounded border"
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="password" className="font-medium text-xl ">
              mot de passe
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="password"
              name="password"
              className="outline-none p-2 rounded border"
            />
          </div>

          <button
            type="submit"
            className="w-full max-w-[430px] bg-primary  px-2 py-2 text-center text-white rounded-md font-medium outline-none border border-transparent hover:border-primary transition-all duration-300 hover:bg-transparent hover:text-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterRecruiter;
