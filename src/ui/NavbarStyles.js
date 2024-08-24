import styled, { css, keyframes } from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  justify-content: space-between;
  background-color: #f1eaff;
  font-size: 1.1rem;
  flex-wrap: wrap;
  width: 100%;
  font-family: "PT Sans", sans-serif;
  position: relative;
  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;
export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 680px) {
    display: none;
  }
`;
export const List = styled.li`
  padding: 10px 10px;
  cursor: pointer;
  color: #464444;
  &:hover {
    border-radius: 10px;
    transition: all 500ms ease-in-out;
    background-color: #ffffff61;
    color: #060006;
  }
  @media (min-width: 850px) {
    padding: 10px 40px;
  }
`;
export const ListBox = styled.div`
  display: block;
`;
export const Span = styled.span`
  font-size: 2rem;
  color: black;
  font-weight: bold;
  @media (max-width: 400px) {
    display: none;
  }
`;

export const Bar = styled.span`
  display: none;
  width: fit-content;
  @media (max-width: 680px) {
    display: block;
  }
`;
export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    scale: 2 1;
  }
  to {
    transform: translateX(0);
    scale: 1 1;
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(0);
    scale: 1 1;
  }
  to {
    transform: translateX(-100%);
    scale: 2 1;
  }
`;

// / Define slide-in and slide-out animations for left and right
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Sidebar = styled.div`
  /* display: none; */
  background-color: #dcbfff;
  width: 50vh;
  height: 100vh;
  position: fixed;
  top: 0;

  /* Set position and animations based on the position prop */
  ${({ $position, $isOpen }) =>
    $position === "right"
      ? css`
          right: 0;
          left: auto;
          animation-name: ${$isOpen ? slideInFromRight : slideOutToRight};
        `
      : css`
          left: 0;
          right: auto;
          animation-name: ${$isOpen ? slideInFromLeft : slideOutToLeft};
        `}

  z-index: 10;
  padding-top: 0px 10px 15px 10px;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  opacity: ${({ $isOpen }) => ($isOpen ? 0.97 : 0)};
  animation-duration: 500ms;

  /* animation-name: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)}; */

  display: block;
  @media (max-width: 680px) {
    width: 40vh;
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  }
`;
export const Close = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  color: #242020;
  &:hover {
    color: #514d4d;
  }
`;
