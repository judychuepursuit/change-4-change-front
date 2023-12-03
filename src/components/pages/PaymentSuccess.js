import React from 'react';
import './PaymentSuccess.css'; 
import logo from '../../images/img-6.png';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate();

    const handleViewTransactions = () => {
        navigate('/TransactionHistory');
    };

    return (
        <div className="success-container">
            <h1 className="success-title">success!</h1>
            <div className="success-logo">
                <img src={logo} alt="Logo" />
            </div>
            <h2 className="success-message">payment successful!</h2>
            <p className="thank-you-message">THANK YOU for your donations<br/>Your payment was successful.</p>
            <button className="transaction-history-button" onClick={handleViewTransactions}>
                click here to view transaction history
            </button>
        </div>
    );
}

export default PaymentSuccess;


