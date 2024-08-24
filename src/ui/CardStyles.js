import styled from "styled-components";
export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  max-width: 50vh;
  min-width: 40vh;
  max-height: auto;
  min-height: 70vh;
  border-radius: 8px;
  background: #eee;
  box-shadow: 0 8px 8px -4px lightblue;
  margin-bottom: 20px;
  margin-right: 12px;
  @media (max-width: 500px) {
    min-height: 40vh;
  }
`;
export const Boxtop = styled.div`
  padding: 6px 12px;
  background-color: #7a37cc;
  color: white;
  width: fit-content;
  font-weight: bold;
  margin-bottom: 3px;
  border-radius: 1px 15px 18px 10px;
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
export const Boximage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: auto;
`;
export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 80%;
  border-radius: 7px;
  object-fit: contain;
  &:hover {
    scale: 1.2;
  }
  @media (max-width: 500px) {
    height: 70%;
  }
`;
export const Spandiv = styled.span`
  &:hover {
    color: #100a16bf;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
export const Pricediv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 2px 2px 2px;
  @media (min-width: 786px) {
    justify-content: space-around;
  }
`;
export const Discontspan = styled.span`
  text-decoration: line-through;
  color: red;
`;
