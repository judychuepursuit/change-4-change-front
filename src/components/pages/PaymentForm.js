import React, { useState } from 'react';
import axios from 'axios';
import { useStripe, useElements } from "@stripe/react-stripe-js";
// import { CardElement } from "@stripe/react-stripe-js";

// import './PaymentForm.css'; // Make sure this CSS file has the necessary styles
import { useNavigate } from 'react-router-dom';
import './UpdatedPaymentForm.css'; // Make sure to rename your CSS file accordingly
import { CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";



const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

function getCardType(cardNumber) {
    const cardTypes = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        // ...other card regex patterns
    };

    for (const [cardType, pattern] of Object.entries(cardTypes)) {
        if (cardNumber.match(pattern)) return cardType;
    }

    return null; // or 'unknown' if you prefer
}  




const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [donationFrequency, setDonationFrequency] = useState("one-time");
    const [formErrors, setFormErrors] = useState({});
    const [cardError, setCardError] = useState(null);
    const [cardBrand, setCardBrand] = useState("");


    const handleCardNumberChange = async (event) => {
        if (event.error) {
            setCardError(event.error.message);
        } else {
            setCardError(null);
            
            // Set the card brand based on the card number
            // You may need to use a different method to retrieve the card number for security reasons
            const brand = getCardType(event.value);
            setCardBrand(brand);
        }
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;
    
        // Amount validation
        if (amount <= 0) {
            errors["amount"] = "Please enter a valid amount.";
            formIsValid = false;
        }
    
        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors["email"] = "Please enter a valid email.";
            formIsValid = false;
        }
    
        setFormErrors(errors);
        return formIsValid;
    };
    



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            setError('Stripe has not loaded');
            return;
        }

        setLoading(true);
        setError(null);
    

        // const cardElement = elements.getElement(CardElement);
        const cardNumberElement = elements.getElement(CardNumberElement);
        const cardExpiryElement = elements.getElement(CardExpiryElement);
        const cardCvcElement = elements.getElement(CardCvcElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            // card: cardElement,
            card: cardNumberElement, // You only need to pass one element here, Stripe will handle the rest
            billing_details: {
                name: `${firstName} ${lastName}`,
                email: email,
                // address: { // Uncomment and use if you want to send the postal code separately
                //     postal_code: zipCode
                // }
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        } 

        const paymentData = {
            paymentMethodId: paymentMethod.id,
            firstName,
            lastName,
            email,
            amount: parseInt(amount) * 100,
            donationFrequency, // Include the donation frequency in the payment data

        };

        // POST to your backend server
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/payment`, paymentData)
        .then(response => {
            setLoading(false);
            navigate('/payment-success');
        })
        .catch(err => {
            console.error('Payment error:', err);
            console.error('Server response:', err.response);
            // alert('Payment failed. Please try again.');
            setError('Payment failed. Please try again.');
            setLoading(false);
        });
    };

    return (
        <div className="content">
            <h1>Set Up Your Payment</h1>
            <p>Connect your preferred payment method and set your donation preferences.</p>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {formErrors["email"] && <div className="error-message">{formErrors["email"]}</div>}

                </div>

                {/* <div className="form-group">
                    <label htmlFor="amount">Amount ($)</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div> */}

                {/* <div className="form-group">
                    <label>Card Details</label>
                    <CardElement />
                </div> */}

                <div className="form-group">
                    <label>Donation Frequency</label>
                    <div className="radio-group">
                        <input 
                            type="radio" 
                            id="one-time" 
                            name="donationFrequency" 
                            value="one-time"
                            checked={donationFrequency === "one-time"}
                            onChange={(e) => setDonationFrequency(e.target.value)}
                        />
                        <label htmlFor="one-time">One-Time</label>
                        
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

                {/* Inline validation for amount */}
                <div className="form-group">
                    <label htmlFor="amount">Amount ($)</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                    {formErrors["amount"] && <div className="error-message">{formErrors["amount"]}</div>}
                </div>





                <div className="form-group">
                    <label>Card Number</label>
                    <CardNumberElement 
                        options={CARD_ELEMENT_OPTIONS}
                        onChange={(event) => {
                            if (event.error) {
                            setCardError(event.error.message);
                            } else {
                            setCardError(null);
                            }
                        }}
                    />
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

                <button type="submit" disabled={!stripe || loading}>{loading ? 'Processing...' : 'Pay Now'}</button>

            </form>

            <footer>
            <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
            </footer>
            
        </div>
    );
};

export default PaymentForm;

