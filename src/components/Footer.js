import React from "react";
import { Button } from "components";
import InputType from "./InputType";

const Footer = () => {
  return (
    <div className="w-full flex justify-evenly border p-[20px] items-center h-full">
      <div className="w-11/12 lg:flex-row flex-col flex justify-evenly items-baseline h-fit">
        <div className=" w-full  lg:mt-0 lg:w-1/4 h-40   flex-col   ">
          <div className="flex justify-start items-center w-full ">
            <span className="text-1xl text-[#1849C6] mr-1">
              <ion-icon name="calendar-clear"></ion-icon>
            </span>
            <span className="text-[#2F2F2F] font-medium">StorageConnect</span>
          </div>
          <div className=" text-xs mt-2">
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt
            tincidunt sit amet sed libero.
          </div>
          <div className="p-[0px] text-xs mt-[10px]">
            © StorageConnect 2022, All Rights Reserved
          </div>
        </div>
        <div className=" w-full lg:mt-0 lg:w-1/4 h-full ">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium ">QUICK LINKS</h2>
            <p className="text-xs">Active Listings</p>
            <p className="text-xs">Sell your Self Storage</p>
            <p className="text-xs">Free Evaluation</p>
            <p className="text-xs">Learn</p>
          </div>
        </div>
        <div className=" w-full lg:px-3 px-0 lg:w-1/4 flex gap-2  lg:my-0 my-6   flex-col h-full first-letter ">
          <h2 className="font-medium p-0 text-sm ">NEWS LETTERS</h2>
          <p className="text-xs">Get latest updates right in your inbox</p>
          <div className=" text-xs mt-[10px]">
            <InputType
              className="p-2 border w-11/12"
              type="text"
              placeholder="enter your email *"
            />
          </div>
          <div className="p-[0px] text-xs mt-[10px]">
            <Button className="my-5 bg-[#1036fc] text-[#fff]">
              Subscribe Now
            </Button>
          </div>
        </div>
        <div className=" w-full  lg:w-1/4 h-40 flex flex-col  gap-2">
          <h2 className="font-medium  text-sm">LET'S GET SOCIAL</h2>
          <div className=" flex justify-between items-center w-2/5 text-lg ">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <div className="text-xs flex items-end h-full mb-4 ">
            <div className="border w-2/3 h-12 flex items-center">
              English-En
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
