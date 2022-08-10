import React from "react";
import { Button, Card } from "components";
import { card, cardLoop } from "data";
import { Pagination } from "assets";
import InputType from "components/InputType";
const Featured = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-screen h-fit px-8">
      <div className="flex items-center flex-col">
        <h1 className="mt-20 text-1xl lg:text-3xl font-bold">
          {" "}
          Featured Self Storages
        </h1>
        <div className="text-center mb-1 lg:text-center text-sm lg:text-base font-light font-sans mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis <br /> maecenas tincidunt. Quis pretium ornare
        </div>
      </div>
      <div className="flex items-center flex-col  lg:flex-row justify-evenly w-full h-fit">
        {cardLoop.slice(0, 3).map((item, index) => (
          <Card
            cardImg={item.cardImg}
            h_icon={item.h_icon}
            h_name={item.h_name}
            cardloopparagraph={item.cardloopparagraph}
          />
        ))}
      </div>
      <img className="mt-6" src={Pagination} alt="pic" />

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

      <div className="w-11/12  p-3 h-fit flex justify-around items-center lg:flex-row flex-col  rounded-3xl border bg-white">
        <div className="w-full font-sans font-normal text-slate-800 lg:w-2/5 h-full ">
          <div className="m-4">Location</div>
          <div className="flex w-full justify-between border border-gray-100 rounded-lg items-center">
            <ion-icon name="location-outline"></ion-icon>
            <InputType
              placeholder="Serch locations"
              className="border-none text-gray-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 block w-11/12 p-3.5 outline-none"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[100%] bg-white-500 flex flex-col">
          <div className="m-4">Properties</div>
          <div className="flex justify-between lg:flex-row flex-col">
            <div className="flex w-full lg:w-2/6 pl-2 justify-between border border-gray-100 rounded-lg items-center">
              <ion-icon name="business-outline"></ion-icon>
              <InputType
                type="text"
                className="border-none text-gray-900 text-sm  w-11/12 rounded-lg focus:ring-white-500 focus:border-white-500 p-2.5 outline-none"
                placeholder="Unit Counts"
              />
            </div>
            <div className="flex w-full lg:w-2/6 pl-2  justify-between border border-gray-100 rounded-lg items-center">
              <ion-icon name="people-outline"></ion-icon>{" "}
              <InputType
                type="text"
                className="border-none text-gray-900 text-sm rounded-lg focus:ring-white-500 focus:border-white-500 w-11/12 p-2.5 outline-none"
                placeholder="Occupancy%"
              />
            </div>
            <Button className="my-3 w-32 bg-primary text-[#000000]">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#1849C6] h-fit  mt-10 w-[inherit] flex  pb-4 justify-center items-center lg:flex-col flex-col">
        <div className="w-full p-3 h-fit flex justify-around items-center lg:flex-row flex-col pb-[4%] rounded-3xl border-none bg-transparent">
          <div className="flex flex-wrap items-center flex-col mt-6 lg:mt-4 lg:flex-row justify-evenly w-full h-fit]">
            {cardLoop.map((item, index) => (
              <Card
                cardImg={item.cardImg}
                h_icon={item.h_icon}
                h_name={item.h_name}
                cardloopparagraph={item.cardloopparagraph}
                // p1_icon={item.p1_icon}
                // // p1_name={item.p1_name}
                // // p2_icon={item.p2_icon}
                // // p2_name={item.p2_name}
                // // p3_icon={item.p3_icon}
                // // p3_name={item.p3_name}
                key={index}
              />
            ))}
          </div>
        </div>
        <Button className="my-5 w-56 bg-primary text-[#00000] font-semibold">
          View More Listings
        </Button>
      </div>
    </div>
  );
};

export { Featured };
