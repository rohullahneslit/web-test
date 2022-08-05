import React from "react";
import { Button } from "components";

const Background = () => {
  return (
    <div className=" bg-bgImg w-full h-full lg:px-10 p-[3.5rem] lg:p-[8rem] ">
      <div className="w-full h-full flex mt-[4rem] lg:mt-[0rem] justify-center items-center text-white">
        <div className=" flex justify-center lg:items-center  flex-col	">
          <h1 className="	 text-2xl lg:text-5xl font-extrabold">
            Self Storage Business
          </h1>
          <h1 className="	 text-2xl lg:text-5xl font-extrabold">
            Buy. Sell. Learn.
          </h1>
          <div className="text-left mb-10 lg:text-center text-sm lg:text-[1rem] font-normal font-sans mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            <br /> sagittis, aliquam non tortor blandit lobortis. blandit
          </div>
          <div className="flex pl-1 flex-col lg:flex-row justify-evenly item-evenly mt-3.5">
            <Button
              minWidth="min-w-[222px]"
              color="bg-[#ffce31]"
              textColor="text-[#000000]"
            >
              Sell Your Self Storage
            </Button>
            <Button
              mt="mt-[20px]"
              ml="lg:ml-[10px]"
              minWidth="min-w-[222px]"
              color="bg-[#fff]"
              textColor="text-[#000000]"
            >
              Active Self Storage Listings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Background };
