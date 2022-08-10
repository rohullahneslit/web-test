import React from "react";

const InputType = (props) => {
  const { className, placeholder, minWidth = "min-w-fit" } = props;
  return (
    <input
      type="text"
      className={`${className} `}
      placeholder={`${placeholder}`}
    />
  );
};

export default InputType;
