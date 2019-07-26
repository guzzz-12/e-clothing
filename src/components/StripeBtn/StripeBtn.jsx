import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeBtn = (props) => {
  console.log(props);
  const priceInCents = props.price * 100;
  const publicApiKey = "pk_test_jBRvI6n6qdWpsRB2FZXRfcVu00USOydagp";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is: $${props.price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicApiKey}
    />
  );
}

export default StripeBtn;
