/* eslint-disable react/prop-types */
import styled from "styled-components";

const Btn = styled.button`
  color: #ffffff;
  border: 1px solid gray;
  border-radius: 6px;
  font-family: "PT Sans", sans-serif;
  padding: 3px 12px 2px 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* background: linear-gradient(to right, #bc6aff, #d0a2f7); */
  /* margin: 1rem; */
  margin: 4px;
  transition: all 0.3s ease;
  width: ${(props) => props.width};
  width: ${(props) => props.height};
  background-color: ${(props) =>
    props.color[props.variant] || props.color.primary};
  &:hover {
    color: #eee;
    animation: ease-in-out;
    /* background-color: #9331e9; */
    background-color: ${(props) =>
      props.color[props.variant] === "#e82956"
        ? "#f60940"
        : props.color.hovercolor};
    transform: translateY(-2px);
  }
  &:focus {
    outline: 2px solid #c084ff;
    outline-offset: 1px;
  }
  &:active {
    transform: scale(1);
  }
  @media (max-width: 500px) {
    width: fit-content;
    font-size: 0.5rem;
    margin: 2px;
    padding: p5x;
  }
`;
Btn.defaultProps = {
  color: {
    primary: "#ac57f7",
    secondary: "#bc6aff",
    simple: "#eee",
    danger: "#e82956",
    black: "#c778ee8b",
    hovercolor: "#7d0ce1",
  },

  variant: "primary",
  width: "auto",
  height: "auto",
};
function Button({ $variant, children, width, onClick, height, type }) {
  return (
    <Btn
      onClick={onClick}
      type={type}
      width={width}
      variant={$variant}
      height={height}
    >
      {children}
    </Btn>
  );
}

export default Button;
