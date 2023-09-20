import React from 'react';

const TransactionHistory = ({ transactions }) => {
    return (
        <div>
            <h3>Transaction History</h3>
            {transactions.length === 0 ? (
                <p>No transactions found.</p>
            ) : (
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                    {transactions.map((transaction) => (

                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.amount} Taka</td>
                        </tr>
                    ))}
                </table>
            )}
        </div>
    );
};

export default TransactionHistory;