import { useContext, useState } from "react";
import { Cart as CartIcon } from "@styled-icons/bootstrap/Cart";
import Button from "../../ui/Button";
import SideBar from "../../ui/SideBar";
import styled from "styled-components";
import { ArrowBackCircle } from "@styled-icons/ionicons-sharp/ArrowBackCircle";
import CartItem from "./CartItem";
import { getCart, getTotalCartPrice } from "./CartSlice";
import { useDispatch, useSelector } from "react-redux";
import SideBarContext from "../../ui/SideBarContext";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  padding: 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  color: white;
  background-color: #8500f2;
  height: auto;
  margin-bottom: 2px;
`;
const CartDiv = styled.div`
  height: 78vh;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  overflow-x: hidden;
`;
const BottomDiv = styled.div`
  /* position: fixed; */
  height: 10vh;
  background-color: red;
`;
function Cart() {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const { isCartOpen, setIsCartOpen } = useContext(SideBarContext);
  const cart = useSelector(getCart);
  const totlCartPrice = useSelector(getTotalCartPrice);
  const navigate = useNavigate();
  function handleNavigation() {
    console.log("clicked");
    navigate("/cart");
  }
  const toggleCartSideBar = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Button onClick={toggleCartSideBar} $variant={"black"}>
        <CartIcon
          height={"20px"}
          width={"20px"}
          color="#0f0d0d
"
        />
      </Button>
      <SideBar
        position="right"
        toggleSidebar={toggleCartSideBar}
        isSidebarOpen={isCartOpen}
      >
        <Div direction={"row"}>
          <Button onClick={toggleCartSideBar}>
            <span>
              <ArrowBackCircle size="20px" />
            </span>
          </Button>
          <span>My Cart</span>
        </Div>
        <CartDiv>
          {cart.cart.length > 0 ? (
            cart.cart.map((item) => (
              <CartItem
                id={item.id}
                itemPrice={item.price}
                image={item.image}
                title={item.title}
                itemQuantity={item.itemQuantity}
                totalPrice={item.totalPrice}
                key={item.id}
              />
            ))
          ) : (
            <span>Sorry there is no item in your cart.</span>
          )}
        </CartDiv>
        <Div direction={"column"}>
          <div>
            <span>Total Price </span>
            <span>{totlCartPrice}</span>
          </div>
          <div>
            <Button onClick={() => handleNavigation()}>
              Proceed to Checkout
            </Button>
          </div>
        </Div>
      </SideBar>
    </>
  );
}

export default Cart;
