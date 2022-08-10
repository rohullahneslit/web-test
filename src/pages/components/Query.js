import React from "react";
import { Button } from "components";

const Query = () => {
  return (
    <div className="flex p-[3%]  h-fit w-full justify-center item-center">
      <div className="w-[100%] lg:w-[60%] border p-[3%] rounded-xl">
        <h1 className="	 text-1xl lg:text-3xl text-primary font-extrabold">
          Any Queries ? Reach Out to Us
        </h1>
        <div className="flex lg:flex-row flex-col justify-between items-center w-full h-full">
          <div>Feel free to write us, we are happy to help you</div>
          <Button className="bg-primary w-32 lg:mb-0 mb-8">
            Write to Us <ion-icon name="send-outline"></ion-icon>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Query };
