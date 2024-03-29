import React, { useState } from "react";
import { newRequest } from "../utils/newRequest";
import { registerBg } from "../assets";
import { MdFormatAlignLeft } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { recruiterInpData } from "../utils/registerInpData";

const RegisterRecruiter = () => {
  const recruiterSchema = yup.object({
    firstName: yup.string().required("Required Field").min(3, "Too short"),
    lastName: yup.string().required("Required Field").min(3, "Too short"),
    email: yup
      .string()
      .email("You must enter an email")
      .required("Required Field"),
    password: yup
      .string()
      .required("Required Field")
      .min(8, "Passwords must contain at least 08 characters"),

    city: yup.string().required("Required Field").min(4, "Field is too short"),

    companyName: yup.string().required("Required Field"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      city: "",
      companyName: "",
    },
    resolver:yupResolver(recruiterSchema)
  });

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
  };

  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      await newRequest.post("/authRecruiter/registerRecruiter", {
        ...userData,
      });
      window.location.pathname = "/login";
    } catch (err: any) {
      console.log(err);
      if (err?.response.status && err?.response.status === 500) {
        navigate("/login");
      }
    }
  };

  const currentUser = JSON.parse(
    localStorage.getItem("currentUserJhire") as string
  );

  return currentUser ? (
    <Navigate to="/" />
  ) : (
    <section className="text-black min-h-[100vh] w-[100vw] bg-green-500 flex flex-col justify-center items-center relative  ">
      <img
        src={registerBg}
        className="w-[100vw] h-[100vh] object-cover absolute"
        alt=""
      />
      <div className="bg-white/50 w-full h-full absolute backdrop-blur-[20px]"></div>
      <div className="w-full xl:w-[95%] max-w-[1700px] rounded-lg flex  items-center  space-y-5 z-[1000] bg-white min-h-[100vh] overflow-scroll md:min-h-[70vh] md:max-h-[95vh]">
        {/* Green Block */}
        <div className="hidden xl:flex flex-col space-y-5 items-center justify-center h-full py-10 bg-primary w-[30%] 2xl:w-[40%] rounded-tl-lg rounded-bl-lg text-white ">
          <div className="flex space-x-2">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-md  flex items-center justify-center">
              <MdFormatAlignLeft className="text-[50px]" />
            </div>
            <div className="max-w-[450px]">
              <h2 className="font-semibold text-xl">Join Jhire</h2>
              <p>
                Join the site by enter your information, no email ad, no
                tracking
              </p>
            </div>
          </div>

          <div className="flex space-x-2 ">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-md  flex items-center justify-center">
              <BiSearch className="text-[50px]" />
            </div>
            <div className="max-w-[450px]">
              <h2 className="font-semibold text-xl">Find Developer</h2>
              <p>Explore our large catalog of developer and find your talent</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-md  flex items-center justify-center">
              <FaHandshake className="text-[50px]" />
            </div>
            <div className="max-w-[450px]">
              <h2 className="font-semibold text-xl">Hire Your Worker</h2>
              <p>
                Chat with developers on the platform or elsewhere and establish
                a contract
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          action=""
          className="  overflow-hidden h-[100vh] xl:h-auto flex flex-col xl:items-start items-center  space-y-2 md:space-y-5 w-full xl:w-[70%] 2xl:w-[60%] pl-4  xl:pl-[100px] pt-10 md:h-[700px] pb-5  "
        >
          <div className="text-xl sm:text-3xl md:text-[40px] font-semibold mb-[50px] ">
            Sign up as <br />
            <span className="text-primary">Recruiter </span>
            to
            <span className="text-primary"> Jhire </span>
          </div>

          {recruiterInpData.map((val: { id: any; label: string }) => (
            <div className="flex flex-col md:w-[50%] " key={val.id}>
              <label htmlFor={val.id} className="font-medium text-xl ">
                {val.label}
              </label>
              <input
                {...register(val.id)}
                onChange={handleChange}
                type={val.id}
                id={val.id}
                name={val.id}
                className="outline-none p-2 rounded border focus-within:border-primary transition-all duration-300"
              />
               {/*// @ts-ignore */}
              <span className={`text-red-600 transition-all duration-500`}>{errors[val.id]?.message}</span>
            </div>
          ))}
    
          <button
          disabled={isSubmitting}
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

export default RegisterRecruiter;

