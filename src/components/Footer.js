import React from "react";
import { Button } from "components";

const Footer = () => {
  return (
    <div className="w-full flex justify-evenly border p-[20px] items-center h-full">
      <div className="w-[90%] lg:flex-row flex-col flex justify-evenly items-baseline h-fit">
        <div className="p-[3x%] w-[100%] mt-[18px] lg:mt-[0px] lg:w-[22%] h-full ">
          <div className="flex justify-start items-center w-full">
            <span className="text-1xl text-[#1849C6] mr-1 mb-1 pt-2">
              <ion-icon name="calendar-clear"></ion-icon>
            </span>
            <span className="text-[#2F2F2F] font-medium">StorageConnect</span>
          </div>
          <div className=" text-xs">
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt
            tincidunt sit amet sed libero.
          </div>
          <div className="p-[0px] text-xs mt-[10px]">
            © StorageConnect 2022, All Rights Reserved
          </div>
        </div>
        <div className="p-[3x%] w-[100%] mt-[20px] lg:mt-[0px] lg:w-[22%] h-full ">
          <div className="font-medium lg:mt-[12px] p-[0px] text-sm">
            QUICK LNKS
          </div>
          <div className="p-[0px] text-xs mt-[10px]">Active Listings</div>
          <div className="p-[0px] text-xs mt-[10px]">
            Sell your Self Storage
          </div>
          <div className="p-[0px] text-xs mt-[10px]">Free Evaluation</div>
          <div className="p-[0px] text-xs mt-[10px]">Learn</div>
        </div>
        <div className="p-[3x%] w-[100%] mt-[20px] lg:mt-[0px] lg:w-[22%] h-full ">
          <div className="font-medium lg:mt-[45px] p-[0px] text-sm">
            NEWS LETTERS
          </div>
          <div className="p-[0px] text-xs mt-[10px]">
            Get latest updates right in your inbox
          </div>
          <div className="p-[0px] text-xs mt-[10px]">
            <input
              className="p-[4%] border w-[90%]"
              type="text"
              placeholder="enter your email *"
            />
          </div>
          <div className="p-[0px] text-xs mt-[10px]">
            <Button
              mb="mb-[20px]"
              mt="mt-[20px]"
              minWidth=""
              color="bg-[#1036fc]"
              textColor="text-[#fff]"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
        <div className="p-[3x%] w-[100%] mt-[20px] lg:mt-[0px] lg:w-[22%] h-full  mb-[20%] lg:mb-[5%]">
          <div className="font-medium lg:mt-[30px] p-[0px] text-sm">
            LET'S GET SOCIAL
          </div>
          <div className="p-[0px] flex justify-between items-center w-[40%] text-lg mt-[10px]">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <div className="p-[0px] text-xs mb-[50px] mt-[10px]">
            <div className="p-[4%] border w-[60%]">English-En</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
