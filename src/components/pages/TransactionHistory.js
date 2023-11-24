// TransactionHistory.js
import React, { useEffect, useState } from 'react';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3001/transactions');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTransactions(data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            Charity ID: {transaction.charity_id}, Amount: {transaction.amount}, Currency: {transaction.currency}, Donation Frequency: {transaction.donation_frequency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
