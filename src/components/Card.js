import React from "react";
import { Button } from "components";

const Card = (props) => {
  return (
    <div className="bg-[#F6F8FD]  flex flex-col items-center justify-center rounded-xl mt-[25px] lg:[mt-5px] w-[95%] lg:w-[30%]	h-fit">
      <div className="w-[90%] h-[55%] rounded-xl mt-[5%] bg-[#1036fc]">
        <img src={props.cardImg} alt={"pic"} />
      </div>
      <div className="flex justify- items-center w-[90%] mt-[10px] mb-[5pxpx] h-[10%] bg-transparent">
        <span className="text-lg flex pr-[5px]">{props.h_icon}</span>
        <h3 className="font-bold text-lg">{props.h_name}</h3>
      </div>

      <div className="flex flex-col justify-center items-center w-[90%] mt-[10px] mb-[5px] h-[10%] bg-transparent">
        {props.cardloopparagraph.map((item, index) => {
          return (
            <div className="flex  justify- items-center w-[90%] mt-[10px] mb-[5px] h-[10%] bg-transparent">
              <span className="text-sm flex pr-[3px]">{item.icon}</span>
              <h3 className="font-normal text-[0.75rem]	">{item.text}</h3>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center lg:justify-center items-center w-[90%] mt-[30px] mb-[5px] h-[10%] bg-transparent">
        <Button className="my-5 w-56 bg-secondary text-primaryWhite">
          View More Details
        </Button>
      </div>
    </div>
  );
};

export { Card };
