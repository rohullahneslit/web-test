import React from "react";
import { Button, LearnMoreCard } from "components";
import { learnMoreCard } from "data";
const Card = () => {
  return (
    <div className="bg-[#1849C6] lg:mt-0 mt-4 flex justify-center items-center flex-col w-full h-fit p-10 lg:rounded-lg">
      <div className="flex justify-center flex-col items-center lg:w-1/2 w-11/12">
        <h1 className=" text-1xl text-center tracking-wider	text-[#fff] mt-[17%] lg:text-3xl font-bold">
          Learn Everything About Buying, Selling, and Operating a Self Storage
        </h1>
        <div className="text-center  w-3/4 font-normal	 text-sm  lg:text-lg leading-2 lg:leading-7 mb-8  font-sans text-[#fff]	 mt-3">
          Learn about literally anything to know about Selling or Buying a Self
          Storage
        </div>
      </div>
      <div className="flex items-center flex-col  lg:flex-row justify-evenly w-full h-fit">
        {learnMoreCard.map((item, index) => (
          <LearnMoreCard
            cardImg={item.cardImg}
            h_text={item.h_text}
            paragraph={item.paragraph}
            buttonText={item.buttonText}
          />
        ))}
      </div>
      <div className="flex justify-center lg:justify-center items-center w-11/12 mt-5 mb-1  bg-transparent">
        <Button className="my-5 w-44 bg-primary text-black">
          Explore the Learning Section
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export { Card };
