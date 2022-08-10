import React, { useState } from "react";
import { Button } from "components";

const Header = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Active Listings", link: "/" },
    { name: "Sell your Self Storage", link: "/" },
    { name: "Free Evaluation", link: "/" },
    { name: "Learn", link: "/" },
  ];

  return (
    <div className="w-full  z-1000 lg:mb:0	 bg-[#1849C6] top-0 fixed left-0 z-50">
      <div className="lg:flex  items-center justify-between bg-transparent  py-4 lg:px-20 px-7">
        <div className="font-bold text-1xl cursor-pointer  flex items-center text-white ">
          <span className="text-2xl text-[#ffce31] mr-1 pt-2">
            <ion-icon name="calendar-clear"></ion-icon>
          </span>
          StorageConnect
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-6  cursor-pointer text-white lg:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`lg:flex bg-[#1849C6] lg:bg-[transparent] lg:items-center lg:pb-0 pb-24 absolute lg:static bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "hidden"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="lg:ml-10 text-md lg:my-0 my-7">
              <a className="text-white lg:text-sm" href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
          <div className="lg:ml-10">
            <Button color="bg-[#ffce31]" textColor="text-white-700">
              Contact
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export { Header };
