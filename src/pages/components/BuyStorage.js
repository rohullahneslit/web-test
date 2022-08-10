import React from "react";

import { Button } from "components";
import { Women } from "assets";

const BuyStorage = () => {
  return (
    <div className="w-full mt-3 lg:mt-0 h-[450px]  bg-white flex justify-between lg:flex-row flex-col items-center">
      <div className="lg:w-2/5  w-full bg-slate-50 h-full relative">
        <div className=" absolute bottom-0  left-0 w-full bg-[#fff] h-fit">
          <img
            className="rounded-[10px 10px 150px 10px] w-full"
            src={Women}
            alt="pic"
          />
        </div>
      </div>
      <div className="lg:w-3/5 w-full flex justify-center h-full">
        <div className="w-3/4 h-full mt-8">
          <h1 className=" text-1xl tracking-wider	text-[#021850] lg:text-3xl font-bold">
            Do you want to buy a Self Storage?
          </h1>
          <div className="text-justify text-sm lg:text-lg leading-2 lg:leading-7 mb-8  font-sans	 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc..
          </div>
          <div className="flex lg:justify-start font-normal justify-center items-center">
            <Button className="w-56 font-semibold text-[#fff] bg-secondary">
              Buy a Self Storage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BuyStorage };
