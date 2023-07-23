import React from 'react'

type Props = {
  value:string
  bool?:boolean
}

const Certified = ({value, bool}: Props) => {
  return (
    <>
       <button className={`${bool ? 'text-[#d4af37] cursor-pointer bg-black' :'text-white bg-gray-700' }  px-4 py-1 font-bold rounded-sm w-fit `} title={`${bool ? 'Certified By Jhire':'Not Certified'}`}>{value}</button>
    </>
  )
}

export default Certified