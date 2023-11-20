// import React, { useState } from 'react';
// import axios from 'axios';
// import { useStripe, useElements } from "@stripe/react-stripe-js";

// import { useNavigate } from 'react-router-dom';
// import './UpdatedPaymentForm.css'; // Make sure to rename your CSS file accordingly
// import { CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";


// const CARD_ELEMENT_OPTIONS = {
//     style: {
//       base: {
//         fontSize: '16px',
//         color: '#424770',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//       },
//       invalid: {
//         color: '#9e2146',
//       },
//     },
// };

// function getCardType(cardNumber) {
//     if (typeof cardNumber !== 'string') return null; // or 'unknown'

//     const cardTypes = {
//         visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
//         mastercard: /^5[1-5][0-9]{14}$/,
//         // ...other card regex patterns
//     };

//     for (const [cardType, pattern] of Object.entries(cardTypes)) {
//         if (cardNumber.match(pattern)) return cardType;
//     }

//     return null; // or 'unknown' if you prefer
// }


// const PaymentForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const navigate = useNavigate();

//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("sabri.mohiuddin@gmail.com");
//     const [amount, setAmount] = useState("");
//     const [donationFrequency, setDonationFrequency] = useState("one-time");
//     const [formErrors, setFormErrors] = useState({});
//     const [cardError, setCardError] = useState(null);
//     const [cardBrand, setCardBrand] = useState("");


//     const handleCardNumberChange = async (event) => {
//         console.log(event); // This will show you the structure of the event object

//         if (event.error) {
//             setCardError(event.error.message);
//         } else {
//             setCardError(null);
            
//             // Set the card brand based on the card number
//             // You may need to use a different method to retrieve the card number for security reasons
//             const brand = getCardType(event.value);
//             setCardBrand(brand);
//         }
//     };


//       // Function to handle the creation of the Stripe Payment Link
//     const handleCreatePaymentLink = async () => {
//     try {
//       // This would be your input values for product name and amount
//       const productName = 'Donation'; // Example product name
//       const amount = 1099; // Example amount in cents

//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create-payment-link`, {
//         productName,
//         amount,
//       });

//       const paymentLinkUrl = response.data.url;
//       window.open(paymentLinkUrl, '_blank'); // Open the Stripe Payment Link in a new tab
//         } catch (err) {
//       console.error('Error creating payment link:', err);
//       // Handle error, e.g., show an error message to the user
//         }
//     };


//     const validateForm = () => {
//         let errors = {};
//         let formIsValid = true;
    
//         // Amount validation
//         if (amount <= 0) {
//             errors["amount"] = "Please enter a valid amount.";
//             formIsValid = false;
//         }
    
//         // Email validation
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//             errors["email"] = "Please enter a valid email.";
//             formIsValid = false;
//         }
    
//         setFormErrors(errors);
//         return formIsValid;
//     };



//     const handleSubmit = async (event) => {
//         event.preventDefault();
    
//         if (!stripe || !elements) {
//             setError('Stripe has not loaded');
//             return;
//         }
    
//         if (!validateForm()) {
//             // If form validation fails, display errors
//             return;
//         }
    
//         setLoading(true);
//         setError(null);

//         const return_url = `http://localhost:3000/payment-success`;

//         try {
//             // Create a payment method
//             const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
//                 type: 'card',
//                 card: elements.getElement(CardNumberElement),
//                 billing_details: {
//                     name: `${firstName} ${lastName}`,
//                     email: email,
//                 },
//             });
    
//             if (stripeError) {
//                 setError(stripeError.message);
//                 setLoading(false);
//                 return;
//             }
    
//             // Create a customer (if you don't have one already)
//             const customerResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create-customer`, {
//                 email: email,
//             });
//             const customerId = customerResponse.data.customerId;
    
//             // Depending on the donation frequency, create a payment or subscription
//             if (donationFrequency === 'one-time') {
//                 // One-time payment

//                 // Extract the paymentMethod.id from the paymentMethod object
//                 const paymentMethodId = paymentMethod.id;

//                 // Send this ID with the request to your backend
//                 const paymentIntentResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create-payment-intent`, {
//                     amount: parseInt(amount) * 100, // Convert dollars to cents
//                     currency: 'usd',
//                     payment_method: paymentMethodId, // This is the correct key
//                     customerId: customerId,
//                     return_url, // Pass the return_url to the back-end

//                 });
    
