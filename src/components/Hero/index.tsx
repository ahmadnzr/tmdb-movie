import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
`;

const HeroContent = styled.div`
  & .hero-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 30%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9),
    rgba(255, 0, 0, 0)
  );
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 30%;
  background-color: green;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Navbar />
      <HeroContent>
        <Overlay />
        <ImageContainer>
          <img
            src="https://www.looper.com/img/gallery/every-hulk-movie-ranked-from-worst-to-best/intro-1555712816.jpg"
            alt="img"
            className="hero-img"
          />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
