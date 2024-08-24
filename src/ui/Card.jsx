/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import {
  Boximage,
  Boxtop,
  CardDiv,
  Discontspan,
  Pricediv,
  ProductImage,
  Spandiv,
} from "./CardStyles";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/cart/CartSlice";
import SideBarContext from "./SideBarContext";

function Card({ item }) {
  const { setIsCartOpen } = useContext(SideBarContext);
  const dispatch = useDispatch();
  function handleAddtoCart(item) {
    dispatch(addItem(item));
    setIsCartOpen(true);
  }
  return (
    <div>
      <CardDiv>
        <Boxtop>20% off</Boxtop>
        <Boximage>
          <ProductImage
            src={`../../images/${item.image}`}
            loading="lazy"
            decoding="async"
          />
        </Boximage>
        <div>
          <Button
            onClick={() => handleAddtoCart(item)}
            width={"15rem"}
            height={"15rem"}
          >
            Add to cart
          </Button>
          <div>
            <Spandiv>{item.title} </Spandiv>
          </div>
          <Pricediv>
            <Spandiv>Rs {item.price} </Spandiv>
            <Discontspan>Rs {item.discountPrice} </Discontspan>
          </Pricediv>
        </div>
      </CardDiv>
    </div>
  );
}

export default Card;
