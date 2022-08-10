import React from "react";
import { Button } from "components";

const LearnMoreCard = (props) => {
  return (
    <div className="bg-[#F6F8FD] mb-5 flex flex-col items-center justify-center rounded-xl mt-6 lg:[mt-5px] w-11/12 lg:w-[20%]	h-fit">
      <div className="w-11/12 h-1/2 rounded-xl mt-4 bg-[#1036fc]">
        <img src={props.cardImg} alt="pics" />
      </div>
      <div className="flex justify-center items-center w-[90%] mt-2 mb-[5pxpx] h-[10%] bg-transparent">
        <h3 className="font-bold text-sm">{props.h_text}</h3>
      </div>
      <div className="flex justify-around w-11/12 ">
        <div className="flex justify-center items-center w-full mt-[10px] mb-[5px] h-[10%] bg-transparent">
          {props.paragraph.map((item) => {
            return (
              <div className="flex justify-center items-center w-full  mt-[10px] mb-[5px] h-[10%] bg-transparent">
                <span className="text-sm flex pr-[3px]">{item.icon}</span>
                <h3 className="font-normal text-[0.75rem]	">{item.text}</h3>
              </div>
            );
          })}

          <h3 className="font-normal text-[0.75rem]	">{props.p2_name}</h3>
        </div>
      </div>

      <div className="flex justify-center lg:justify-center items-center w-11/12 mt-5 mb-[5px] h-[10%] bg-transparent">
        <Button className="my-5 w-44 bg-secondary text-primaryWhite">
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
};

export { LearnMoreCard };
