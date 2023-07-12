import React, { useState } from "react";

type Props = { tag: string };

const RegisterDevTechnology = ({ tag }: Props) => {

  
  return (
    <span
    className="cursor-pointer font-medium bg-primary rounded-sm p-2 mt-2 ">
      {tag}
    </span>
  );
};

export default RegisterDevTechnology;
