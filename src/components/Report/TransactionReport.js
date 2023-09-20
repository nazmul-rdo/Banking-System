import React, { useState } from 'react';

function TransactionReport() {
  const [transactionsData] = useState([
    { id: 1, date: '2023-09-01', description: 'Salary', amount: 5000 },
    { id: 2, date: '2023-09-02', description: 'Rent', amount: -1500 },
    { id: 3, date: '2023-09-03', description: 'Utilities', amount: -200 },
    { id: 4, date: '2023-09-04', description: 'Groceries', amount: -300 },
    { id: 5, date: '2023-10-01', description: 'Bonus', amount: 1000 },
    { id: 6, date: '2023-10-02', description: 'Rent', amount: -1500 },
    { id: 7, date: '2023-10-03', description: 'Utilities', amount: -200 },
    { id: 8, date: '2023-10-04', description: 'Groceries', amount: -300 },
  ]);

  const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const filteredTransactions = selectedMonth
    ? transactionsData.filter(
        (transaction) =>
          new Date(transaction.date).getMonth() === parseInt(selectedMonth) - 1
      )
    : transactionsData;

  const calculateIncome = () => {
    const income = filteredTransactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((total, transaction) => total + transaction.amount, 0);

    return income;
  };

  const calculateExpense = () => {
    const expense = filteredTransactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((total, transaction) => total + transaction.amount, 0);

    return Math.abs(expense);
  };

  return (
    <div>
      <h1>Transaction Report</h1>
      <div>
        <label>Select Month:</label>
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">All</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Income: {calculateIncome()}</h2>
        <h2>Expense: {calculateExpense()}</h2>
      </div>
    </div>
  );
}

export default TransactionReport;