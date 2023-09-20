import React, { useState } from 'react';

const DepositForm = ({ onDeposit }) => {
    const [amount, setAmount] = useState('');

    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount) {
            alert('Please enter a valid amount');
            return;
        }
        const numericAmount = parseFloat(amount);
        onDeposit(numericAmount);
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={amount}
                onChange={handleChange}
                placeholder="Amount"
            />
            <button type="submit">Deposit</button>
        </form>
    );
};

export default DepositForm;