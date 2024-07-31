import styled from "styled-components";
import {
  CalendarDaysIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import Navbar from "./Navbar";

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

const HeroSection = styled.section`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  color: ${(props) => props.theme.color.neutral};
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 20%;
  left: 0;
  right: 0;
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
  gap: ${(props) => props.theme.spacing.xlarge};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xlarge};
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.large};
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.small};

  & .detail-icon {
    height: 20px;
    width: 20px;
    color: ${(props) => props.theme.color.primary};
  }

  & .detail-label {
    font-size: ${(props) => props.theme.fontSize.small};
  }
`;
const Desc = styled.p`
  line-height: 1.8;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.xlarge};
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
  transition: ${(props) => props.theme.animation};

  background-color: ${(props) =>
    props.$primary ? props.theme.color.primary : props.theme.color.neutral};
  color: ${(props) => props.theme.color.neutral2};
  display: ${(props) => (props.$icon ? "flex" : "block")};
  align-items: center;
  gap: ${(props) => props.theme.spacing.small};

  &:before {
    content: "";
    width: ${(props) => props.theme.spacing.large};
    height: ${(props) => props.theme.spacing.large};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props) => props.$icon});
  }

  &:hover {
    opacity: 1;
    box-shadow: ${(props) => props.theme.shadow};
  }
`;
