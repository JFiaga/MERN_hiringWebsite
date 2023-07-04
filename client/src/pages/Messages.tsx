import React from "react";
import { MessageBoard, MessagesAside } from "../containers";

type Props = {};

const Messages = (props: Props) => {
  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10   justify-center text-black   ">
      <div className="max-w-[1400px]  w-full flex  items-start p-4 justify-between  ">
        <MessagesAside/>
        <MessageBoard/>
      </div>

    </section>
  );
};

export default Messages;
