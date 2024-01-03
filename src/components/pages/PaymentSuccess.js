import React from "react";
import "./PaymentSuccess.css";
import logo from "../../images/img-6.png";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleViewTransactions = () => {
    navigate("/TransactionHistory");
  };

  return (
    <div className="success-container">
      <h1 className="success-title">payment successful!</h1>
      <div className="success-logo">
        <img src={logo} alt="Logo" />
      </div>
      <p className="thank-you-message">
        THANK YOU for your donations
        <br />
      </p>
      <button
        className="transaction-history-button"
        onClick={handleViewTransactions}
      >
        click to view transaction history
      </button>
      <p className="email-receipt-message">
        <strong>
          A copy of your receipt will be sent to your email shortly.
        </strong>
      </p>
    </div>
  );
};

export default PaymentSuccess;
