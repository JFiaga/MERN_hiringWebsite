import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <section className="text-black mt-10 w-[100vw] flex justify-center py-10 px-8">
      <div className="w-full max-w-[1400px] flex flex-col items-center  space-y-5">
        <form
          action=""
          className="w-full overflow-hidden h-auto flex flex-col items-center space-y-2 md:space-y-4"
        >
          <div className="flex flex-col max-w-[480px]  items-start justify-start  ">
            <label className="font-medium" htmlFor="username">
              {" "}
              Nom
            </label>
            <input
              className="outline-none px-4  py-2 rounded-sm focus-within:border-primary border border-transparent transition-all duration-300 shadow-md"
              type="text"
              id="username"
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
              id="username"
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
            />
          </div>
          <div className="flex flex-col items-start max-w-[430px] justify-start  ">
            <label className="font-medium" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="outline-none px-4  py-2 rounded-sm focus-within:border-primary border border-transparent transition-all duration-300 shadow-md"
              type="text"
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
            />
          </div>

          <div className="flex flex-col items-start max-w-[430px] justify-start  break-words overflow-hidden  ">
            <label className="font-medium" htmlFor="profilePic">
              Selectionner une photo de profil
            </label>
            <input
              className="outline-none px-4  py-2 rounded-sm   transition-all duration-300 shadow-md "
              type="file"
              id="profilePic"
              max={5}
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
};

export default Register;
