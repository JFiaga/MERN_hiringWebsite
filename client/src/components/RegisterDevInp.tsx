import React from "react";

type Props = {
    label:string,
  inpId: string;
  inpType: string;
  onChangeFunc:( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errors:any
};

const RegisterDevInp = ({ label,inpId, inpType, onChangeFunc,errors }: Props) => {
  return (
    <div className="flex flex-col md:w-[50%] ">
      <label htmlFor={inpId} className="font-medium text-xl ">
        {label}
      </label>
      <input
        onChange={onChangeFunc}
        type={inpType}
        id={inpId}
        name={inpId}
        className="outline-none p-2 rounded border focus-within:border-primary transition-all duration-300"
      />
  <span className={`text-red-600 transition-all duration-500 ${errors?.inpId && 'scale-100'}`}>{errors?.inpId?.message} d</span> 

    </div>
  );
};

export default RegisterDevInp;
{
}
