import React from "react";

import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Recently from "../components/Recently";

const Home = ({
  onClickCard,
}: {
  onClickCard: (id: number | null) => void;
}) => {
  return (
    <>
      <Hero />
      <Trending onClickCard={onClickCard} />
      <Recently onClickCard={onClickCard} />
    </>
  );
};

export default Home;
