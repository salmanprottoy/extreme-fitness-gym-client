import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "../Checkout/SimpleCardForm";
import SplitCardForm from "../Checkout/SplitCardForm";

const Checkout = ({ handlePayment }) => {
  const stripePromise = loadStripe(
    "pk_test_51H0TWCEGNSwuaWOgyLDTW04CcNcTPguS1rwETtSPTRH1XbBFqERIQKBjxm9Pi4sHSlEt5PoGSPMogcxEJkpHIwbU00oW9A6kjA"
  );
  return (
    <div className="mt-5 mb-5">
      <h2 className="text-info text-left m-2 p-2">Enter Card Information</h2>
      <div className="container">
        <Elements stripe={stripePromise}>
          <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
