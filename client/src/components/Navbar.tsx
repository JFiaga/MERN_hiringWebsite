/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

type Props = {};

const Navbar = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="">
      {/* Mobile Nav */}
      <div className=" bg-white  flex justify-between w-full p-2 py-4 text-black items-center relative sm:hidden">
        <div>
          <FiMenu
            onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}
            className="cursor-pointer"
          />
        </div>

        <div>
          <span className="cursor-pointer">logo</span>
        </div>

        <span className="cursor-pointer">Join</span>

        {/* Sidebar */}
        <div
          className={`absolute h-[100vh] w-full bg-black/40 transition-all  duration-100 top-0 left-0 ${
            !toggleMenu && "hidden"
          } md:hidden`}
          onClick={(e) => {
            setToggleMenu((toggleMenu) => (toggleMenu = false));
          }}
        ></div>
        <div
          className={`w-3/4 bg-white flex flex-col p-4 space-y-10  absolute h-[100vh] w-fulltransition-all duration-300  top-0 ${
            toggleMenu ? "left-0" : "-left-[2000px]"
          } md:hidden`}
        >
          <button className="bg-g w-fit px-10 py-2 rounded-md bg-primary text-white font-semibold hover:bg-transparent border hover:border-primary hover:text-primary transition-all duration-300">
            Join Us
          </button>
          <div className=" flex flex-col space-y-4 w-full ">
            <a href="#">Sign In</a>
            <a href="#">Browse Categories</a>
            <a href="#">Explore</a>
            <a href="#" className="text-primary font-semibold">
              Jhire Business
            </a>
          </div>

          <div className="flex flex-col  space-y-4">
            <span className="font-bold">
              General <hr className="w-3/4  bg-black/30 h-[2px]" />
            </span>
            <a href="#">Home</a>
            <a href="#">English</a>
            <a href="#">$ USD</a>
            <a href="#"> Open In App</a>
          </div>
        </div>
      </div>

      {/* Tablet Navigation */}

      <div className="bg-primaryDark flex justify-between w-full p-4 text-white items-center relative">
        <div className="flex items-center justify-center">
          <FiMenu className="mr-4" />
          Logo
        </div>

        <div className=" flex space-x-4">
          <div className="space-x-4 hidden md:flex">
            <a href="#">Business</a>
            <a href="#">Explore</a>
            <a href="#">Become a seller</a>
          </div>
          <div>
            <a href="#" className="mr-4">
              {" "}
              Sign In
            </a>
            <a href="#" className="border border-white px-4 py-1 rounded-sm">
              <button>Join</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
