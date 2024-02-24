import React from "react";

import { NewButtonProps as Props } from "./NewButton.types";

const NewButton: React.FC<Props> = (props) => {
  const { type = "primary", title, customClasses } = props;
  const { onClick} = props;

  const getClasses = () => {
    switch (type) {
      case "primary":
        return "bg-primary text-white";
      case "white":
        return "bg-white text-primary";
      case "secondary":
        return "bg-secondary text-white";
      case "outline":
        return "bg-white text-primary border-[0.1rem] border-solid border-primary";
      default:
        return "bg-primary text-white";
    }
  };

  return (
    <div
      className={`py-[1.6rem] px-[4rem] rounded-[1.2rem] text-[1.6rem] cursor-pointer hover:shadow-lg ${getClasses()} ${customClasses}`} onClick={onClick}
    >
      {title}
    </div>
  );
};

NewButton.defaultProps = {};

export default NewButton;
