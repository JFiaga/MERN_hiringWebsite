import React from "react";
// import { Certified } from "../../components";
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BiCurrentLocation, BiLogoTelegram } from "react-icons/bi";
import { NoAvatar } from "../../assets";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { newRequest } from "../../utils/newRequest";
import { useContext } from "react";
import { ModalContext } from "../../pages/Profile";

const ProfileHeader = () => {
  const addHttps = (link: string): string | undefined => {
    if (!link?.includes("https://")) {
      link = `https://${link}`;
      return link;
    }
  };
  const { id } = useParams();
  const currentUser = JSON.parse(
    localStorage.getItem("currentUserJhire") as string
  );


  const createNewMessageOnMessageList = () => {
    newRequest.post('/messagesList', {target:id})
  }

 
  const sendMessageLink =`/messagesList/${id}${currentUser?._id}`

  const { isLoading, data } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      newRequest.get(`/profile/${id}`).then((res) => {
        const data = res.data;
        return data;
      }),
  });



  return isLoading ? (
    <>
      <span>Chargement en cours</span>
    </>
  ) : (
    <section className="text-black  w-[100vw] flex justify-center py-10 px-8 ">
  
      <div className="w-full max-w-[1400px] flex flex-col items-center space-y-5">
        <div className="h-[350px] w-[350px] rounded-full overflow-hidden border border-primary">
          <img
            src={data?.img || NoAvatar}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>

        {/* currentUser.isEmployee */}

        {currentUser ? (
          !(currentUser._id === id) && (
            <div className="flex  text-white font-semibold justify-center  space-x-2 w-full flex-col items-center sm:flex-row space-y-3 sm:space-y-0">
              <button
                className={`px-4 py-2 rounded-sm font-semibold   transition-all duration-500  border   border-primary text-primary flex items-center justify-center space-x-2 hover:bg-black hover:text-primary w-full sm:max-w-[320px]`}
              >
                <a href={data?.cv}>Download my resume</a>
                <FiDownload className="text-xl  animate-pulse" />
              </button>

              {!currentUser.isEmployee && (
                <Link
                onClick={createNewMessageOnMessageList}
                  to={sendMessageLink}
                  className="w-full flex items-center justify-center space-x-1 text-white font-bold bg-primary text-center capitalize rounded-md py-3 px-2 transition-all duration-500 border border-transparent hover:border-white hover:bg-primary/70 hover:text-white sm:max-w-[320px]"
                  >
                  {" "}
                  <span>Send Me A Message</span>
                  <BiLogoTelegram className="text-xl animate-bounce" />
                </Link>
              )}
            </div>
          )
        ) : (
          <div className="flex  text-white font-semibold justify-center  space-x-2 w-full  flex-col items-center sm:flex-row space-y-3 sm:space-y-0">
            <button
              className={`px-4 py-2 rounded-sm font-semibold  transition-all duration-500  border   border-primary text-primary flex items-center justify-center space-x-2 hover:bg-black hover:text-primary w-full sm:max-w-[320px]`}
            >
              <Link to={"/chooseProfile"}>Download my resume</Link>
              <FiDownload className="text-xl animate-pulse" />
            </button>

            <Link
              to="/chooseProfile"
              className="w-full flex items-center justify-center space-x-1 text-white font-bold bg-primary text-center capitalize rounded-md py-3 px-2 transition-all duration-500 border border-transparent hover:border-white hover:bg-primary/70 hover:text-white  sm:max-w-[320px]"
            >
              {" "}
              <span>Send Me A Message</span>
              <BiLogoTelegram className="text-xl animate-bounce" />
            </Link>
          </div>
        )}

        <div className="flex flex-col sm:flex-row space-x-2 justify-center  items-center capitalize">
          <h3 className="font-medium text-xl md:text-2xl">
            {(data?.lastName as string).toLocaleLowerCase()} {(data?.firstName as string).toLocaleLowerCase()}{" "}
          </h3>
          <span className="font-bold text-xl">-</span>
          <h3 className="font-bold text-xl md:text-2xl text-primary">
            {data?.specialisation}
          </h3>
        </div>
        <div className=" flex font-semibold text-xl items-center space-x-2 uppercase">
          <BiCurrentLocation className="text-4xl rounded-full text-white  bg-primary  " />
          <span>{data?.city} </span>
        </div>

        <div className=" flex space-x-4">
      
          {data.github && (
            <a
              href={addHttps(data!.github)}
              className="h-[60px] w-[60px] bg-black text-white flex items-end justify-center text-[50px] rounded-full border border-transparent hover:border-black hover:bg-white hover:text-black cursor-pointer overflow-hidden transition-all duration-500"
            >
              <FiGithub />
            </a>
          )}{" "}
          {data.linkedin && (
            <a
              href={addHttps(data!.linkedin)}
              className="h-[60px] w-[60px] bg-blue-700 text-white flex items-end justify-center text-[50px] rounded-full border border-transparent hover:border-blue-700 hover:bg-white hover:text-blue-700 cursor-pointer overflow-hidden transition-all duration-500"
            >
              <FiLinkedin />
            </a>
          )}
        
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
