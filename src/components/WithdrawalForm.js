import React, { useState } from 'react';

const WithdrawalForm = ({ onWithdraw }) => {
    const [amount, setAmount] = useState('');

    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Withdraw the specified amount
        onWithdraw(amount);
        // Reset form data
        // ...
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={handleChange} placeholder="Amount" />
            <button type="submit">Withdraw</button>
        </form>
    );
};

export default WithdrawalForm;