import React from "react";
import { Button } from "components";

import { Women } from "assets";
const BuyStorage = () => {
  return (
    <div className="w-full mt:[10px] lg:mt-0 h-[450px]  bg-white flex justify-between lg:flex-row flex-col items-center">
      <div className="lg:w-[40%]  w-[100%] bg-slate-50 h-[100%] relative">
        <div className=" absolute bottom-0  left-0 w-[100%] bg-[#fff] h-fit">
          <img
            className="rounded-[10px 10px 150px 10px] w-[100%]"
            src={Women}
            alt="pic"
          />
        </div>
      </div>

      <div className="lg:w-[60%] w-[100%] flex justify-center  h-[100%]">
        <div className="w-[70%] h-[100%] mt-[30px]">
          <h1 className=" text-1xl tracking-wider	text-[#021850] lg:text-3xl font-bold">
            {" "}
            Do you want to buy a Self Storage?
          </h1>
          <div className="text-justify text-sm lg:text-[1.2rem] leading-2 lg:leading-7 mb-[6%]  font-sans	 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc..
          </div>
          <div className="flex lg:justify-start font-normal justify-center items-center">
            <Button
              mt="mt-[70px]"
              minWidth="min-w-[222px]"
              color="bg-[#1849C6]"
              textColor="text-[#fff]"
              fontWeight="font-semibold	"
            >
              Buy a Self Storage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BuyStorage };
