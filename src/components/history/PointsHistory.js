import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const  PointsHistory = () => {
  const [transactionData, setTransactionData] = useState(null);

  // Mock fetch function for demonstration purposes
  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:3001/transactions');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  // Function to calculate reward points
  const calculateResults = (incomingData) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pointsPerTransaction = incomingData.map(transaction => {
      let points = 0;
      let over100 = transaction.amount - 100;

      if (over100 > 0) {
        points += over100 * 2;
      }

      if (transaction.amount > 1) {
        points += 1;
      }

      const month = new Date(transaction.created_at).getMonth();
      return { ...transaction, points, month };
    });

    let byCustomer = {};
    let totalPointsByCustomer = {};
    
    pointsPerTransaction.forEach(transaction => {
      let { custid, name, month, points } = transaction;

      if (!byCustomer[custid]) {
        byCustomer[custid] = [];
      }

      if (!totalPointsByCustomer[custid]) {
        totalPointsByCustomer[custid] = 0;
      }

      totalPointsByCustomer[custid] += points;

      if (byCustomer[custid][month]) {
        byCustomer[custid][month].points += points;
        byCustomer[custid][month].monthNumber = month;
        byCustomer[custid][month].numTransactions++;
      } else {
        byCustomer[custid][month] = {
          custid,
          name,
          monthNumber: month,
          month: months[month],
          numTransactions: 1,
          points
        };
      }
    });

    let tot = [];
    for (var custKey in byCustomer) {
      byCustomer[custKey].forEach(cRow => {
        tot.push(cRow);
      });
    }

    let totByCustomer = [];
    for (custKey in totalPointsByCustomer) {
      totByCustomer.push({
        name: custKey,
        points: totalPointsByCustomer[custKey]
      });
    }

    return {
      summaryByCustomer: tot,
      pointsPerTransaction,
      totalPointsByCustomer: totByCustomer
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTransactions();
      const results = calculateResults(data);
      setTransactionData(results);
    };

    fetchData();
  }, []);

  if (transactionData == null) {
    return <div>Loading...</div>;
  }

  // Assuming you want to display the total points for each customer
  return (
    <div>
      <h2>Total Points By Customer</h2>
      <ul>
        {transactionData.totalPointsByCustomer.map((customer, index) => (
          <li key={index}>
            <p>Name: {customer.name}</p>
            <p>Total Points: {customer.points}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointsHistory;
