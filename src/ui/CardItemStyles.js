import styled from "styled-components";
export const Itemdiv = styled.div`
  padding: 2px;
  margin: 4px;
  background-color: #fcf6f6;
`;

export const CartItemDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* flex-direction: column; */
  font-size: 0.7rem;
  line-height: 1;
  margin: 2px;
  padding: 2px;
  /* border: 2px solid black; */
`;
export const NumItemsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  padding: 2px;
  width: 4dvh;
  height: 5dvh;
  border-radius: 4px;
  margin: 2px;
  @media (max-width: 600px) {
    height: 3vh;
    width: 3vh;
  }
`;
export const Image = styled.img`
  min-height: 10vh;
  min-width: 10vh;
  border-radius: 7px;
`;
export const Span = styled.span`
  padding: 7px;
`;
export const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #f6f6f6;
  padding: 3px;
  /* From https://css.glass */
  background: #952def;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(219, 204, 204, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
`;
