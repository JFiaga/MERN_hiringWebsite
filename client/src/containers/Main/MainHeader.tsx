import { FiSearch } from "react-icons/fi";
import { specialisationTag } from "../../utils/specialisationTag";
import { useState } from "react";



const MainHeader = () => {

  const [search, setSearch] = useState('')

  const [setspacilisation, setSetspacilisation] = useState(specialisationTag)

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=> {
    setSearch(val=> e.target.value)

  }

  return (
    <section className=" flex  w-[100vw] h-[900px] md:max-h-[900px] md:px-8 px-4 py-6 bg-primaryDark justify-center md:py-14">
      <div className="max-w-[1400px] h-full w-full flex flex-col items-center justify-center space-y-5 lg:space-y-10 text-white">
      
        <h1 className="text-5xl  lg:text-7xl  font-bold  text-center ">
          Find the{" "}
          <span className="text-primary">  best developers </span> <br />
          with us easily
        </h1>

        <form
          action=""
          className="flex flex-col space-y-2 md:space-y-0 md:flex-row  w-full max-w-[800px]"
        >
          <div className=" w-full flex flex-col">
          <input
            type="text"
            className="bg-white text-black p-2 md:p-4 rounded-sm outline-none md:rounded-tr-none md:rounded-br-none w-full"
            placeholder="What are you looking for"
            onChange={handleChange}
          />
            <div className="w-full bg-black flex">
               {specialisationTag.filter((item) => search==='' ? '':item.toLowerCase().includes(search.toLowerCase()) )}
            </div>
          </div>
          <button className="max-h-[70px]  bg-primary py-3 rounded-sm border border-transparent transition-all hover:bg-transparent hover:border-primary md:rounded-tl-none md:rounded-bl-none md:px-4">
            <FiSearch className="font-bold mx-auto" />
          </button>
        </form>
      <div className="hidden sm:flex space-x-2">
        <span className="font-medium"> Top <span className="text-primary">Keywords</span>:</span>
        <div className="flex items-center space-x-2">
            <span className="text-white font-semibold">Frontend -</span>
            <span className="text-white font-semibold">Backend -</span>
            <span className="text-white font-semibold">Mobile -</span>
            <span className="text-white font-semibold">Embedded</span>
        </div>
      </div>
      </div>

</section>
  );
};

export default MainHeader;
