import React from "react";
import { FiHome } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";


type Props = {};

const SearchHeader = (props: Props) => {

  // const { isLoading, data } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: () =>
  //     newRequest.get(`/user/`).then((res) => {
  //       const data = res.data;
  //       return data;
  //     }),
  // });
  const {id} = useParams()


  return (
    <header className="text-white mt-10 w-[100vw] py-10 px-8  flex flex-col items-center justify-center   ">
      <div className="w-full max-w-[1400px] flex flex-col space-y-2 bg-black px-8">
        <div className=" flex items-center justify-start space-x-4 text-white/80">
          <Link to="/">
            <FiHome className="text-primary  md:text-2xl" />
          </Link>
          <span className="capitalize">/ {id}</span>
        </div>

        <div className="flex flex-col space-y-2 ">
          <h3 className="font-bold text-xl md:text-3xl capitalize">{id} </h3>
          <p className="text-white/70">
            Find the best talents in {id} for your project
          </p>
        </div>

        {/* <div className="flex flex-col space-y-5 items-start">
          <span className="font-semibold text-lg md:text-2xl text-black/u80">
            Filtrer la categorie recherche
          </span>
          <div>
            <button className="flex items-center space-x-4 rounded-full  justify-center w-[220px]  py-2 cursor-pointer border border-white/40 hover:border-primary bg-white text-black">
              <div className="h-[65px] w-[65px] rounded-full overflow-hidden bg-black/10 p-2">
                <img
                  src={laravelLogo}
                  alt="laravel logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-medium">Laravel</span>
            </button>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default SearchHeader;
