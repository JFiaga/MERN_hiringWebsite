import React, { useState } from "react";
import { mainHeaderImg2 } from "../assets";

type Props = {};

const MessageCard = (props: Props) => {
  const [messageUnread, setmessageUnread] = useState<boolean>(true);

  const message =
    "Besoin d'un site web sit amet, consectetur adipisicing elit. Laboriosam sapiente neque cum facere fugiat, nostrum atque dicta vitae illum culpa.";
  return (
    <div
      onClick={() => setmessageUnread((val) => false)}
      className={` cursor-pointer hover:opacity-80 flex space-x-2 w-full  justify-between px-2 my-4 border border-gray-500/10 py-2 rounded shadow-lg ${
        messageUnread ? "" : "bg-gray-400"
      }`}
    >
      <div className="h-[60px] w-[60px] rounded-full overflow-hidden border-primary border">
        <img
          src={mainHeaderImg2}
          className="object-cover h-full w-full"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Jayden Fiaga</span>
        <span>{message.substring(0, 20) + "..."}</span>
      </div>

      <div className="flex flex-col">
        <span className="font-thin">14:35</span>
        {messageUnread && (
          <span className="px-1 text-center rounded-full bg-red-600 text-white">
            2
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageCard;
