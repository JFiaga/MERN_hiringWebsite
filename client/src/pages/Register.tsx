import React, { useState } from "react";
import upload from "../utils/upload";
import { newRequest } from "../utils/newRequest";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  //Verify if login
  // const currentUser = JSON.parse(localStorage.getItem("currentUser") as string);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    img: "",
    city: "",
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setUserData((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });

      console.log(userData);
    };

    //Upload Image
    const [fileUpload, setFileUpload] = useState<string | any>();

  const handleUploadImage = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files){
      setFileUpload(e.target.files[0])
    }
  }

  //submit form

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const imgUrl = await upload(fileUpload);
    try {
      await newRequest.post("/auth/register", {
        ...userData,
        img: imgUrl,
      });

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSelect = (e:React.FormEvent<HTMLSelectElement>) => {
  //         console.log(e.options[e.selectedIndex].getAttribute("data-adr"))
  // }

  return (
    <section className="text-black mt-10 w-[100vw] flex flex-col justify-center py-10 px-8">
      <div className="w-full max-w-[1400px] flex flex-col items-center  space-y-5">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-full overflow-hidden h-auto flex flex-col items-center space-y-2 md:space-y-4"
        >
          <div className="flex flex-col ">
            {userData.lastName}
            <label htmlFor="firstName" className="font-medium text-xl ">
              Nom
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="firstName"
              name="firstName"
              className="outline-none p-2 rounded border"
            />
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="lastName">
              Prenom
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="lastName"
              name="lastName"
              className="outline-none p-2 rounded border"
            />
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="email">
              email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="outline-none p-2 rounded border"
            />
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="password">
              password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              className="outline-none p-2 rounded border"
            />
          </div>
          
                 <div className="flex flex-col ">
              <label  className="font-medium text-xl " htmlFor="profilePic">Photo de profile</label>
              <input  type="file" id="profilePic" name="profilePic" className="outline-none p-2 rounded border"
              onChange={handleUploadImage}
              />
            </div>

            <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="specialisation">
              Specialisation
            </label>
           {/* <select className="text-black" name="specialisation" id="specialisation">

            <option  value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Mobile">Mobile</option>
            <option value="DevOps">DevOps</option>
           </select> */}
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="city">
              Ville
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="city"
              name="city"
              className="outline-none p-2 rounded border"
            />
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="desc">
              Description
            </label>
            <input
              onChange={handleChange}
              id="desc"
              className="outline-none p-2 rounded border"
              name="desc"
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
