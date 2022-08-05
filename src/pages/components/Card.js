import React from "react";
import { Button, LearnMoreCard } from "components";
import { learnMoreCard } from "data";
const Card = () => {
  return (
    <div className="bg-[#1849C6] lg:mt-[0px] mt-[15px] flex justify-center items-center flex-col w-[100%] h-fit p-10p lg:rounded-lg">
      <div className="flex justify-center flex-col items-center lg:w-[53%] w-[90%]">
        <h1 className=" text-1xl text-center tracking-wider	text-[#fff] mt-[17%] lg:text-3xl font-bold">
          {" "}
          Learn Everything About Buying, Selling, and Operating a Self Storage
        </h1>
        <div className="text-center  w-[70%] font-normal	 text-sm  lg:text-[1.2rem] leading-2 lg:leading-7 mb-[6%]  font-sans text-[#fff]	 mt-3">
          Learn about literally anything to know about Selling or Buying a Self
          Storage{" "}
        </div>
      </div>
      <div className="flex items-center flex-col  lg:flex-row justify-evenly w-full h-fit]">
        {learnMoreCard.map((item, index) => (
          <LearnMoreCard
            cardImg={item.cardImg}
            h_text={item.h_text}
            p1_icon={item.p1_icon}
            p1_name={item.p1_name}
            p2_icon={item.p2_icon}
            p2_name={item.p2_name}
            p3_icon={item.p3_icon}
            p3_name={item.p3_name}
            buttonText={item.buttonText}
            key={index}
          />
        ))}
      </div>
      <div className="flex justify-center lg:justify-center items-center w-[90%] mt-[18px] mb-[5px] h-[10%] bg-transparent">
        <Button
          mb="mb-[20px]"
          mt="mt-[20px]"
          minWidth="min-w-[170px]"
          color="bg-[#ffce31]"
          textColor="text-[#00000]"
        >
          Explore the Learning Section
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export { Card };
