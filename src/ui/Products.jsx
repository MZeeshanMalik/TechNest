import styled from "styled-components";
import Card from "./Card";
import { items } from "./items";

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
  /* position: sticky; */
  margin-bottom: 12px;
  font-size: 1.5rem;
`;
const CardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  /* height: auto; */
  /* width: 100%; */
`;
function Products() {
  return (
    <div>
      <Heading>Featured Products</Heading>
      <CardDiv>
        {items.map((element) => (
          <Card key={element.id} item={element} />
        ))}
      </CardDiv>
    </div>
  );
}

export default Products;
