import React from "react";
// import { Certified } from "../../components";
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BiCurrentLocation, BiLogoTelegram } from "react-icons/bi";
import { NoAvatar } from "../../assets";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { newRequest } from "../../utils/newRequest";

const ProfileHeader = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") as string);

  const { id } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      newRequest.get(`/profile/${id}`).then((res) => {
        const data = res.data;
        console.log(data);
        return data;
      }),
  });

  return isLoading ? (
    <>
      <span>Chargement en cours</span>
    </>
  ) : (
    <section className="text-black mt-10 w-[100vw] flex justify-center py-10 px-8">
      <div className="w-full max-w-[1400px] flex flex-col items-center space-y-5">
        <div className="h-[150px] w-[150px] rounded-full overflow-hidden border border-primary">
          <img
            src={data.img || NoAvatar}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>

        {!currentUser && (
          <div className="flex  text-white font-semibold justify-center  space-x-2 w-full">
            <button className=" px-4 py-2 rounded-sm font-semibold cursor-pointer transition-all duration-500 hover:bg-transparent border  border-primary text-primary flex items-center justify-center space-x-2 hover:bg-primary hover:text-white">
              <span>Download my resume</span>
              <FiDownload className="text-xl  animate-pulse" />
            </button>

            <Link
              to="/message"
              className="w-full flex items-center justify-center space-x-1 text-white font-bold bg-primary text-center capitalize rounded-md py-3 px-2 transition-all duration-500 border border-transparent hover:border-primary hover:bg-transparent hover:text-primary max-w-[300px]"
            >
              {" "}
              <span>Send Me A Message</span>
              <BiLogoTelegram className="text-xl animate-bounce" />
            </Link>
          </div>
        )}

        <div className="flex space-x-2 justify-center  items-center">
          <h3 className="font-medium text-xl md:text-2xl">
            {data.lastName} {data.firstName}{" "}
          </h3>
          <span className="font-bold text-xl">-</span>
          <h3 className="font-bold text-xl md:text-2xl text-primary">
            {data.specialisation}
          </h3>
        </div>
        <div className=" flex font-medium">
          <BiCurrentLocation className="text-4xl rounded-full text-white  bg-primary " />
          <span>{data.city}</span>
        </div>

        <div className=" flex space-x-4">
          <a
            href="https://github.com/"
            className="h-[60px] w-[60px] bg-black text-white flex items-end justify-center text-[50px] rounded-full border border-transparent hover:border-black hover:bg-white hover:text-black cursor-pointer overflow-hidden transition-all duration-500"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/"
            className="h-[60px] w-[60px] bg-blue-600 text-white flex items-end justify-center text-[50px] rounded-full border border-transparent hover:border-blue-600 hover:bg-white hover:text-blue-600 overflow-hidden cursor-pointer transition-all duration-500"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            className="h-[60px] w-[60px] bg-blue-400 text-white flex items-end justify-center text-[50px] rounded-full border border-transparent hover:border-blue-400 hover:bg-white hover:text-blue-400 overflow-hidden cursor-pointer transition-all duration-500"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
