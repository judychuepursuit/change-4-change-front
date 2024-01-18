import React, { useState, useEffect } from "react";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import "./PaymentForm.css";

// Define the minimum donation amounts for one-time and monthly donations
const MIN_DONATION_ONE_TIME = 10.66;
const MIN_DONATION_MONTHLY = 0.66;
const DAILY_RATE = 0.66; // Daily rate of $0.66

// const predefinedAmounts = [5, 25, 50, 100]; // New predefined amounts array
// Define separate arrays for one-time and monthly amounts
const oneTimeAmounts = [10.66, 25, 50, 100]; // Update this array as needed
const monthlyAmounts = [25, 50, 100]; // Update this array as needed

const AmountButton = ({ amount, selectedAmount, setAmount }) => {
  // Add a selected class if this amount is selected
  const isSelected = amount.toString() === selectedAmount;
  const className = isSelected ? "amount-button selected" : "amount-button";
  return (
    <button
      type="button"
      className={className}
      aria-pressed={isSelected ? "true" : "false"} // for accessibility
      onClick={() => setAmount(amount.toString())}
    >
      ${amount}
    </button>
  );
};
const PaymentForm = (props) => {
  console.log(props);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("one-time");
  // Use two separate states for selected amounts for one-time and monthly
  const [selectedOneTimeAmount, setSelectedOneTimeAmount] = useState("");
  const [selectedMonthlyAmount, setSelectedMonthlyAmount] = useState("");
  const [customDailyAmount, setCustomDailyAmount] = useState("");

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [charityName, setCharityName] = useState("Select a Charity");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(""); // New state for selected amount
  const TickMark = () => <span className="tick-mark">✔</span>;
  const [coverFees, setCoverFees] = useState(false);
  const charities = [
    { name: "ASPCA", dbId: 1, stripeId: "acct_1OROGCQMOAQH13kG" },
    { name: "Feeding America", dbId: 2, stripeId: "acct_1OCtfWQPst9pmMFX" },
    { name: "Red Cross", dbId: 3, stripeId: "acct_1OCtgDQRnTyfQud7" },
    { name: "UNICEF", dbId: 4, stripeId: "acct_1OROrd4CW30LkdW3" },
  ];
  // This function could be more complex depending on how fees are calculated
  const calculateFees = (amount) => {
    const feePercentage = 0.029; // for example, 2.9% fee
    const flatFee = 0.03; // plus 30 cents flat fee
    return amount * feePercentage + flatFee;
  };
  const formatCurrency = (value) => {
    // If there's no decimal point and it's not empty, append ".00"
    if (!value.includes(".") && value !== "") {
      return `${value}.00`;
    }
    return value; // Return the value as is if it's empty or already has a decimal point
  };
  const handleAmountChange = (e) => {
    let value = e.target.value;
    // Allow the value to be updated directly without formatting while typing
    setAmount(value);
    setSelectedAmount(value);
  };
  const handleBlur = () => {
    // Format the value when the input field loses focus
    const formattedValue = formatCurrency(amount);
    setAmount(formattedValue);
    setSelectedAmount(formattedValue);
  };

  const handleAmountButtonClick = (value, isMonthly = false) => {
    const formattedValue = formatCurrency(value.toString());
    setAmount(formattedValue);
    if (isMonthly) {
      setSelectedMonthlyAmount(formattedValue);
      // Calculate the daily amount by dividing the monthly amount by 30 (approximation)
      const dailyAmount = (value / 30).toFixed(2); // This will give you the daily amount
      setCustomDailyAmount(dailyAmount); // Update the customDailyAmount state
    } else {
      setSelectedOneTimeAmount(formattedValue);
    }
  };

  const handleCoverFeesChange = (e) => {
    const isChecked = e.target.checked;
    setCoverFees(isChecked);
    // Recalculate the amount to include fees if checkbox is checked
    if (isChecked) {
      const fees = calculateFees(parseFloat(amount));
      setAmount((parseFloat(amount) + fees).toFixed(2)); // Update amount to include fees
    } else {
      // If unchecked, you could subtract the fees or reset to the original amount
      // This depends on how you're storing the original amount before fees are added
    }
  };
  const handleDonationFrequencyChange = (frequency) => {
    // Update the donation frequency
    setDonationFrequency(frequency);

    // Reset the selected amounts when the frequency changes
    setSelectedOneTimeAmount("");
    setSelectedMonthlyAmount("");
    // Also reset the input amount
    setAmount("");
  };
  const handleDailyRateChange = () => {
    // Assuming 30 days in a month for simplicity
    const monthlyTotal = DAILY_RATE * 30;
    setAmount(monthlyTotal.toFixed(2));
    setSelectedMonthlyAmount(monthlyTotal.toFixed(2));
    // Set the customDailyAmount state to the DAILY_RATE constant
    setCustomDailyAmount(DAILY_RATE.toFixed(2)); // Ensure that DAILY_RATE is in the correct format
  };

  const handleCustomDailyAmountChange = (event) => {
    const inputVal = event.target.value;

    // Set the input value directly without parsing it to allow for decimal input
    setCustomDailyAmount(inputVal);

    // Only perform calculations if the input value is a valid number
    const daily = parseFloat(inputVal);
    if (!isNaN(daily) && inputVal.trim() !== "") {
      const monthlyTotal = daily * 30; // Assuming 30 days for simplicity
      setAmount(monthlyTotal.toFixed(2));
      setSelectedMonthlyAmount(monthlyTotal.toFixed(2));
    } else {
      // If the input is not a number, clear the related fields
      setAmount("");
      setSelectedMonthlyAmount("");
    }
  };

  // States to handle dynamic padding and footer height
  const [topPadding, setTopPadding] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  // Function to update padding based on element sizes
  const updatePadding = () => {
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const footerHeight = document.querySelector("footer")?.offsetHeight || 0;
    setTopPadding(headerHeight + 20); // add an extra 20px or more if needed
    setFooterHeight(footerHeight);
  };

  // Update padding on mount and on window resize
  useEffect(() => {
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  // Add a new button for the daily rate in the monthlyAmounts section
  const MonthlyAmountButton = ({ dailyRate, selectedAmount, setAmount }) => {
    // Add a selected class if this amount is selected
    const isSelected = dailyRate.toString() === selectedAmount;
    const className = isSelected ? "amount-button selected" : "amount-button";
    return (
      <button
        type="button"
        className={className}
        aria-pressed={isSelected ? "true" : "false"} // for accessibility
        onClick={() => setAmount(dailyRate.toString())}
      >
        ${dailyRate} per day
      </button>
    );
  };

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
    // Find the charity object based on the selected charity name
    const selectedCharity = charities.find(
      (charity) => charity.name === charityName
    );
    // If charity is not found, selectedCharity will be undefined
    if (!selectedCharity) {
      alert("Please select a valid charity.");
      setIsLoading(false);
      setIsSubmitting(false); // Re-enable the form for future submissions
      return;
    }
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
    // Prepare the new request body with charityId
    const requestBody = {
      amount,
      currency: "usd",
      paymentMethodId: paymentMethod.id,
      email,
      charityId: selectedCharity.dbId, // Use the charity's database ID
      donationFrequency,
      firstName,
      lastName,
    };
    try {
      // console.log('Calling API to create payment intent');
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/create-payment-intent`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
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
    <div
      className="payment-container"
      style={{
        "--top-padding": `${topPadding}px`,
        "--footer-height": `${footerHeight}px`,
      }}
    >
      <form onSubmit={handleSubmit} className="payment-form">
        <h2>payment</h2>

        <div className="form-group inline">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <p className="receipt-notice">Your receipt will be emailed here.</p>
        </div>

        <div className="form-group">
          <select
            className="select-charity"
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
            <div className="toggle-button-container">
              <button
                type="button"
                className={`toggle-button ${
                  donationFrequency === "one-time" ? "active" : ""
                }`}
                onClick={() => setDonationFrequency("one-time")}
              >
                {donationFrequency === "one-time" && <TickMark />} One-time
              </button>
              <button
                type="button"
                className={`toggle-button ${
                  donationFrequency === "monthly" ? "active" : ""
                }`}
                onClick={() => setDonationFrequency("monthly")}
              >
                {donationFrequency === "monthly" && <TickMark />} Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Amount ($)</label>
          {donationFrequency === "one-time" ? (
            <>
              <p>Choose a preset amount for one-time donation.</p>
              <div className="predefined-amounts">
                {oneTimeAmounts.map((amountValue) => (
                  <AmountButton
                    key={amountValue}
                    amount={amountValue}
                    selectedAmount={selectedOneTimeAmount}
                    setAmount={() => handleAmountButtonClick(amountValue)}
                  />
                ))}
              </div>
              {/* <p>The minimum one-time donation is $10.66</p> */}
            </>
          ) : (
            <>
              <p>Choose a preset amount for monthly donation.</p>
              <button type="button" onClick={handleDailyRateChange}>
                $0.66 per day
              </button>
              <div className="predefined-amounts">
                {monthlyAmounts.map((amountValue) => (
                  <AmountButton
                    key={amountValue}
                    amount={amountValue}
                    selectedAmount={selectedMonthlyAmount}
                    setAmount={() => handleAmountButtonClick(amountValue, true)}
                  />
                ))}
              </div>
              {/* <button type="button" onClick={handleDailyRateChange}>
                $0.66 per day - per month
              </button> */}
              <input
                type="text"
                className="custom-daily-amount-input"
                placeholder="Enter a custom daily amount"
                value={customDailyAmount}
                onChange={handleCustomDailyAmountChange}
              />

              <p>
                The daily rate is billed monthly and not available for one-time
                donations.
              </p>
            </>
          )}
          <input
            type="text"
            className="custom-amount-input"
            value={amount}
            onChange={handleAmountChange}
            onBlur={handleBlur}
            placeholder="Enter a custom amount here"
            pattern="\d+(\.\d{2})?"
            required
          />
          <p className="amount-notice">
            The minimum{" "}
            <span style={{ fontWeight: "bold" }}>
              {donationFrequency === "one-time" ? "one-time" : "daily"}
            </span>{" "}
            donation is{" "}
            <span style={{ fontWeight: "bold" }}>
              $
              {donationFrequency === "one-time"
                ? MIN_DONATION_ONE_TIME.toFixed(2)
                : MIN_DONATION_MONTHLY.toFixed(2)}
            </span>
          </p>
        </div>

        <div className="form-group">
          <label className="fees-cover-checkbox">
            <input
              type="checkbox"
              checked={coverFees}
              onChange={handleCoverFeesChange}
            />
            I'd like to include the nominal processing fees associated with my
            donation.
          </label>
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
