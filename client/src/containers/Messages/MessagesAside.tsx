import React, { useState } from "react";
import { MessageCard } from "../../components";
import { FiSearch } from "react-icons/fi";

type Props = {};

const MessagesAside = (props: Props) => {
  const [translate, setTranslate] = useState(true);
  const [maskSearchIcon, setMaskSearchIcon] = useState(false);

  function maskSearchIconFunc(): void {
    setTimeout(() => {
      setMaskSearchIcon((val) => (val = true));
    }, 800);
  }
  return (
    <div className="w-[35%]  h-[75vh] overflow-y-scroll border border-b-black/30  p-4">
      <h2 className="font-bold text-xl md:text-2xl text-black ">Messages</h2>

      <div className="w-full max-w-[400px]  relative">
        <input
          onClick={() => {
            setTranslate((val) => !val);
            maskSearchIconFunc();
          }}
          placeholder="Search..."
          type="search"
          className={`outline-none border-none bg-gray-100 rounded-full px-4 py-3 w-full shadow-sm shadow-black/50 ${
            translate && "bg-gray-200/10"
          }`}
        />
        <FiSearch
          className={`absolute top-[50%] translate-y-[-50%] text-xl text-primary transition-all duration-700 ${
            translate ? "left-[50%] " : "left-[90%]"
          } ${maskSearchIcon && "hidden"}`}
        />
      </div>

      <div>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </div>
  );
};

export default MessagesAside;
