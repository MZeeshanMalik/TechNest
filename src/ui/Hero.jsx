/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Button from "./Button";
const HeroDiv = styled.div`
  display: grid;
  grid-area: 2em 2em;
  grid-template-columns: repeat(2, 1fr);
  background-color: red;
  height: 80vh;
  @media (max-width: 1050px) {
    height: 60vh;
  }
  @media (max-width: 650px) {
    height: auto;
  }
`;
const HeroRight = styled.div`
  background-color: #e5d4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2px 12px 8px 12px;
`;
const HeroLeft = styled.div`
  background-color: #dcbfff;
  position: relative;
  background: linear-gradient(
      to right,
      rgba(233, 79, 247, 0.064),
      rgba(180, 47, 204, 0.8)
    ),
    url("../../images/headphone.jpg") center/cover no-repeat;

  &::before {
    content: "";
    background-image: url("../../images/headphone.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;

    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
    mix-blend-mode: screen;
    filter: brightness(1.2) contrast(1.7) saturate(0.5);
    /* z-index: -0.7; */
    transform: translateY(100%); /* Start position: Off-screen downwards */
    opacity: 0; /* Start with opacity 0 */
    animation: slideUp 1s ease-in-out forwards; /* Apply the animation */
    /* Keyframes for sliding up from bottom */
    @keyframes slideUp {
      0% {
        transform: translateY(100%); /* Start off-screen */
        opacity: 0; /* Start transparent */
      }
      100% {
        transform: translateY(0); /* End at final position */
        opacity: 1; /* Fully visible */
      }
    }
    mask-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 1));
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      rgba(0, 0, 0, 1)
    );
  }

  @media (max-width: 480px) {
    &::before {
      height: 50%; /* Further adjust for smaller screens */
      width: 50%;
    }
  }
`;

const Heroheading = styled.h1`
  padding: 20px;
  font-size: 2.4rem;
  @media (max-width: 620px) {
    font-size: 1.25rem;
  }
  @media (max-width: 500px) {
    padding: 4px;
    font-size: 1rem;
  }
`;
const Heropara = styled.p`
  color: #393434;
  padding: 2px 2px 12px 3px;
  font-size: 1rem;
  @media (max-width: 500px) {
    /* display: none; */
    font-size: 0.7rem;
    line-height: 1.3;
  }
`;

function Hero() {
  return (
    <HeroDiv>
      <HeroLeft></HeroLeft>
      <HeroRight>
        <Heroheading>
          Discover the Latest in Electronics at Technest
        </Heroheading>
        <Heropara>
          Upgrade your tech game with our handpicked collection of cutting-edge
          devices. Whether you're a tech enthusiast or looking for the perfect
          gift, Technest has you covered.
        </Heropara>
        <Button variant={"secondary"} width={"10rem"} height={"20rem"}>
          Shop now
        </Button>
      </HeroRight>
    </HeroDiv>
  );
}

export default Hero;