//                 // Finalize the payment on the client
//                 const result = await stripe.confirmCardPayment(paymentIntentResponse.data);
//                 if (result.error) {
//                     setError(result.error.message);
//                     setLoading(false);
//                 } else {
//                     navigate('/payment-success'); // Redirect on success
//                 }
//             } else {
//                 // Recurring subscription
//                 const subscriptionResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create-subscription`, {
//                     customerId: customerId,
//                     paymentMethodId: paymentMethod.id, // Send the paymentMethodId to the backend
//                     priceId: 'price_1OC7w8Kw0bozpjFOGDdJwjGE', // Replace with the actual priceId from your Stripe dashboard
//                 });
    
//                 // Finalize the subscription on the client
//                 const result = await stripe.confirmCardPayment(subscriptionResponse.data.clientSecret);
//                 if (result.error) {
//                     setError(result.error.message);
//                     setLoading(false);
//                 } else {
//                     navigate('/payment-success'); // Redirect on success
//                 }
//             }
//         } catch (err) {
//             setError('An error occurred. Please try again.');
//             setLoading(false);
//         }
//     };



    

//     return (
//         <div className="content">
//             <h1>Set Up Your Payment</h1>
//             <p>Connect your preferred payment method and set your donation preferences.</p>
//             <form onSubmit={handleSubmit}>

//                 <div className="form-group">
//                     <label htmlFor="firstName">First Name</label>
//                     <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="lastName">Last Name</label>
//                     <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     {formErrors["email"] && <div className="error-message">{formErrors["email"]}</div>}

//                 </div>

//                 <div className="form-group">
//                     <label>Donation Frequency</label>
//                     <div className="radio-group">
//                         <input 
//                             type="radio" 
//                             id="one-time" 
//                             name="donationFrequency" 
//                             value="one-time"
//                             checked={donationFrequency === "one-time"}
//                             onChange={(e) => setDonationFrequency(e.target.value)}
//                         />
//                         <label htmlFor="one-time">One-Time</label>
                        
//                         <input 
//                             type="radio" 
//                             id="monthly" 
//                             name="donationFrequency" 
//                             value="monthly"
//                             checked={donationFrequency === "monthly"}
//                             onChange={(e) => setDonationFrequency(e.target.value)}
//                         />
//                         <label htmlFor="monthly">Monthly</label>
//                     </div>
//                 </div>

//                 {/* Inline validation for amount */}
//                 <div className="form-group">
//                     <label htmlFor="amount">Amount ($)</label>
//                     <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
//                     {formErrors["amount"] && <div className="error-message">{formErrors["amount"]}</div>}
//                 </div>

//                 <div className="form-group">
//                     <label>Card Number</label>
//                     <CardNumberElement options={CARD_ELEMENT_OPTIONS} onChange={handleCardNumberChange} />
//                     {cardError && <div className="error-message">{cardError}</div>}

//                 </div>

//                 <div className="form-group">
//                     <label>Expiration Date</label>
//                     <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
//                 </div>
//                 <div className="form-group">
//                     <label>CVC</label>
//                     <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
//                 </div>


//                 {error && <div className="error-message">{error}</div>}


//                 <button type="submit" disabled={!stripe || loading}>{loading ? 'Processing...' : 'Pay Now'}</button>


//             </form>

//             <footer>
//             <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
//             </footer>
            
//         </div>
//     );
// };

// export default PaymentForm;













import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import './UpdatedPaymentForm.css'; // Make sure to rename your CSS file accordingly



const PaymentForm = ({ recipient }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [amount, setAmount] = useState('');
  const [donationFrequency, setDonationFrequency] = useState('one-time');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        email,
      },
    });

    if (error) {
      console.log('[error]', error);
      return;
    }

    const { id: payment_method } = paymentMethod;

    const charityId = recipient; // Assuming recipient is the charity's Stripe ID


        // Now add the charityId to the body of the POST request
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: 'usd',
        paymentMethodId: payment_method,
        email,
        charityId,
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
        }
      }
    } else {
      // Handle subscription logic here
    }
  };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <CardElement />
  //     <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
  //     <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
  //     <select value={donationFrequency} onChange={(e) => setDonationFrequency(e.target.value)}>
  //       <option value="one-time">One Time</option>
  //       <option value="monthly">Monthly</option>
  //     </select>
  //     <button type="submit" disabled={!stripe}>Pay Now</button>
  //   </form>
  // );

  return (
    <div className="content">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <h2 style={{ textAlign: 'center' }}>payment set up</h2>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="First Name" required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Donation Frequency</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="one-time"
                checked={donationFrequency === 'one-time'}
                onChange={(e) => setDonationFrequency(e.target.value)}
              />
              One Time
            </label>
            <label>
              <input
                type="radio"
                value="monthly"
                checked={donationFrequency === 'monthly'}
                onChange={(e) => setDonationFrequency(e.target.value)}
              />
              Monthly
            </label>
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
        <button type="submit" disabled={!stripe} style={{ background: '#ff6f61', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', marginTop: '10px' }}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;

