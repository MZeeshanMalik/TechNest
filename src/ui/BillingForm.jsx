import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../Features/Cart/CartSlice";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const FormSection = styled.div`
  flex: 1 1 45%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const OrderSummary = styled.div`
  flex: 1 1 45%;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-left: 14px;
  height: fit-content;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  background-color: #8f3bd9;
  color: white;
  border-radius: 4px;
`;

const BillingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const TotalCartPrice = useSelector(getTotalCartPrice);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address) newErrors.address = "Street address is required";
    if (!formData.city) newErrors.city = "Town/City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/order-confirmation");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormSection>
        <H2>Billing details</H2>
        <Label>First name *</Label>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}

        <Label>Last name *</Label>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}

        <Label>Street address *</Label>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}

        <Label>Town / City *</Label>
        <Input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}

        <Label>State *</Label>
        <Input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
        {errors.state && <p style={{ color: "red" }}>{errors.state}</p>}

        <Label>Phone *</Label>
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

        <Label>Email address (optional)</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Label>Order notes (optional)</Label>
        <TextArea
          rows="4"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </FormSection>
      <OrderSummary>
        <h2>Your order</h2>
        <p>Subtotal: Rs {TotalCartPrice}</p>
        <p>Shipping: Will be confirmed</p>
        <p>Total: Rs {TotalCartPrice}</p>
        <Label>Payment method</Label>
        <Checkbox type="radio" name="payment" defaultChecked />
        <Label>Cash on delivery</Label>
        <Checkbox
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
        />
        <Label>
          I have read and agree to the website terms and conditions *
        </Label>
        {errors.agreeToTerms && (
          <p style={{ color: "red" }}>{errors.agreeToTerms}</p>
        )}

        <Button type="submit" width={"100%"} height={"100%"}>
          PLACE ORDER
        </Button>
      </OrderSummary>
    </FormContainer>
  );
};

export default BillingForm;
