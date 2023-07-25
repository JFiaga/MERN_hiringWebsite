import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import { newRequest } from "../utils/newRequest";
import moment from "moment";

const MessagesList = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUserJhire") as string);


  const { isLoading:isLoadingUser, data:dataUser } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/user`).then((res) => {
        const data = res.data;
        return data;
      }),
  }); 
   const { isLoading:isLoadingRecruiter, data:dataRecruiter } = useQuery({
    queryKey: ["recruiter"],
    queryFn: () =>
      newRequest.get(`/user/recruiter`).then((res) => {
        const data = res.data;
        return data;
      }),
  });

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messagesList"],
    queryFn: () =>
      newRequest.get(`/messagesList`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => newRequest.put(`/messagesList/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messagesList"] });
    },
  });

  const handleRead = (id: any) => {
    mutation.mutate(id);
  };


  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-black justify-center min-h-[100vh] ">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-start h-[80vh]  py-4  md:space-x-4 space-y-4 ">
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <>
            <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl mb-10 w-[90%]   self-start  px-4  max-w-[900px] text-center md:text-start  text-black ">
              Your <span className="text-primary">Messages</span>
            </h2>
            <div className="text-black flex w-full justify-center md:justify-start px-4 flex-col">
              {/* <div className=" flex flex-col justify-between font-medium text-xl w-[50%]">
              <span className="md:w-[20%] py-2 bg-red-400">
                Name
              </span>
              <span className="w-[45%] bg-blue-300 ">Last Message</span>
              <span className="w-[20%] bg-orange-400">Date</span>
              <span className="w-[15%] bg-red-300">Action</span>
            </div> */}

              {/* <div className="flex flex-col self-start"> */}
              {isLoadingUser ?'Loading' : dataUser && data?.map((messageData: any) => (
                <div
                  key={messageData._id}
                  className="flex w-[90%] max-w-[800px] flex-col mt-10  px-2 py-10 space-y-2 md:space-y-4 border border-primary/30 shadow-lg  rounded-lg"
                >
                  <Link
                    to={`/messagesList/${messageData.conversationId}`}
                    className="flex items-center justify-between w-full flex-wrap"
                  >
                    <span className="capitalize font-semibold">
                      {currentUser?.isEmployee
                        ? dataRecruiter.filter((val:any) => val._id === messageData.recruitorId)[0]?.firstName + dataRecruiter.filter((val:any) => val._id === messageData.recruitorId)[0]?.lastName

                        : 
                        dataUser.filter((val:any) => val._id === messageData.employeeId)[0]?.firstName +
                        dataUser.filter((val:any) => val._id === messageData.employeeId)[0]?.lastName
                      }
                    </span>

                    <span className="  self-end opacity-50 ">
                      {moment(messageData.updatedAt).fromNow()}
                    </span>
                  </Link>
                  <Link
                    to={`/messagesList/${messageData.conversationId}`}
                    className=""
                  >
                    <span className="text-primary">Last Message</span>:{" "}
                    {messageData?.lastMessage?.substring(0, 40)} {messageData?.lastMessage?.length>40 && '. . .'}
                  </Link>

                  {((currentUser?.isEmployee && !messageData.readByEmployee) ||
                    (!currentUser?.isEmployee &&
                      !messageData.readByRecruitor)) && (
                    <button
                      className="flex bg-primary items-center my-2 space-x-1 p-2 rounded-md text-white font-medium border border-transparent hover:bg-white hover:border-primary hover:text-primary transition-all duration-200 mb-8 w-fit"
                      onClick={() => handleRead(messageData.conversationId)}
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              ))}

         
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MessagesList;
