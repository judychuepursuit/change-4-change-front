import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import './UpdatedPaymentForm.css'; 


// const PaymentForm = ({ recipient }) => {
const PaymentForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [donationFrequency, setDonationFrequency] = useState('one-time');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [charityName, setCharityName] = useState('Select a Charity');
  const charities = [
    { name: 'ASPCA', id: 'acct_1OEpakQTN4c4HEpl' },
    { name: 'Feeding America', id: 'acct_1OCtfWQPst9pmMFX' },
    { name: 'Red Cross', id: 'acct_1OCtgDQRnTyfQud7' },
    { name: 'UNICEF', id: 'acct_1OCtjmQS1DLaPBq0' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when the process starts

    if (!stripe || !elements) {
      console.log('Stripe.js has not loaded yet.');
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {email},
    });

    if (error) {
      console.log('[error]', error);
      return;
    }

    const { id: payment_method } = paymentMethod;
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        amount,
        currency: 'usd',
        paymentMethodId: payment_method,
        email,
        charityName, 
        donationFrequency
      }),
    });

    const paymentIntent = await response.json();
    if (donationFrequency === 'one-time') {
      const result = await stripe.confirmCardPayment(paymentIntent.clientSecret);
      if (result.error) {
        console.log(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          console.log('Money is in the bank!');
          navigate('/payment-success'); // Redirect to a success page
        }
      }
    } else {
      // For subscriptions
      if (paymentIntent.status === 'requires_action') {
        // Redirect to Stripe's hosted page for additional authentication
        const result = await stripe.confirmCardPayment(paymentIntent.clientSecret);
        handleSubscriptionResult(result);
      } else {
        // Subscription setup successful, no additional action required
        console.log('Subscription set up successfully!');
        navigate('/payment-success'); // Redirect to a success page
      }
    }
    setIsLoading(false);

  };

  const handleSubscriptionResult = (result) => {
    if (result.error) {
      // Handle errors, such as declined card, etc.
      console.log(result.error.message);
    } else {
      if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        console.log('First subscription payment succeeded!');
        navigate('/payment-success'); // Redirect to a success page
      }
    }
  };

  

  return (
    <div className="payment-container">
      <div className="payment-form">
        <h2>payment</h2>
        <form onSubmit={handleSubmit}>
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
          {/* <label>Charity Name</label> */}
          <select
            value={charityName}
            onChange={(e) => setCharityName(e.target.value)}
            required
          >
            <option value="">Select a Charity</option>
            {charities.map((charity, index) => (
              <option key={index} value={charity.name}>{charity.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Donation Frequency</label>
          <div className="radio-group">

          <div className="radio-option">
            <label>
              <input
                type="radio"
                name="donationFrequency"
                value="one-time"
                checked={donationFrequency === 'one-time'}
                onChange={(e) => setDonationFrequency(e.target.value)}
              />
              One Time
            </label>
          </div>


            <div className="radio-option">
              <label>
                <input
                  type="radio"
                  name="donationFrequency"
                  value="monthly"
                  checked={donationFrequency === 'monthly'}
                  onChange={(e) => setDonationFrequency(e.target.value)}
                />
                Monthly
              </label>
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
        <button type="submit" disabled={!stripe || isLoading}>
          {isLoading ? (
            <>
              <div className="spinner"></div>
              Processing...
            </>
          ) : (
            "Pay Now"
          )}
        </button>
      </form>
    </div>
  </div>


  );
};

export default PaymentForm;


