import React from "react";
import { Button } from "components";

const textStyles = "text-2xl lg:text-5xl font-extrabold";

const Background = () => {
  return (
    <div className="bg-bgImg w-full h-full lg:px-10 p-14 lg:p-32">
      <div className="w-full h-full flex mt-16 lg:mt-0 justify-center items-center text-white">
        <div className="flex justify-center lg:items-center  flex-col	">
          <h1 className={textStyles}>Self Storage Business</h1>
          <h1 className={textStyles}>Buy. Sell. Learn.</h1>
          <p className="text-left mb-10 lg:text-center text-sm lg:text-base font-normal font-sans mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            <br /> sagittis, aliquam non tortor blandit lobortis. blandit
          </p>
          <div className="flex pl-1 flex-col lg:flex-row justify-evenly gap-6 item-evenly mt-4">
            <Button className="w-56 bg-primary text-black">
              Sell Your Self Storage
            </Button>
            <Button className="w-56 text-black bg-white">
              Active Self Storage Listings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Background };
