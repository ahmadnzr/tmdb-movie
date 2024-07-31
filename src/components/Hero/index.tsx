import styled from "styled-components";
import {
  CalendarDaysIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import Navbar from "./Navbar";

const HeroSection = styled.section`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 20%;
  left: 0;
  right: 0;
`;

const HeroDetail = styled.div`
  z-index: 20;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  height: 300px;
  width: 700px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1``;
const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & .detail-icon {
    height: 20px;
    width: 20px;
    color: #f0e522;
  }

  & .detail-label {
    font-size: 0.9rem;
  }
`;
const Desc = styled.p`
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.button<{ $primary?: boolean; $icon?: string }>`
  opacity: 0.9;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  padding: 0.6em 1.2em;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 500;

  background-color: ${(props) => (props.$primary ? "#e8ca0e" : "white")};
  color: #060716;
  display: ${(props) => (props.$icon ? "flex" : "block")};
  align-items: center;
  gap: 6px;

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props) => props.$icon});
  }

  &:hover {
    opacity: 1;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const Overlay = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  bottom: 0;

  & .hero-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Navbar />
      <HeroContent>
        <Overlay />
        <ImageContainer>
          <img
            src="https://images.alphacoders.com/115/thumb-1920-1156492.jpeg"
            alt="img"
            className="hero-img"
          />
        </ImageContainer>
        <HeroDetail>
          <Title>Black Widow</Title>
          <Detail>
            <DetailItem>
              <StarIcon className="detail-icon" />
              <label className="detail-label">IMDB: 7.4</label>
            </DetailItem>
            <DetailItem>
              <ClockIcon className="detail-icon" />
              <label className="detail-label">Duration: 1H 58M</label>
            </DetailItem>
            <DetailItem>
              <CalendarDaysIcon className="detail-icon" />
              <label className="detail-label">YEAR: 2023</label>
            </DetailItem>
          </Detail>
          <Desc>
            Natasha Romanoff, also known as Black Widow, confronts the darker
            parts of her ledger when a dangerous conspiracy with ties to her
            past arises. Pursued by a force that will stop at nothing to bring
            her down, Natasha must deal with her history as a spy and the broken
            relationships left in her wake long before she became an Avenger.
          </Desc>
          <ButtonContainer>
            <Button $primary $icon="/icons/play.svg">
              Watch Trailer
            </Button>
            <Button $icon="/icons/add.svg">Add List</Button>
          </ButtonContainer>
        </HeroDetail>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
