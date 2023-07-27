/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { NoAvatar, logoWhite, logoBlack, recruiter } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { newRequest } from "../utils/newRequest";
import { AxiosError } from "axios";
import { MdClose } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

// interface ICurrentUser {
//   id: number;
//   name: string;
//   isDevelopper: boolean;
// }
const Navbar = () => {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUserJhire") as string
  );
  const userId = currentUser?._id;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(false);

  const { pathname } = useLocation();

  const closeMenu = () => {
    setToggleMenu((toggleMenu) => (toggleMenu = false));
  };

  const openMenu = () => {
    setToggleMenu((toggleMenu) => (toggleMenu = true));
  };

  const toggleDesktopMenu = () => {
    setDesktopMenu((val) => !val);
  };

  const handleLogout = async () => {
    try {
      await newRequest.post("auth/logout");
      localStorage.removeItem("currentUserJhire");
      window.location.reload();
    } catch (error: any) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  };

  if (
    pathname === "/registerDeveloper" ||
    pathname === "/registerRecruiter" ||
    pathname === "/login" ||
    pathname === "/chooseProfile"
  ) {
    return null;
  } else {
    return (
      <nav className="bg-white sm:bg-primaryDark flex justify-center w-[100vw]  py-2">
        {/* Mobile Nav Start*/}
        <div className=" bg-white  flex justify-between w-full px-4 py-4 text-black items-center relative sm:hidden">
          {/* Burger menu if we are login */}
          {currentUser && (
            <div onClick={() => {}}>
              <FiMenu
                onClick={openMenu}
                className="cursor-pointer text-xl hover:text-gray-600"
              />
              <div
                className={`absolute min-h-[100vh]  w-full bg-black/40 transition-all  duration-100 top-0 left-0 ${
                  !toggleMenu && "hidden"
                } md:hidden`}
                onClick={() => {
                  setToggleMenu((toggleMenu) => (toggleMenu = false));
                }}
              ></div>
              <div
                className={`w-3/4 bg-white z-[10000] flex flex-col p-4 space-y-10  absolute h-[100vh] w-fulltransition-all duration-300  top-0 ${
                  toggleMenu ? "left-0" : "-left-[2000px]"
                } md:hidden`}
              >
                <div onClick={closeMenu} className=" flex flex-col space-y-4 w-full capitalize ">
                  <span onClick={closeMenu}>
                    <MdClose className="hover:text-red-600 text-2xl cursor-pointer" />
                  </span>
                  <span className="text-xl font-medium">
                    Welcome,{" "}
                    <span className="font-bold  text-primary">
                      {currentUser.lastName}
                    </span>
                  </span>
                  <Link
                    to="/"
                    className="hover:text-primary transition-all duration-500 font-semibold  "
                  >
                    Home
                  </Link>
                  {currentUser.isEmployee && (
                    <Link
                      to={`/myDashboard/${userId}`}
                      className="hover:text-primary transition-all duration-500 font-semibold"
                    >
                      My Profile
                    </Link>
                  )}
                  <Link
                    to="/messagesList"
                    className="hover:text-primary transition-all duration-500 font-semibold"
                  >
                    Messages
                  </Link>
                  <Link
                    to="/explore"
                    className="hover:text-primary transition-all duration-500 font-semibold"
                  >
                    Browse Categories
                  </Link>
                  {/* <Link to="/commingSoon" className="hover:text-primary transition-all duration-500 font-semibold">get certified</Link> */}
                  {/* <Link to="/commingSoon" className="hover:text-primary transition-all duration-500 font-semibold">Comming soon</Link> */}
                  <Link
                    onClick={handleLogout}
                    to="/"
                    className="text-primary font-medium"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          )}
          {/* Burger menu end*/}

          <Link to="/" className="h-[70px] w-[70px]">
            <img
              src={logoBlack}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>

          {/* Register and login btn if we are not login */}
          {!currentUser && (
            <div className="flex space-x-2 items-center">
              <Link
                to="/chooseProfile"
                className="w-fit px-4 py-1 rounded-md bg-primary text-white font-semibold hover:bg-transparent border border-transparent hover:border-primary hover:text-primary transition-all duration-300"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="font-medium text-lg hover:text-primary"
              >
                Login
              </Link>
            </div>
          )}

          {/* Image if we are login */}
          {currentUser && (
            <div className=" h-[50px] w-[50px] overflow-hidden  bg-white  relative  cursor-pointer  rounded-full">
              <img
                src={
                  currentUser.isEmployee
                    ? currentUser.img || NoAvatar
                    : recruiter
                }
                className={`object-cover h-full w-full ${
                  !currentUser.isEmployee && "scale-150"
                }`}
                alt=""
              />
              {currentUser.firstName}
            </div>
          )}
        </div>
        {/* Mobile Nav End*/}

        {/* Tablet And Desktop Navigation */}

        <div className="bg-primaryDark  hidden sm:flex max-w-[1400px] px-4 md:px-8 justify-between w-full py-4 text-white text-xl items-center relative">
          <div className="flex items-center justify-center">
            <Link to="/" className="h-[100px] w-[100xpx]">
              <img
                src={logoWhite}
                alt=""
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          <div className=" flex space-x-4 items-center">
            {!currentUser && (
              <div className="flex space-x-2 items-center">
                <Link
                  to="/chooseProfile"
                  className="w-fit px-4 py-1 rounded-md bg-primary text-white font-semibold hover:bg-transparent border border-transparent hover:border-primary  transition-all duration-300"
                >
                  Register
                </Link>

                <Link
                  to="/login"
                  className="font-medium text-lg hover:text-primary"
                >
                  Login
                </Link>
              </div>
            )}

            {/* IMAGE PROFILE */}
            {currentUser && (
              <div
                onClick={toggleDesktopMenu}
                className="flex flex-col items-center relative"
              >
                <div className=" h-[70px] w-[70px] border-white border overflow-hidden  rounded-full cursor-pointer">
                  <img
                    src={
                      currentUser.isEmployee
                        ? currentUser.img || NoAvatar
                        : recruiter
                    }
                    className={`object-cover h-full w-full ${
                      !currentUser.isEmployee && "scale-150"
                    }`}
                    alt=""
                  />
                </div>
                <div className="absolute top-[100%] animate-pulse">
                  {desktopMenu ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
                </div>

                {/* Dropdown Menu */}
                <div
                  className={` absolute w-[100vw] sm:max-w-[500px]  px-4 py-4 flex flex-col bg-white rounded-md items-start space-y-10  text-black z-[1000] transition-all duration-300 right-0[ ${
                    desktopMenu ? "top-[145%]" : "-top-[1000%]"
                  } text-2xl`}
                >
                  <Link
                    to="/"
                    className="hover:text-primary transition-all duration-500 font-semibold  "
                  >
                    Home
                  </Link>
                  {currentUser.isEmployee && (
                    <Link
                      to={`/myDashboard/${userId}`}
                      className="hover:text-primary transition-all duration-500 font-semibold"
                    >
                      My Profile
                    </Link>
                  )}
                  <Link
                    to="/messagesList"
                    className="hover:text-primary transition-all duration-500 font-semibold"
                  >
                    Messages
                  </Link>
                  <Link
                    to="/explore"
                    className="hover:text-primary transition-all duration-500 font-semibold"
                  >
                    Browse Categories
                  </Link>
                  {/* <Link to="/commingSoon" className="hover:text-primary transition-all duration-500 font-semibold">get certified</Link> */}
                  {/* <Link to="/commingSoon" className="hover:text-primary transition-all duration-500 font-semibold">Comming soon</Link> */}
                  <Link
                    onClick={handleLogout}
                    to="/"
                    className="text-primary font-medium"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
