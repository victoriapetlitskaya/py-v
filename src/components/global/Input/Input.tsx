import React from "react";

import { InputProps as Props } from "./Input.types";

const Input: React.FC<Props> = (props) => {
  const { label, placeholder, button } = props ?? {};

  return (
    <div className="relative w-full xl:w-[42rem] h-[7.4rem]">
      {label && (
        <label className="block mb-2 text-[1.6rem] font-medium text-gray-900">
          {label}
        </label>
      )}
      <input
        type="text"
        id="input-group-1"
        className="p-[1.2rem] border bg-white shadow-sm text-black placeholder:text-lightBlue text-[1.6rem] rounded-[1.5rem] focus:border-primary focus:outline-none block w-full pl-[2.2rem] h-full pr-[14rem]"
        placeholder={placeholder}
      />
      <div className="absolute bottom-[1rem] right-[1.2rem]">{button}</div>
    </div>
  );
};

Input.defaultProps = {};

export default Input;
