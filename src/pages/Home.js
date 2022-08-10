import React from "react";
import {
  Background,
  Featured,
  Listings,
  BuyStorage,
  Card,
  Query,
} from "./components/index";

const Home = () => {
  return (
    <>
      <Background />
      <Featured />
      <Listings />
      <BuyStorage />
      <Card />
      <Query />
    </>
  );
};

export { Home };
