import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../Features/cart/CartSlice";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const ConfirmationMessage = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f6f6f6;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 30px;
`;

const OrderDetails = styled.div`
  margin-bottom: 30px;
`;

const OrderSummaryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;

  th,
  td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f9f9f9;
    font-weight: bold;
  }

  td {
    font-size: 14px;
  }
`;

const DetailsRow = styled.tr`
  background-color: ${(props) => (props.highlight ? "#f6f6f6" : "none")};
`;
const H2 = styled.h2`
  color: #0dd656;
`;

const OrderConfirmation = () => {
  const totalPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  const date = new Date();
  return (
    <>
      <Container>
        <ConfirmationMessage>
          <H2> ✅ Thank you. Your order has been received.</H2>
          <OrderSummaryTable>
            <tbody>
              <DetailsRow>
                <th>Order number:</th>
                <td>298{Math.ceil(Math.random(98))}</td>
                <th>Date:</th>
                <td>{date.toDateString()}</td>
                <th>Total:</th>
                <td>Rs {totalPrice}</td>
                <th>Payment method:</th>
                <td>Cash on delivery</td>
              </DetailsRow>
            </tbody>
          </OrderSummaryTable>
        </ConfirmationMessage>

        <OrderDetails>
          <h3>Order details</h3>
          <OrderSummaryTable>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cart.cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.title} × {item.itemQuantity}
                  </td>
                  <td>Rs {item.totalPrice}</td>
                </tr>
              ))}
              {/* <tr>
                <td>Haier 8 Kg Top Load Washing Machine HWM-80-1269X × 1</td>
                <td>Rs59,500</td>
              </tr> */}
              <DetailsRow>
                <td>Subtotal:</td>
                <td>Rs {totalPrice}</td>
              </DetailsRow>
              <DetailsRow>
                <td>Shipping:</td>
                <td>
                  Shipping charges will be confirmed by our representative on
                  call at order confirmation
                </td>
              </DetailsRow>
              <DetailsRow>
                <td>Payment method:</td>
                <td>Cash on delivery</td>
              </DetailsRow>
              <DetailsRow highlight>
                <td>Total:</td>
                <td>Rs59,500</td>
              </DetailsRow>
            </tbody>
          </OrderSummaryTable>
        </OrderDetails>
      </Container>
    </>
  );
};

export default OrderConfirmation;
