import React from "react";

import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Recently from "../components/Recently";

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <Recently />
    </>
  );
};

export default Home;
