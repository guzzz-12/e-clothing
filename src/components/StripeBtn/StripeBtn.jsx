import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeBtn = (props) => {
  const priceInCents = props.price * 100;
  const publicApiKey = "pk_test_jBRvI6n6qdWpsRB2FZXRfcVu00USOydagp";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceInCents,
        token: token
      }
    })
    .then((response) => {
      alert("Payment successful")
    })
    .catch((error) => {
      console.log(`Peyment error: ${JSON.parse(error)}`);
      alert("There was an issue with your payment. Please make sure you used a correct cedit card")
    });
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
