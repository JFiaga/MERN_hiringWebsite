import React, { useState } from "react";
import { mainHeaderImg2 } from "../assets";

type Props = {
  name:string,
  message:string,
  time:any
  unread:string | null,
  handleRead:(value:any)=> void,
  val?:any
};

const MessageCard = ({name,
  message,
  time,
  unread,handleRead,val}: Props) => {
  const [messageUnread, setmessageUnread] = useState<boolean>(true);


  return (
    <div
      onClick={() => {
        handleRead(val)
        setmessageUnread((val) => false)}}
      className={` cursor-pointer flex space-x-2 w-full  justify-between   px-2 my-4 border border-gray-500/10 py-4 rounded shadow-lg ${
        messageUnread ? "" : "bg-primary text-white hover:bg-primary"
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
        <span className="font-bold">{name}</span>
        <span>{message}</span>
      </div>

      <div className="flex flex-col">
        <span className="font-thin">{time}</span>
        {messageUnread && (
          <span className="px-1 text-center rounded-full bg-primary text-white">
            {unread}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageCard;
