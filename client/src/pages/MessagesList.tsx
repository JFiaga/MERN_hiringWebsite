import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import { newRequest } from "../utils/newRequest";
import moment from "moment";

const MessagesList = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") as string);

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messagesList"],
    queryFn: () =>
      newRequest.get(`/messagesList`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/messagesList/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messagesList"] });
    },
  });

  const handleRead = (id: any) => {
    mutation.mutate(id);
  };

  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-black justify-center ">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center bg-red-400/10 h-[80vh] border py-4 border-gray-600 md:space-x-4 space-y-4 ">
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="text-black flex flex-col w-full px-4">
            <h1>Messages</h1>

            <div className=" flex w-full justify-between font-medium text-xl">
              <span className="w-[20%] bg-green-400">
                {currentUser.isEmployee ? "Recruitor" : "Employee"}
              </span>
              <span className="w-[45%] bg-blue-300">Last Message</span>
              <span className="w-[20%] bg-orange-400">Date</span>
              <span className="w-[15%] bg-red-300">Action</span>
            </div>

            {data.map((messageData: any) => (
              <div key={messageData._id} className="flex w-full mt-10">
                <span className="w-[20%] bg-green-400">
                  {currentUser.isEmployee
                    ? messageData.recruitorId
                    : messageData.employeeId}
                </span>
                <Link
                  to={`/messagesList/${messageData.conversationId}`}
                  className="w-[45%] bg-blue-300"
                >
                  {messageData?.lastMessage?.substring(0, 40) + ". . ."}
                </Link>
                <span className="w-[20%] bg-orange-400">
                  {moment(messageData.updatedAt).fromNow()}
                </span>

                {((currentUser.isEmployee && !messageData.readByEmployee) ||
                    (!currentUser.isEmployee && messageData.readByRecruitor)) && (
                    <button className="bg-green-400 w-[15%]" onClick={() => handleRead(messageData.conversationId)}>
                    Mark as Read
                  </button>
                )}
              </div>
            ))}

            {/* 
                  {((currentUser.isEmployee && !messageData.readByEmployee) ||
                    (!currentUser.isEmployee && !messageData.readByRecruitor)) && (
                    <button onClick={() => handleRead(messageData.conversationId)}>
                      Mark as Read
                    </button>
             
          </table> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default MessagesList;
