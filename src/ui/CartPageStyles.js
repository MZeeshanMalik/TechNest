import styled from "styled-components";
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  background-color: #8c3cdc;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  @media (max-width: 600px) {
    padding: 2px;
    font-size: 1rem;
  }
`;
export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  /* border: 0.3px solid #282626; */
  text-align: center;
  padding: 14px;
  margin-bottom: 5px;
  @media (max-width: 600px) {
    padding: 2px;
  }
  /* object-fit: cover; */
`;
export const TableRow = styled.tr`
  text-align: center;
  border: 0.5px solid #eee3e3;
`;
export const TableHead = styled.th`
  color: #373aea;
  letter-spacing: 2px;
  text-align: center;
  padding: 10px;
  @media (max-width: 600px) {
    padding: 0px;
    font-size: 0.8rem;
    letter-spacing: 0px;
  }
`;
export const TableData = styled.td`
  text-align: center;
`;
export const Img = styled.img`
  display: block;
  margin: 0 auto;
`;
export const TableDiv = styled.div`
  /* align-items: center; */
  text-align: center;
  padding: 30px;
  /* display: flex; */
  /* al */
  @media (max-width: 600px) {
    /* display: flex;
    flex-direction: column;
    flex-wrap: wrap; */
    padding: 5px;
    font-size: 0.7rem;
  }
`;
