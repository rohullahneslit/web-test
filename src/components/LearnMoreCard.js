import React from "react";
import { Button } from "components";

const LearnMoreCard = (props) => {
  return (
    <div
      key={props.key}
      className="bg-[#F6F8FD] mb-[5%] flex flex-col items-center justify-center rounded-xl mt-[25px] lg:[mt-5px] w-[95%] lg:w-[20%]	h-fit"
    >
      <div className="w-[90%] h-[55%] rounded-xl mt-[5%] bg-[#1036fc]">
        <img src={props.cardImg} alt="pics" />
      </div>
      <div className="flex justify-center items-center w-[90%] mt-[10px] mb-[5pxpx] h-[10%] bg-transparent">
        <h3 className="font-bold text-sm">{props.h_text}</h3>
      </div>
      <div className="flex justify-around w-[90%] ">
        <div className="flex justify-center items-center w-[33%] mt-[10px] mb-[5px] h-[10%] bg-transparent">
          <span className="text-sm flex pr-[3px]">{props.p1_icon}</span>
          <h3 className="font-normal text-[0.75rem]	">{props.p1_name}</h3>
        </div>
        <div className="flex justify-center items-center w-[33%] mt-[10px] mb-[5px] h-[10%] bg-transparent">
          <span className="text-sm flex pr-[3px]">{props.p2_icon}</span>
          <h3 className="font-normal text-[0.75rem]	">{props.p2_name}</h3>
        </div>
        <div className="flex justify-center items-center w-[33%] mt-[10px] mb-[5px] h-[10%] bg-transparent">
          <span className="text-sm flex pr-[3px]">{props.p3_icon}</span>
          <h3 className="font-normal text-[0.75rem]	">{props.p3_name}</h3>
        </div>
      </div>

      <div className="flex justify-center lg:justify-center items-center w-[90%] mt-[18px] mb-[5px] h-[10%] bg-transparent">
        <Button
          mb="mb-[20px]"
          mt="mt-[20px]"
          minWidth="min-w-[170px]"
          color="bg-[#1849C6]"
          textColor="text-[#fff]"
        >
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
};

export { LearnMoreCard };
