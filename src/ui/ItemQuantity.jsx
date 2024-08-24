/* eslint-disable react/prop-types */
import { Input, NumItemsDiv } from "./CardItemStyles";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increasQuantity } from "../Features/Cart/CartSlice";

function ItemQuantity({ itemQuantity, id }) {
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleNeghtive() {
    if (itemQuantity > 1) {
      dispatch(decreaseQuantity(id));
    }
  }
  function handlePositive() {
    if (itemQuantity < 100) {
      dispatch(increasQuantity(id));
    }
  }
  return (
    <div>
      <NumItemsDiv>
        <Button onClick={() => handleNeghtive()}>-</Button>
        <Input value={itemQuantity} readOnly />
        <Button onClick={() => handlePositive()}>+</Button>
      </NumItemsDiv>
    </div>
  );
}

export default ItemQuantity;
