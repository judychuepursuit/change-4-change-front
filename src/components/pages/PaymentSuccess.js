import React from 'react';
import './PaymentSuccess.css'; 
import logo from '../../images/img-6.jpeg';

const PaymentSuccess = () => {
    return (
        <div className="success-container">
            <h1 className="success-title">SUCCESS!</h1>

            <div className="success-logo">
                <img src={logo} alt="Logo" />
            </div>
            <h2 className="success-message">Payment Successful!</h2>
            <p className="thank-you-message">THANK YOU for your donations<br/>Your payment was successful.</p>
            <button className="transaction-history-button">CLICK HERE TO VIEW TRANSACTION HISTORY</button>
            {/* Additional content */}
        </div>
    );
}

export default PaymentSuccess;


