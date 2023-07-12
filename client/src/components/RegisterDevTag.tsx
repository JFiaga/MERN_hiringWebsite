import React, { useState } from "react";

type Props = {
  categoryName: string;
};

const RegisterDevTag = ({ categoryName }: Props) => {
  const [click, setClick] = useState<boolean | null>(null);
  const handleClick = () => {
    setClick((val) => !val);
  };
  return (
    <div
    onClick={handleClick}
    className={` w-[300px]  px-4 py-2 rounded-full ${click ? 'bg-primary': 'bg-black '} cursor-pointer text-white font-semibold capitalize text-center m-2`}>
      {categoryName}
    </div>
  );
};

export default RegisterDevTag;
