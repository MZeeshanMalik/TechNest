/* eslint-disable react/prop-types */
// import { Span } from "./NavbarStyles";
import Button from "../../ui/Button";
import { Delete } from "styled-icons/fluentui-system-regular";
import { CartItemDiv, Itemdiv } from "../../ui/CardItemStyles";
import { Image, PriceDiv, Span } from "../../ui/CardItemStyles";
import ItemQuantity from "../../ui/ItemQuantity";
import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";
function CartItem({ image, title, itemQuantity, id, itemPrice, totalPrice }) {
  const dispatch = useDispatch();
  function handleDeleteItem(id) {
    dispatch(deleteItem({ id }));
  }
  return (
    <>
      <Itemdiv>
        {/* <div> */}
        <CartItemDiv>
          <span>
            <Image src={`../../images/${image}`} height="50vh" width="50vh" />
          </span>
          <Span>{title}</Span>
          {/* <span></span> */}
          <Button
            onClick={() => handleDeleteItem(id)}
            height={"15vh"}
            $variant={"danger"}
          >
            <Delete size="20px" />
          </Button>
        </CartItemDiv>
        {/* </div> */}
        {/* <div> */}

        <PriceDiv>
          <span>Price</span>
          <span>
            {itemPrice} * {itemQuantity}= {totalPrice}
          </span>
        </PriceDiv>
        {/* </div> */}
        <ItemQuantity itemQuantity={itemQuantity} id={id} />
      </Itemdiv>
    </>
  );
}

export default CartItem;
