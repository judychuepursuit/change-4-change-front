import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import "./PaymentForm.css";

const PaymentForm = (props) => {
  console.log(props);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("one-time");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [charityName, setCharityName] = useState("Select a Charity");
  const charities = [
    { name: "ASPCA", id: "acct_1OEpakQTN4c4HEpl" },
    { name: "Feeding America", id: "acct_1OCtfWQPst9pmMFX" },
    { name: "Red Cross", id: "acct_1OCtgDQRnTyfQud7" },
    { name: "UNICEF", id: "acct_1OCtjmQS1DLaPBq0" },
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsLoading(true); // Set loading to true when the process starts
    setIsSubmitting(true); // Disable the button
    // Early return if Stripe hasn't loaded yet
    if (!stripe || !elements) {
      console.error("Stripe.js has not loaded yet.");
      setIsLoading(false);
      setIsSubmitting(false); // Re-enable the form for future submissions
      return;
    }
    // Validate the amount before attempting to process the payment
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      setIsLoading(false);
      setIsSubmitting(false); // Re-enable the form for future submissions
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: { email },
    });
    if (error) {
      alert(error.message); // Displaying error to the user
      setIsLoading(false);
      setIsSubmitting(false); // Re-enable the form for future submissions
      return;
    }
    try {
      // console.log('Calling API to create payment intent');
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/create-payment-intent`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount,
            currency: "usd",
            paymentMethodId: paymentMethod.id,
            email,
            charityName,
            donationFrequency,
          }),
        }
      );
      // console.log(response)
      const paymentIntentResponse = await response.json();
      // console.log(paymentIntentResponse)
      if (paymentIntentResponse.status === "succeeded") {
        navigate("/payment-success");
      } else if (
        paymentIntentResponse.status === "requires_action" ||
        paymentIntentResponse.status === "requires_confirmation"
      ) {
        const result = await stripe.confirmCardPayment(
          paymentIntentResponse.clientSecret
        );
        if (result.error) {
          alert(result.error.message); // Displaying error to the user
        } else if (
          result.paymentIntent &&
          result.paymentIntent.status === "succeeded"
        ) {
          navigate("/payment-success");
        }
      } else {
        console.log(
          `Unhandled payment intent status: ${paymentIntentResponse.status}`
        );
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while processing your payment."); // Displaying error to the user
    }

    setIsLoading(false);
    setIsSubmitting(false); // Re-enable the form for future submissions, if necessary
  };

  return (
    <div className="payment-container">
      <form onSubmit={handleSubmit} className="payment-form">
        <h2>payment</h2>
        <div className="form-group inline">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="form-group">
          {/* <label>Email</label> */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <select
            value={charityName}
            onChange={(e) => setCharityName(e.target.value)}
            required
          >
            <option value="">Select a Charity</option>
            {charities.map((charity, index) => (
              <option key={index} value={charity.name}>
                {charity.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <div className="donation-frequency-box">
            <label className="donation-frequency-label">
              Donation Frequency
            </label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="one-time"
                  name="donationFrequency"
                  value="one-time"
                  checked={donationFrequency === "one-time"}
                  onChange={(e) => setDonationFrequency(e.target.value)}
                />
                <label htmlFor="one-time">One Time</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="monthly"
                  name="donationFrequency"
                  value="monthly"
                  checked={donationFrequency === "monthly"}
                  onChange={(e) => setDonationFrequency(e.target.value)}
                />
                <label htmlFor="monthly">Monthly</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="form-group">
          <label>Card Information</label>
          <CardElement />
        </div>
        <button type="submit" disabled={!stripe || isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Processing...
            </>
          ) : (
            "donate now"
          )}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
