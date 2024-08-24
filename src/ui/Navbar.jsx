// import React from "react";
import Button from "./Button";
import { Bars } from "@styled-icons/fa-solid/Bars";
import { useState } from "react";
import {
  Bar,
  Close,
  Div,
  List,
  ListBox,
  Span,
  UnorderedList,
} from "./NavbarStyles";
import SideBar from "./SideBar";
import Cart from "../Features/cart/Cart";
import { SquaredCross } from "styled-icons/entypo";
import { useNavigate } from "react-router";
function Navbar() {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  function handleNavigation() {
    console.log("clicked");
    navigate("/");
  }

  return (
    <Div>
      <Bar onClick={toggleSidebar}>
        <Bars size="30px"></Bars>
      </Bar>
      <Span>TechNest</Span>
      <ListBox>
        <UnorderedList>
          <List>
            {" "}
            <a onClick={() => handleNavigation()}>Home</a>
          </List>
          <List>About</List>
          <List>Contact</List>
          <List>Items</List>
        </UnorderedList>
      </ListBox>
      <ListBox>
        <SideBar
          $position="left"
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        >
          <Close onClick={toggleSidebar}>
            <SquaredCross size="30px" />
          </Close>
          <List>Home</List>
          <List>About</List>
          <List>Contact</List>
          <List>Items</List>
        </SideBar>
      </ListBox>

      <div>
        <Cart />
        <Button>login</Button>
        <Button>Signup</Button>
      </div>
    </Div>
  );
}

export default Navbar;
