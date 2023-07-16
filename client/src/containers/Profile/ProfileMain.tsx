import { useQuery } from "@tanstack/react-query";
import { LastExperiencesCard } from "../../components";
import { FiAnchor } from "react-icons/fi";
import { newRequest } from "../../utils/newRequest";
import { Link, useParams } from "react-router-dom";

const ProfileMain = () => {
  const { id } = useParams();

  const currentUser = JSON.parse(localStorage.getItem("currentUser") as string);

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
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10  justify-center text-black">
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-start p-4 justify-between ">
        <div className=" w-[70%]">
          <div className="">
            <h4 className="font-medium"> </h4>
            <p className="border border-black w-[60%]">{dataUser?.desc}</p>
          </div>

          {data ? (
            <div>
              {data.map((val: any, index: number) => (
                <div key={index}>
                  <h3 className="font-medium">Last Experiences</h3>
                  <div className="flex flex-col space-y-4">
                    <LastExperiencesCard
                      role={val.role}
                      projectName={val.projectName}
                      technologiesUsed={val.technologiesUsed}
                      projectLink={val.projectLink}
                      desc={val.desc}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <span>Aucune experience </span>
            </>
          )}
          {currentUser && currentUser._id === id && (
            <Link
              to=""
              className="inline-block px-4 py-2 cursor-pointer bg-primary rounded-sm text-white font-bold mt-5 hover:bg-transparent border border-transparent hover:border-primary transition-all duration-300  hover:text-primary"
            >
              Ajouter une experience
            </Link>
          )}
        </div>

        {/* side */}
        <div>
          <h3>More Information</h3>

          {/* Skills */}

          <div>
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
          </div>

          {/* Langueage */}

          <div className="flex flex-col">
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
          </div>

          {/* Education */}

          <div className="flex flex-col space-y-2 my-2">
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
          </div>

          {/* Certification */}
          <div className="flex flex-col space-y-2 my-2">
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
        </div>
      </div>
    </section>
  );
};

export default ProfileMain;
