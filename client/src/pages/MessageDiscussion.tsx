import React, { useRef, useState } from "react";
import { mainHeaderImg2 } from "../assets";
import { BiLogoTelegram } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { newRequest } from "../utils/newRequest";

type Props = {};

const MessageDiscussion = (props: Props) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") as string);
  const [targetValue, setTargetValue] = useState('')
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messageDiscussion"],
    queryFn: () =>
      newRequest.get(`/messageDiscussion/${id}`).then((res) => {
        return res.data;
      }),

  });
  const mutation = useMutation({
    mutationFn:(message) =>  newRequest.post('/messageDiscussion', message),

    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:["messageDiscussion"]})
    }
  })

  const inputElement = useRef<HTMLInputElement>(null)
  const handleSubmit = ( e:React.FormEvent) => {

    e.preventDefault();
    mutation.mutate({...data, desc:targetValue, messageDiscussionId:id})
    if( inputElement.current){
      inputElement.current.value = ''
    }
  }

  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-black justify-center ">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center bg-red-400/10 h-[80vh] border py-4 border-gray-600 md:space-x-4 space-y-4 ">
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
        {isLoading ? (
          <>loading . . .</>
        ) : (
          <div className="h-[80%] min-w-[1000px] bg-gray-400/40 flex flex-col space-y-10 overflow-y-scroll py-5">
            {data ? (
              data?.map((val: any) => (
                <div
                  key={val._id}
                  className={`w-[80%] px-4 py-2 ${
                    val.userId === currentUser._id
                      ? "bg-primary text-white self-end"
                      : "bg-white text-black"
                  } mx-5 my-4 rounded-e-xl rounded-bl-xl `}
                >
                  <p>{val.desc}</p>
                </div>
              ))
            ) : (
              <>Aucun Message</>
            )}
          </div>
        )}
        {/* Send Zone */}

        <div className="h-[10%] flex items-center justify-center text-[16px] pt-4">
          <form onSubmit={handleSubmit} className="bg-gray-200 shadow shadwo-md shadow-black/30 h-[100%] w-[80%] rounded-[20px] flex items-center">
            <div className="h-full  w-[90%] rounded-[20px] ">

              <input
                ref={inputElement}
                onChange={e => setTargetValue((e.target as HTMLInputElement).value)}
                type="text"
                className="h-full rounded-[20px] py w-full bg-transparent px-2 outline-none break-words "
              />
            </div>
            <button type="submit" className="justify-self-end text-primary text-3xl cursor-pointer ml-2">
              <BiLogoTelegram />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MessageDiscussion;
