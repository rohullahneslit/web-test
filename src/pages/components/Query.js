import React from "react";
import { Button } from "components";

const Query = () => {
  return (
    <div className="flex p-[3%]  h-fit w-full justify-center item-center">
      <div className="w-[100%] lg:w-[60%] border p-[3%] rounded-xl	">
        <h1 className="	 text-1xl lg:text-3xl text-[#021850] font-extrabold">
          Any Queries ? Reach Out to Us
        </h1>
        <div className="flex lg:flex-row flex-col justify-between items-center w-full h-full">
          <div>Feel free to write us, we are happy to help you</div>
          <Button
            mb="mb-[20px]"
            mt="mt-[0px]"
            minWidth="min-w-[170px]"
            ml="ml-[20px]"
            color="bg-[#ffce31]"
            textColor="text-[#00000]"
          >
            Write to Us <ion-icon name="send-outline"></ion-icon>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Query };
