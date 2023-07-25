import { useQuery } from "@tanstack/react-query";
import { LastExperiencesCard } from "../../components";
import { FiAnchor } from "react-icons/fi";
import { newRequest } from "../../utils/newRequest";
import { Link, useParams } from "react-router-dom";
import { MdAdd, MdDelete } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

const ProfileMain = () => {
  const { id } = useParams();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUserJhire") as string
  );

  const { isLoading, data } = useQuery({
    queryKey: ["experiences"],
    queryFn: () =>
      newRequest.get(`/experiences/${id}`).then((res) => {
        const data = res.data;
        return data;
      }),
  });

  const { isLoading: isDataUserLoading, data: dataUser } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      newRequest.get(`/profile/${id}`).then((res) => {
        const dataUser = res.data;
        console.log(dataUser);
        return dataUser;
      }),
  });

  

  return isLoading && isDataUserLoading ? (
    <>
      {" "}
      <span>...</span>
    </>
  ) : (
    <section className=" flex  w-[100vw]  md:px-8 px-4 lg:pt-16 pb-10  justify-center text-black">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row items-start p-4 justify-between  space-x-10">
        <div className=" w-full xl:w-[70%] ">
          <div className=" flex flex-col w-full items-center justify-center sm:items-start mb-10">
            <h4 className="font-medium text-2xl  mb-4 ">About </h4>
            <p className="border border-black w-full  md:text-lg font-medium">
              {dataUser?.desc}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-2xl  my-4 text-center sm:text-start mb-5">
              Last Experiences{" "}
            </h4>
            {currentUser && currentUser._id === id && (
              <button className="flex bg-primary items-center my-2 space-x-1 p-2 rounded-md text-white font-medium border border-transparent hover:bg-white hover:border-primary hover:text-primary transition-all duration-200 mb-8">
                {" "}
                <span>Add an experience</span>
                <MdAdd />
              </button>
            )}
          </div>
          {data ? (
            <div className="flex flex-col space-y-4 md:space-y-8 ">
              {data.map((val: any, index: number) => (
                <div key={index} className="flex flex-col space-y-4 ">
                  <LastExperiencesCard
                    role={val.role}
                    projectName={val.projectName}
                    technologiesUsed={val.technologiesUsed}
                    projectLink={val.projectLink}
                    projectDesc={val.projectDesc}
                    experienceId={val._id}
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
              <span>Aucune experience </span>
            </>
          )}
        </div>

        {/* side */}
        {/* <div className="xl:w-[30%] bg-green-300">
          <h3>More Information</h3> */}

          {/* Skills */}

          {/* <div>
            <h5>Hard Skills</h5>
            <div className="flex justify-between  items-center flex-col md:flex-row">
              <div>
                <div>
                  <FiAnchor className="text-primary" />
                  <span>Laravel</span>
                </div>{" "}
                <div>
                  <FiAnchor className="text-primary" />
                  <span>Laravel</span>
                </div>{" "}
                <div>
                  <FiAnchor className="text-primary" />
                  <span>Laravel</span>
                </div>{" "}
                <div>
                  <FiAnchor className="text-primary" />
                  <span>Laravel</span>
                </div>
              </div>
              <div>
                <div>
                  <FiAnchor className="text-primary" />
                  <span>Laravel</span>
                </div>{" "}
                <div>
                  <FiAnchor className="text-primary" />
                  <span>Laravel</span>
                </div>{" "}
                <div>
                  <FiAnchor className="text-primary" />
                  <span>Laravel</span>
                </div>{" "}
                <div>
                  <FiAnchor className="text-primary" />
                  <span>Laravel</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5>Soft Skills</h5>
            <div className="flex justify-between  items-center flex-col md:flex-row space-x-4">
              <div>
                <div className="flex space-x-2 items-center justify-center">
                  <FiAnchor className="text-primary" />
                  <span>Perfectionniste</span>
                </div>{" "}
                <div className="flex space-x-2 items-center justify-center">
                  <FiAnchor className="text-primary" />
                  <span>Perfectionniste</span>
                </div>{" "}
                <div className="flex space-x-2 items-center justify-center">
                  <FiAnchor className="text-primary" />
                  <span>Perfectionniste</span>
                </div>{" "}
                <div className="flex space-x-2 items-center justify-center">
                  <FiAnchor className="text-primary" />
                  <span>Perfectionniste</span>
                </div>
              </div>
              <div>
                <div className="flex space-x-2 items-center justify-center">
                  <FiAnchor className="text-primary" />
                  <span>Perfectionniste</span>
                </div>{" "}
                <div className="flex space-x-2 items-center justify-center">
                  <FiAnchor className="text-primary" />
                  <span>Perfectionniste</span>
                </div>{" "}
                <div className="flex space-x-2 items-center justify-center">
                  <FiAnchor className="text-primary" />
                  <span>Perfectionniste</span>
                </div>{" "}
                <div className="flex space-x-2 items-center justify-center">
                  <FiAnchor className="text-primary" />
                  <span>Perfectionniste</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Langueage */}

          {/* <div className="flex flex-col">
            <h4>Language</h4>
            <div className="flex space-x-1">
              <span className="text-primary">French</span>
              <span>-</span>
              <span>Fluent</span>
            </div>
            <div className="flex space-x-1">
              <span className="text-primary">English</span>
              <span>-</span>
              <span>Native</span>
            </div>
          </div> */}

          {/* Education */}

          {/* <div className="flex flex-col space-y-2 my-2">
            <h4>Education</h4>
            <div className="flex flex-col ">
              <span className="font-medium">
                November 2015 - september 2016
              </span>
              <span className="font-semibold text-primary">
                Bachelor in IT and Data analysis
              </span>
              <span className="font-light">
                Massachusset Institute Of Technology
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="font-medium">
                November 2015 - september 2016
              </span>
              <span className="font-semibold text-primary">
                Bachelor in IT and Data analysis
              </span>
              <span className="font-light">
                Massachusset Institute Of Technology
              </span>
            </div>
          </div> */}

          {/* Certification */}
          {/* <div className="flex flex-col space-y-2 my-2">
            <h4 className="mt-4">Certification</h4>
            <div className="flex flex-col ">
              <span className="font-medium">
                November 2015 - september 2016
              </span>
              <span className="font-semibold text-primary">
                React Developper
              </span>
              <span className="font-thin">FreeCodeCamp -Certification</span>
            </div>
            <div className="flex flex-col ">
              <span className="font-medium">
                November 2015 - september 2016
              </span>
              <span className="font-semibold text-primary">
                Bachelor in IT and Data analysis
              </span>
              <span className="font-light">
                Massachusset Institute Of Technology
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProfileMain;
