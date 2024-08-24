import styled from "styled-components";
import { useSelector } from "react-redux";
import Navbar from "../ui/Navbar";
import Button from "../ui/Button";
import ItemQuantity from "../ui/ItemQuantity";
import { useState } from "react";
import Table from "../ui/Table";
import {
  TableData,
  TableDiv,
  TableHead,
  TableRow,
  Div,
  Table as TableStyled,
} from "../ui/CartPageStyles";
import { getCart, getTotalCartPrice } from "../Features/cart/CartSlice";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  function handleNavigation() {
    console.log("clicked");
    navigate("/checkout");
  }
  const totlCartPrice = useSelector(getTotalCartPrice);
  // const [itemQuantity, setItemQuantity] = useState(1);
  return (
    <>
      <Div>Our Cart</Div>
      <TableDiv>
        <Table cart={cart.cart} />
        <TableStyled>
          <TableRow>
            <TableHead>SUBTOTAL</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
          <TableRow>
            <TableData>{totlCartPrice}</TableData>
            <TableData>
              Shipping charges will be confirmed by our representative on call
              at order confirmation.
            </TableData>
            <TableData>{totlCartPrice}</TableData>
          </TableRow>
        </TableStyled>
        <Button onClick={() => handleNavigation()} height={"70%"} width={"70%"}>
          PROCEED TO CHECKOUT
        </Button>
      </TableDiv>
    </>
  );
}

export default CartPage;
