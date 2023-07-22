import React, { useState } from "react";
import { uploadCv, uploadImg } from "../utils/upload";
import { newRequest } from "../utils/newRequest";
import {  useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { BiPaint, BiSearch, BiSolidCustomize } from "react-icons/bi";
import { MdFormatAlignLeft, MdOutlineDashboardCustomize } from "react-icons/md";
import { registerBg } from "../assets";
import { AiOutlineCustomerService } from "react-icons/ai";


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
  const navigate = useNavigate();
  
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

    <section className="text-black min-h-[100vh] w-[100vw] bg-green-500 flex flex-col justify-center items-center relative  ">
    <img
      src={registerBg}
      className="w-[100vw] min-h-[100vh] object-cover absolute"
      alt=""
    />
    <div className="bg-white/50 w-full h-full absolute backdrop-blur-[20px]"></div>
    <div className="w-full xl:w-[95%] max-w-[1700px] rounded-lg flex  items-center  space-y-5 z-[1000] bg-white min-h-[100vh]">

      {/* Green Block */}
      <div className="hidden xl:flex flex-col space-y-5 items-center justify-center 2xl:space-y-[100px] min-h-[120vh] h-full bg-primary w-[30%] 2xl:w-[40%] rounded-tl-lg rounded-bl-lg text-white">
        <div className="flex space-x-2">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-md  flex items-center justify-center">
            <MdFormatAlignLeft className="text-[50px]"/>
          </div>
            <div className="max-w-[450px]">
              <h2 className="font-semibold text-xl">Join Jhire</h2>
              <p>Join the site by enter your information, no email ad, no tracking</p>
            </div>
        </div>

        <div className="flex space-x-2 ">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-md  flex items-center justify-center">
            <BiPaint className="text-[50px]"/>
          </div>
            <div className="max-w-[450px]">
              <h2 className="font-semibold text-xl">Custom Your Profile</h2>
              <p>Add your information and your past project to have an awesome profile</p>
            </div>
        </div>

        <div className="flex space-x-2">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-md  flex items-center justify-center">
            <FaHandshake className="text-[50px]"/>
          </div>
            <div className="max-w-[450px]">
              <h2 className="font-semibold text-xl">Get A Job</h2>
              <p>Chat with Recruiter on the platform  or elsewhere and establish a contract</p>
            </div>
        </div>

      
      </div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="  overflow-x-hidden min-h-[100vh] xl:h-auto flex flex-col xl:items-start items-center  space-y-2 md:space-y-5 w-full xl:w-[70%] 2xl:w-[60%] pl-4  xl:pl-[100px] pt-10 pb-5  "
      >
        <div className="text-xl sm:text-3xl md:text-[40px] font-semibold mb-[50px] ">
          Sign up as <br />
          <span className="text-primary">Recruiter </span>
          to
          <span className="text-primary"> Jhire </span>
        </div>

        {/* FistName LastName */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-[90%] md:space-x-2 lg:space-x-4 md:justify-center">
        <div className="flex flex-col md:w-[50%] ">
            <label htmlFor="firstName" className="font-medium text-xl ">
              First Name
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="firstName"
              name="firstName"
              className="outline-none p-2 rounded border focus-within:border-primary transition-all duration-300"
            />
          </div>
          <div className="flex flex-col md:w-[50%] ">
            <label htmlFor="lastName" className="font-medium text-xl ">
              Last Name
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="lastName"
              name="lastName"
              className="outline-none p-2 rounded border max-w-[100%]  focus-within:border-primary transition-all duration-300"
            />
          </div>
        </div>

        {/*  Email - Specialisation*/}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-[90%] md:space-x-2 lg:space-x-4 md:justify-center">
          <div className="flex flex-col md:w-[50%] ">
            <label htmlFor="email" className="font-medium text-xl ">
              Email
            </label>
            <input
              required
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="outline-none p-2 rounded border  focus-within:border-primary transition-all duration-300"
            />
          </div>
          <div className="flex flex-col md:w-[50%] ">
            <span  className="font-medium text-xl ">
              Specialisation
            </span>
            <select
              className="font-medium text-xl w-full h-[50px] rounded outline-none"
              name="specialisation"
              onChange={handleChange}
            >
              <option value=""/> 
              {specialisationTag.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* City - Password */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-[90%] md:space-x-2 lg:space-x-4 md:justify-center">
          <div className="flex flex-col md:w-[50%] ">
            <label htmlFor="city" className="font-medium text-xl ">
              City
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="city"
              name="city"
              className="outline-none p-2 rounded border  focus-within:border-primary transition-all duration-300"
            />
          </div>

          <div className="flex flex-col md:w-[50%] ">
            <label htmlFor="password" className="font-medium text-xl ">
              Password
            </label>
            <input
              required
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              className="outline-none p-2 rounded border  focus-within:border-primary transition-all duration-300"
            />
          </div>
        </div>


 
        {/* Profile Pic - CV*/}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-[90%] md:space-x-2 lg:space-x-4 md:justify-center">
          <div className="flex flex-col md:w-[50%] ">
          <label htmlFor="profilePic" className="font-medium text-xl ">Profile Picture</label>
            <label htmlFor="profilePic" className="font-medium  outline-none p-2 rounded border  focus-within:border-primary transition-all duration-300">
         <span className="bg-primary text-white px-2 py-1 rounded-md cursor-pointer"> Choose an Image</span>
          </label>
            <input
             required
              type="file"
              id="profilePic"
              name="profilePic"
              onChange={handleUploadImage}
              className="hidden"
            />
          </div>

          <div className="flex flex-col md:w-[50%] ">
          <label htmlFor="cvFile" className="font-medium text-xl ">CV</label>
            <label htmlFor="cvFile" className="font-medium  outline-none p-2 rounded border  focus-within:border-primary transition-all duration-300">
         <span className="bg-primary text-white px-2 py-1 rounded-md cursor-pointer"> Upload Your CV</span>
          </label>
            <input
             required
              type="file"
              id="cvFile"
              name="cvFile"
              onChange={handleUploadCv}
              className="hidden"
            />
          </div>
        </div>   
        
         {/* linkedin - Github */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-[90%] md:space-x-2 lg:space-x-4 md:justify-center">
         
        <div className="flex flex-col md:w-[50%] ">
            <label htmlFor="linkedin" className="font-medium text-xl ">
              Linkedin
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              id="linkedin"
              name="linkedin"
              className="outline-none p-2 rounded border  focus-within:border-primary transition-all duration-300"
            />
          </div>
       <div className="flex flex-col md:w-[50%] ">
          <label htmlFor="github" className="font-medium text-xl ">
         Github Link
             </label>
             <input
               required
               type="url"
               onChange={handleChange}
               id="github"
               name="github"
              className="outline-none p-2 rounded border  focus-within:border-primary transition-all duration-300"
            />
          </div>
        </div>

         {/* About */}
  <div className="flex flex-col space-y-4 md:space-y-0 w-[90%] md:space-x-2 lg:space-x-4 md:justify-center">

            <label htmlFor="desc" className="font-medium text-xl ">
              {`About (Be Explicit)`}
            </label>
            <textarea
              required
              onChange={handleChange}
         
              id="desc"
              name="desc"
              className="outline-none p-2 rounded border mi  focus-within:border-primary transition-all duration-300 min-h-[400px] "
            ></textarea>
          </div>

        <button
          type="submit"
          className="w-full max-w-[300px] self-center bg-primary py-2 text-center text-white rounded-md font-medium outline-none border border-transparent hover:border-primary transition-all duration-300 hover:bg-transparent hover:text-primary mb-[20px]"
        >
          Submit
        </button>
      </form>
    </div>
  </section>

  );
};

export default RegisterDeveloper;
