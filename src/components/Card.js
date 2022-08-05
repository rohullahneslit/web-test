import React from "react";
import { Button } from "components";

const Card = (props) => {
  return (
    <div
      key={props.key}
      className="bg-[#F6F8FD] flex flex-col items-center justify-center rounded-xl mt-[25px] lg:[mt-5px] w-[95%] lg:w-[30%]	h-fit"
    >
      <div className="w-[90%] h-[55%] rounded-xl mt-[5%] bg-[#1036fc]">
        <img src={props.cardImg} alt={"pic"} />
      </div>
      <div className="flex justify- items-center w-[90%] mt-[10px] mb-[5pxpx] h-[10%] bg-transparent">
        <span className="text-lg flex pr-[5px]">{props.h_icon}</span>
        <h3 className="font-bold text-lg">{props.h_name}</h3>
      </div>
      <div className="flex justify- items-center w-[90%] mt-[10px] mb-[5px] h-[10%] bg-transparent">
        <span className="text-lg flex pr-[5px]">{props.p1_icon}</span>
        <h3 className="font-normal text-sm">{props.p1_name}</h3>
      </div>
      <div className="flex justify- items-center w-[90%] mt-[10px] mb-[5px] h-[10%] bg-transparent">
        <span className="text-lg flex pr-[5px]">{props.p2_icon}</span>
        <h3 className="font-normal text-sm">{props.p2_name}</h3>
      </div>
      <div className="flex justify- items-center w-[90%] mt-[10px] mb-[5px] h-[10%] bg-transparent">
        <span className="text-lg flex pr-[5px]">{props.p3_icon}</span>
        <h3 className="font-normal text-sm">{props.p3_name}</h3>
      </div>

      <div className="flex justify-center lg:justify-center items-center w-[90%] mt-[30px] mb-[5px] h-[10%] bg-transparent">
        <Button
          mb="mb-[20px]"
          mt="mt-[20px]"
          minWidth="min-w-[222px]"
          color="bg-[#1036fc]"
          textColor="text-[#fff]"
        >
          View More Details
        </Button>
      </div>
    </div>
  );
};

export { Card };
