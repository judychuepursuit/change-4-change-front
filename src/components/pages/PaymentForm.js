import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import './UpdatedPaymentForm.css'; 


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
      console.error('Stripe.js has not loaded yet.');
      setIsLoading(false);
      return;
    }

    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.'); // Example of a simple validation message
      setIsLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {email},
    });

    if (error) {
      alert(error.message); // Displaying error to the user
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency: 'usd',
          paymentMethodId: paymentMethod.id,
          email,
          charityName,
          donationFrequency
        }),
      });

      const paymentIntentResponse = await response.json();

      if (paymentIntentResponse.status === 'succeeded') {
        navigate('/payment-success');
      } else if (paymentIntentResponse.status === 'requires_action' || 
                 paymentIntentResponse.status === 'requires_confirmation') {
        const result = await stripe.confirmCardPayment(paymentIntentResponse.clientSecret);
        if (result.error) {
          alert(result.error.message); // Displaying error to the user
        } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
          navigate('/payment-success');
        }
      } else {
        console.log(`Unhandled payment intent status: ${paymentIntentResponse.status}`);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while processing your payment.'); // Displaying error to the user
    }

    setIsLoading(false);
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

                {/* Inline validation for amount */}
                <div className="form-group">
                    <label htmlFor="amount">Amount ($)</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                    {formErrors["amount"] && <div className="error-message">{formErrors["amount"]}</div>}
                </div>

                <div className="form-group">
                    <label>Card Number</label>
                    <CardNumberElement options={CARD_ELEMENT_OPTIONS} onChange={handleCardNumberChange} />

                    {/* <CardNumberElement 
                        options={CARD_ELEMENT_OPTIONS}
                        onChange={(event) => {
                            if (event.error) {
                            setCardError(event.error.message);
                            } else {
                            setCardError(null);
                            }
                        }}
                    /> */}
                    {cardError && <div className="error-message">{cardError}</div>}

                </div>

                {/* <div className="form-group">
                    <label>Card Number</label>
                    <CardNumberElement 
                        options={CARD_ELEMENT_OPTIONS}
                        onChange={handleCardNumberChange}
                    />

                    {cardBrand && <div className="card-brand">{`Card Brand: ${cardBrand}`}</div>}
                    {cardError && <div className="error-message">{cardError}</div>}
                </div> */}


                <div className="form-group">
                    <label>Expiration Date</label>
                    <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
                </div>
                <div className="form-group">
                    <label>CVC</label>
                    <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
                </div>



                {/* <div className="form-group">
                    <label>Card Details</label>
                    <CardElement />
                </div> */}


                {/* <div className="form-group">
                    <label htmlFor="amount">Amount ($)</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div> */}

                {error && <div className="error-message">{error}</div>}
                {/* <button type="submit" disabled={!stripe || loading}>Pay Now</button> */}

                {/* Update the button text and disabled state */}
                {/* <button type="submit" disabled={!stripe || loading}>{loading ? 'Processing...' : 'Submit Payment'}</button> */}

                <button className="form-button" type="submit" disabled={!stripe || loading}>{loading ? 'Processing...' : 'Pay Now'}</button>

                <button className="form-button" onClick={handleCreatePaymentLink} disabled={loading}>
                    {loading ? 'redirecting...' : 'Or Donate with Stripe'}
                </button>

            </form>

            <footer>
            <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
            </footer>
            
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

