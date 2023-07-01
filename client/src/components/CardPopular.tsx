import React from 'react'

type Props = {
   title:string;
   desc:string;
   img:string;

}

const CardPopular = ({title, desc, img}:Props) => {

  return (
    <div

    className="bg-black cursor-pointer h-[345px] w-[90%] sm:max-w-[300px] relative overflow-hidden rounded-sm"
  >
    <img
      src={img}
      alt=""
      className="h-full w-full hover:scale-125 object-cover object-right z-20 transition-all duration-500 opacity-50"
    />

    <div className="flex flex-col absolute top-[50%] -translate-y-[50%]">
      <span className=" md:text-lg mx-4 mt-2">{title}</span>
      <span className="font-bold capitalize text-lg md:text-2xl mx-4">
        {desc}
      </span>
    </div>
  </div>
  )
}

export default CardPopular