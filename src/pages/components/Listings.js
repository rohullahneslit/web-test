import React from "react";
import { Button } from "components";
import { StorageBoy } from "assets";
const Listings = () => {
  return (
    <div className="w-full lg:flex-row flex-col rounded-[10px 10px 150px 10px] h-[600px]  bg-[#E8EFFF]  flex justify-between items-center">
      <div className="lg:w-[60%] w-[100%] pl-[2%] lg:pl-[0%] tracking-tight	flex-col flex justify-center items-center bg-[] h-fit p-[20px]">
        <div className="w-[80%] h-fit">
          <h1 className=" text-1xl tracking-wider	text-[#021850] lg:text-3xl font-bold">
            {" "}
            Do you have a Self Storage for Sale?
          </h1>
          <div className="text-justify text-sm lg:text-[1.2rem] leading-2 lg:leading-7 mb-[6%]  font-sans	 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
            proin scelerisque nunc.
          </div>
          <div className="flex lg:justify-start justify-center items-center">
            <Button
              mt="mt-[70px]"
              minWidth="min-w-[222px]"
              color="bg-[#ffce31]"
              textColor="text-[#00000]"
              fontWeight="font-semibold	"
            >
              Sell Your Self Storage
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%]  w-[100%] bg-slate-50 h-[100%] relative">
        <div className=" absolute bottom-0  right-0	 w-[100%] bg-[#fff] h-fit">
          <img
            className="rounded-[10px 10px 150px 10px] w-[100%]"
            src={StorageBoy}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};

export { Listings };
