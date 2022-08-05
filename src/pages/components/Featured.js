import React from "react";
import { Button, Card } from "components";
import { card, cardLoop } from "data";
import { Pagination } from "assets";
const Featured = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-screen h-fit px-8">
      <div className="flex items-center flex-col">
        <h1 className="mt-20 text-1xl lg:text-3xl font-bold">
          {" "}
          Featured Self Storages
        </h1>
        <div className="text-center mb-1  lg:text-center text-sm lg:text-[1rem] font-light font-sans mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis <br /> maecenas tincidunt. Quis pretium ornare
        </div>
      </div>
      <div className="flex items-center flex-col  lg:flex-row justify-evenly w-full h-fit]">
        {card.map((item, index) => (
          <Card
            cardImg={item.cardImg}
            h_icon={item.h_icon}
            h_name={item.h_name}
            p1_icon={item.p1_icon}
            p1_name={item.p1_name}
            p2_icon={item.p2_icon}
            p2_name={item.p2_name}
            p3_icon={item.p3_icon}
            p3_name={item.p3_name}
            key={index}
          />
        ))}
      </div>
      <img className="mt-[25px]" src={Pagination} alt="pic" />

      <div className="flex flex-col item-center	">
        <h1 className="mt-20 text-1xl lg:text-3xl font-bold font-Helvetica text-center">
          {" "}
          Active Listing Self Storages
        </h1>
        <div className="text-center mb-10 lg:text-center text-sm lg:text-[1rem] font-normal font-sans mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis <br /> maecenas tincidunt. Quis pretium ornare
        </div>
      </div>

      <div className="w-[90%]  p-[10px] h-fit flex justify-around items-center lg:flex-row flex-col  rounded-3xl border bg-white">
        <div className="w-[100%] font-sans font-normal text-slate-800 lg:w-[40%] h-[100%] ">
          <div className="m-[15px]">Location</div>
          <div className="flex w-[100%] justify-between border border-gray-100 rounded-lg items-center">
            <ion-icon name="location-outline"></ion-icon>
            <input
              type="text"
              className="border-none text-gray-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-[95%] p-3.5 outline-none"
              placeholder="Serch locations"
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] h-[100%] bg-white-500 flex flex-col">
          <div className="m-[15px]">Properties</div>

          <div className="flex justify-between lg:flex-row flex-col">
            <div className="flex w-[100%] lg:w-[30%] pl-2 justify-between border border-gray-100 rounded-lg items-center">
              <ion-icon name="business-outline"></ion-icon>
              <input
                type="text"
                className="
                      border-none
                     text-gray-900
                      text-sm 
                      w-[95%]
                      rounded-lg
                      focus:ring-white-500 focus:border-white-500
                       p-2.5 
                      outline-none"
                placeholder="Unit Counts"
              />
            </div>
            <div className="flex w-[100%] lg:w-[30%] pl-2  justify-between border border-gray-100 rounded-lg items-center">
              <ion-icon name="people-outline"></ion-icon>{" "}
              <input
                type="text"
                className="
                      border-none
                     text-gray-900
                      text-sm 
                      rounded-lg
                      focus:ring-white-500 focus:border-white-500
                       w-[95%]
                       p-2.5 
                      outline-none"
                placeholder="Occupancy%"
              />
            </div>
            <Button
              minWidth="min-w-[122px]"
              color="bg-[#ffce31]"
              textColor="text-[#000000]"
              mb="mb-[10px]"
              mt="mt-[10px]"
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#1849C6] h-fit  mt-[40px] w-[inherit] flex pb-[3%] justify-center items-center lg:flex-col flex-col">
        <div className="w-full p-[10px] h-fit flex justify-around items-center lg:flex-row flex-col pb-[4%] rounded-3xl border-none bg-transparent">
          <div className="flex flex-wrap items-center flex-col mt-[15%] lg:mt-[5%] lg:flex-row justify-evenly w-full h-fit]">
            {cardLoop.map((item, index) => (
              <Card
                cardImg={item.cardImg}
                h_icon={item.h_icon}
                h_name={item.h_name}
                p1_icon={item.p1_icon}
                p1_name={item.p1_name}
                p2_icon={item.p2_icon}
                p2_name={item.p2_name}
                p3_icon={item.p3_icon}
                p3_name={item.p3_name}
                key={index}
              />
            ))}
          </div>
        </div>
        <Button
          mb="mb-[20px]"
          mt="mt-[20px]"
          minWidth="min-w-[222px]"
          color="bg-[#ffce31]"
          textColor="text-[#00000]"
          fontWeight="font-semibold	"
        >
          View More Listings
        </Button>
      </div>
    </div>
  );
};

export { Featured };
