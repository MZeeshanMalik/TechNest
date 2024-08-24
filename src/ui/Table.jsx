/* eslint-disable react/prop-types */
import { Delete } from "styled-icons/material";
import Button from "./Button";
import {
  Img,
  TableData,
  TableHead,
  TableRow,
  Table as StyledTable,
} from "./CartPageStyles";
import ItemQuantity from "./ItemQuantity";
import { useDispatch } from "react-redux";
import { deleteItem } from "../Features/cart/CartSlice";

function Table({ cart }) {
  const dispatch = useDispatch();
  function handleDelteItem(id) {
    console.log(id);

    dispatch(deleteItem({ id }));
  }
  return (
    <StyledTable>
      <TableRow>
        <TableHead>IMAGE</TableHead>
        <TableHead>Product</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead>Subtotals</TableHead>
        <TableHead></TableHead>
      </TableRow>
      {cart.map((item) => (
        <TableRow key={item.id}>
          <TableData>
            <Img
              src={`../../public/images/${item.image}`}
              height="70dvh"
              width="70dvh"
            />
          </TableData>
          <TableData>{item.title}</TableData>
          <TableData>{item.price}</TableData>
          <TableData>
            <ItemQuantity itemQuantity={item.itemQuantity} id={item.id} />
          </TableData>
          <TableData>{item.totalPrice}</TableData>
          <TableData>
            <Button
              onClick={() => handleDelteItem(item.id)}
              $height="12px"
              $width="12px"
            >
              <Delete size={"20px"} />
            </Button>
          </TableData>
        </TableRow>
      ))}
      {/* <TableRow>
        <TableData>
          <Img
            src="../../public/images/air-cooler.jpg"
            height="70dvh"
            width="70dvh"
          />
        </TableData>
        <TableData>haier inspire</TableData>
        <TableData>1000</TableData>
        <TableData>10</TableData>
        <TableData>10000</TableData>
      </TableRow> */}
    </StyledTable>
  );
}

export default Table;
