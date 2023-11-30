import React, { useEffect, useState } from 'react';
import './TransactionHistory.css'; 

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  

  useEffect(() => {
    // console.log('TransactionHistory component props:', props);
    // console.log('TransactionHistory component state:', state);
    console.log('Calling API to create payment intent');
    const fetchTransactions = async () => {
      console.log('Fetching transactions');
      try {
        const response = await fetch('http://localhost:3001/transactions');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data.map(t => t.created_at)); // This will log all the created_at values
        // Log the data to see what's actually coming from the server
        console.log(data);
        // Check the format of created_at
        data.forEach(transaction => {
          console.log(transaction.created_at);
          console.log(new Date(transaction.created_at).toString());
        });
        setTransactions((prevTransactions) => {
          // Assuming you have unique IDs for each transaction
          const newTransactions = data.filter(
            (dataItem) =>
              !prevTransactions.some(
                (prevItem) => prevItem.id === dataItem.id
              )
          );
          return [...prevTransactions, ...newTransactions];
        });
              } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchTransactions();
  }, []);
  
// Function to format the date
const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true // or false if you want 24-hour time
  };
  return new Date(dateString).toLocaleString(undefined, options);
};

  return (
        <div className="transaction-history-container">
          <div className="transaction-history">
            <h2>transaction history</h2>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index} className="transaction-item">
                  <h4>Charity: {transaction.name}</h4>
                  <p className="transaction-item-amount">Amount: ${transaction.amount}</p> 
                  <p>Currency: {transaction.currency}</p>
                  <p>Donation Frequency: {transaction.donation_frequency}</p>
                  <p>Donation Time: {formatDate(transaction.created_at)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
  );
};

export default TransactionHistory;


