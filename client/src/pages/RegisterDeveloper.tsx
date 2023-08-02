import React, { useState } from "react";
import { uploadCv, uploadImg } from "../utils/upload";
import { newRequest } from "../utils/newRequest";
import { Navigate, useNavigate } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { BiPaint } from "react-icons/bi";
import { MdFormatAlignLeft } from "react-icons/md";
import { registerBg } from "../assets";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IUser from "../interfaces/user.interface";
import { registerInpData } from "../utils/registerInpData";


const RegisterDeveloper = () => {
  //Verify if login
  const currentUser = JSON.parse(
    localStorage.getItem("currentUserJhire") as string
  );


  //control file type and size


  const userSchema = yup.object({
    firstName: yup.string().required("Required Field"),
    lastName: yup.string().required("Required Field"),
    email: yup
      .string()
      .email("You must enter an email")
      .required("Required Field"),
    password: yup
      .string()
      .required("Required Field")
      .min(8, "Passwords must contain at least 08 characters"),
    img: yup
      .mixed()
      .required("You must upload an Image"),
    cv: yup.mixed().required("You must upload a CV"),
    desc: yup
      .string()
      .required("Required Field")
      .min(100, "Your description must contain at least 200 words"),
    city: yup.string().required("Required Field").min(4, "Field is too short"),
    github: yup
      .string()
      .required("Required Field")
      .url(`Must be an absolute url`),
    linkedin: yup
      .string()
      .required("Required Field")
      .url(`Must be an absolute url`),
    specialisation: yup.string().required("Required Field"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      desc: "",
      city: "",
      github: "",
      linkedin: "",
      specialisation: "",
    },
    resolver: yupResolver(userSchema),
    // mode: "onBlur",
  });

  watch();
  console.log(getValues());
  console.log(errors)

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    img: "",
    cv: "",
    desc: "",
    city: "",
    github: "",
    linkedin: "",
    specialisation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value.toLowerCase().trim() };
    });
  };

  //Upload Image
  const [imgUpload, setImgUpload] = useState<string | any>();
  const [cvUpload, setCvUpload] = useState<string | any>();

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files)
      setImgUpload(e.target.files[0]);
    }
  };

  const handleUploadCv = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCvUpload(e.target.files[0]);
    }
  };

  //submit form
  const navigate = useNavigate();

  const submitForm: SubmitHandler<IUser> = async (event: any) => {
    const imgUrl = await uploadImg(imgUpload);
    const cvUrl = await uploadCv(cvUpload);
    try {
      await newRequest.post("/auth/register", {
        ...userData,
        img: imgUrl,
        cv: cvUrl,
      });
      navigate("/login");
    } catch (err: any) {
      console.log(err);
      if (err?.response.status && err?.response.status === 500) {
        navigate("/login");
      }
    }
  };

  return currentUser ? (
    <Navigate to="/" />
  ) : (
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
              <BiPaint className="text-[50px]" />
            </div>
            <div className="max-w-[450px]">
              <h2 className="font-semibold text-xl">Customize Your Profile</h2>
              <p>
                Add your information and your past project to have an awesome
                profile
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-md  flex items-center justify-center">
              <FaHandshake className="text-[50px]" />
            </div>
            <div className="max-w-[450px]">
              <h2 className="font-semibold text-xl">Get A Job</h2>
              <p>
                Chat with Recruiter on the platform or elsewhere and establish a
                contract
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          action=""
          className="  overflow-x-hidden min-h-[100vh] xl:h-auto flex flex-col xl:items-start items-center  space-y-2 md:space-y-5 w-full xl:w-[70%] 2xl:w-[60%] pl-4  xl:pl-[100px] pt-10 pb-5  "
        >
          <div className="text-xl sm:text-3xl md:text-[40px] font-semibold mb-[50px] ">
            Sign up as <br />
            <span className="text-primary">Developer </span>
            to
            <span className="text-primary"> Jhire </span>
          </div>

          {/* FistName LastName */}
          {registerInpData.map((val: { id: any; label: string }) => (
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
              <span className={`text-red-600 transition-all duration-500 ${errors[val.id] && 'scale-100'}`}>{errors[val.id]?.message}</span>
            </div>
          ))}

          {/* Profile Pic - CV*/}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-[90%] md:space-x-2 lg:space-x-4 md:justify-center">
            <div className="flex flex-col md:w-[50%] ">
              <label htmlFor="profilePic" className="font-medium text-xl ">
                Profile Picture
              </label>
              <label
                htmlFor="profilePic"
                className="font-medium  outline-none p-2 rounded border  focus-within:border-primary transition-all duration-300"
              >
                <span
                  className={` text-white px-2 py-1 rounded-md cursor-pointer ${
                    imgUpload ? "bg-primary" : "bg-black"
                  }`}
                >
                  {" "}
                  {imgUpload ? "Image Choosen" : "Choose an Image"}
                </span>
              </label>
              <input
              {...register('img')}
                type="file"
                id="profilePic"
                name="profilePic"
                onChange={handleUploadImage}
                className="hidden"
              />
              <span className={`text-red-600 transition-all duration-500 ${errors?.img && 'scale-100'}`}>{errors?.img?.message}</span>

            </div>

            <div className="flex flex-col md:w-[50%] ">
              <label htmlFor="cvFile" className="font-medium text-xl ">
                CV
              </label>
              <label
                htmlFor="cvFile"
                className="font-medium  outline-none p-2 rounded border  focus-within:border-primary transition-all duration-300"
              >
                <span
                  className={` text-white px-2 py-1 rounded-md cursor-pointer ${
                    cvUpload ? "bg-primary" : "bg-black"
                  }`}
                >
                  {" "}
                  {cvUpload ? "CV uploaded" : "Upload your CV"}
                </span>
              </label>
              <input
                 {...register('cv')}
                type="file"
                id="cvFile"
                name="cvFile"
                onChange={handleUploadCv}
                className="hidden"
              />
              <span className={`text-red-600 transition-all duration-500 ${errors?.cv && 'scale-100'}`}>{errors?.cv?.message}</span>

            </div>
          </div>

          {/* About */}
          <div className="flex flex-col space-y-4 md:space-y-0 w-[90%] md:space-x-2 lg:space-x-4 md:justify-center">
            <label htmlFor="desc" className="font-medium text-xl ">
              {`About (Be Explicit)`}
            </label>
            <textarea
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
