import React from "react";
import { mainHeaderImg2 } from "../../assets";
import { BiLogoTelegram } from "react-icons/bi";

type Props = {};

const MessageBoard = (props: Props) => {
  return (
    <div className="w-[65%]  h-[75vh] border border-b-black/30 pb-4 ">
      {/* Header */}
      <div className="h-[10%] bg-white/10 border border-b-black/30 ">
        <div className=" flex ml-10 items-center h-full">
          <div className="h-[60px] w-[60px] rounded-full overflow-hidden border-primary border">
            <img
              src={mainHeaderImg2}
              className="object-cover h-full w-full"
              alt=""
            />
          </div>

          <span className="font-bold text-xl  ml-1">Jayden Fiaga</span>
        </div>
      </div>

      {/* Main */}
      <div className="h-[80%] bg-gray-400/40 flex flex-col space-y-10 overflow-y-scroll py-5">
        {/* Single Message */}
        <div className="w-[80%] px-4 py-2 bg-white mx-5 my-4 rounded-e-xl rounded-bl-xl ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequuntur aliquam ut praesentium quaerat iure! Sint architecto
            excepturi omnis numquam.
          </p>
        </div>
        {/* Single Message */}
        <div className="w-[80%] px-4 py-2 bg-primary  my-4  text-white font-medium self-end mx-5 rounded-s-xl rounded-br-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequuntur aliquam ut praesentium quaerat iure! Sint architecto
            excepturi omnis numquam.
          </p>
        </div>
        {/* Single Message */}
        <div className="w-[80%] px-4 py-2 bg-white mx-5 my-4 rounded-e-xl rounded-bl-xl ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequuntur aliquam ut praesentium quaerat iure! Sint architecto
            excepturi omnis numquam.
          </p>
        </div>
        {/* Single Message */}
        <div className="w-[80%] px-4 py-2 bg-primary  my-4  text-white font-medium self-end mx-5 rounded-s-xl rounded-br-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequuntur aliquam ut praesentium quaerat iure! Sint architecto
            excepturi omnis numquam.
          </p>
        </div>
        {/* Single Message */}
        <div className="w-[80%] px-4 py-2 bg-white mx-5 my-4 rounded-e-xl rounded-bl-xl ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequuntur aliquam ut praesentium quaerat iure! Sint architecto
            excepturi omnis numquam.
          </p>
        </div>
        {/* Single Message */}
        <div className="w-[80%] px-4 py-2 bg-primary  my-4  text-white font-medium self-end mx-5 rounded-s-xl rounded-br-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequuntur aliquam ut praesentium quaerat iure! Sint architecto
            excepturi omnis numquam.
          </p>
        </div>
        {/* Single Message */}
        <div className="w-[80%] px-4 py-2 bg-white mx-5 my-4 rounded-e-xl rounded-bl-xl ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequuntur aliquam ut praesentium quaerat iure! Sint architecto
            excepturi omnis numquam.
          </p>
        </div>
        {/* Single Message */}
        <div className="w-[80%] px-4 py-2 bg-primary  my-4  text-white font-medium self-end mx-5 rounded-s-xl rounded-br-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequuntur aliquam ut praesentium quaerat iure! Sint architecto
            excepturi omnis numquam.
          </p>
        </div>
      </div>

      {/* Send Zone */}

      <div className="h-[10%] flex items-center justify-center text-[16px] pt-4">
        <div className="bg-gray-200 shadow shadwo-md shadow-black/30 h-[100%] w-[80%] rounded-[20px] flex items-center">
          <div className="h-full  w-[90%] rounded-[20px] ">
            <input
              type="text"
              className="h-full rounded-[20px] py w-full bg-transparent px-2 outline-none break-words "
            />
          </div>
          <div className="justify-self-end text-primary text-3xl cursor-pointer ml-2">
            <BiLogoTelegram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;
