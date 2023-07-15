import React, { useState } from "react";
import { uploadCv, uploadImg } from "../utils/upload";
import { newRequest } from "../utils/newRequest";
import {  useNavigate } from "react-router-dom";


const RegisterDeveloper = () => {

  //Verify if login
  // const currentUser = JSON.parse(localStorage.getItem("currentUser") as string);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    img: "",
    cv:"",
    desc: "",
    city: "",
    github: "",
    linkedin: "",
    twitter: "",
    specialisation:""
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    console.log(userData);
  };

  //Upload Image
  const [imgUpload, setImgUpload] = useState<string | any>();
  const [cvUpload, setCvUpload] = useState<string | any>();

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImgUpload(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const handleUploadCv = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCvUpload(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  //submit form

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const imgUrl = await uploadImg(imgUpload);
    const cvUrl = await uploadCv(cvUpload);
    try {
      await newRequest.post("/auth/register", {
        ...userData,
        img: imgUrl,
        cv: cvUrl,
      });

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSelect = (e:React.FormEvent<HTMLSelectElement>) => {
  //         console.log(e.options[e.selectedIndex].getAttribute("data-adr"))
  // }

  const specialisationTag = [
    "Frontend",
    "Backend",
    "Android",
    "IOS",
    "C#",
    "devOps",
  ];

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
            <label className="font-medium text-xl " htmlFor="lastName">
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
            <label className="font-medium text-xl " htmlFor="email">
              email
            </label>
            <input
              required
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
              required
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              className="outline-none p-2 rounded border"
            />
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="profilePic">
              Photo de profile
            </label>
            <input
              required
              type="file"
              id="profilePic"
              name="profilePic"
              className="outline-none p-2 rounded border"
              onChange={handleUploadImage}
            />
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="profilePic">
              Votre CV
            </label>
            <input
              required
              type="file"
              id="profilePic"
              name="profilePic"
              className="outline-none p-2 rounded border"
              onChange={handleUploadCv}
            />
          </div>

          <div className="flex flex-col ">
            choisissez votre specialisation

            <select
              required
              className="font-medium text-xl "
              name="specialisation"
              onChange={handleChange}
            >
              <option value=" "> </option>
              {specialisationTag.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="city">
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
            <label className="font-medium text-xl " htmlFor="github">
              lien de votre profil github*
            </label>
            <input
              required
              onChange={handleChange}
              id="github"
              className="outline-none p-2 rounded border"
              name="github"
            />
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="linkedin">
              Lien de votre profil Linkedin*
            </label>
            <input
              required
              onChange={handleChange}
              id="linkedin"
              className="outline-none p-2 rounded border"
              name="linkedin"
            />
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="twitter">
              Lien de votre profil Twitter
            </label>
            <input
              onChange={handleChange}
              id="twitter"
              className="outline-none p-2 rounded border"
              name="twitter"
            />
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-xl " htmlFor="desc">
              Description
            </label>
            <input
              required
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

export default RegisterDeveloper;
