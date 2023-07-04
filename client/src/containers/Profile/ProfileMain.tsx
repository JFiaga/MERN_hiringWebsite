import { LastExperiencesCard } from "../../components";
import { FiAnchor } from "react-icons/fi";

type Props = {};

const ProfileMain = (props: Props) => {
  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10  justify-center text-black">
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-start p-4 justify-between ">
        <div className=" w-[70%]">
          <div className="">
            <h4 className="font-medium">About me</h4>
            <p className="border border-black w-[60%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam fuga quos obcaecati nemo rem iste ad magnam natus,
              necessitatibus, enim assumenda illo nesciunt porro quas. Officia,
              laudantium laborum dolorem iure molestias perferendis consectetur
              distinctio voluptatem ab corporis? Hic recusandae at ipsa quos
              asperiores eum cumque perferendis corporis consectetur aperiam,
              iure quo, illum quidem sed doloremque neque expedita blanditiis
              tenetur quis veniam quia vitae repellendus molestiae maxime!
              Officia, excepturi. Vero quas tenetur deserunt, quia culpa illum a
              ab maiores nesciunt laudantium est adipisci, unde suscipit sint!
              Fugit tempora nam minima! Accusantium quaerat minus molestias
              consequatur similique necessitatibus debitis cupiditate corrupti
              atque.
            </p>
          </div>

          <h3 className="font-medium">Last Experiences</h3>
          <div className="flex flex-col space-y-4">
            <LastExperiencesCard />
            <LastExperiencesCard />
          </div>

          <div></div>
        </div>
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
              <span className="font-thin">
               FreeCodeCamp -Certification
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

        </div>
      </div>
    </section>
  );
};

export default ProfileMain;
