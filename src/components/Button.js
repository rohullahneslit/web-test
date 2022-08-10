import React from "react";

const Button = (props) => {
  const { className, color, textColor, minWidth = "min-w-fit" } = props;

  return (
    <button
      className={`lg:min-w-fit lg:mt-0 text-[14px] py-[10px] px-[10px] rounded-md hover:bg-indigo-400 duration-500 ${className}
      ${color} ${textColor} ${minWidth} ${props.mt ? props.mt : "mt-0"} ${
        props.mb ? props.mb : "mb-0"
      }
     ${props.ml ? props.ml : "ml-[0px]"}${
        props.fontWeight ? props.fontWeight : ""
      } `}
    >
      {props.children}
    </button>
  );
};

export { Button };
