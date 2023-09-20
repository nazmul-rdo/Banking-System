import React, { useState } from 'react';

const TransferForm = ({ onTransfer }) => {
    const [amount, setAmount] = useState('');
    const [destinationAccount, setDestinationAccount] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleDestinationAccountChange = (e) => {
        setDestinationAccount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const transferData = {
            amount,
            destinationAccount,
        };
        onTransfer(transferData);
        setAmount('');
        setDestinationAccount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Amount"
            />
            <input
                type="text"
                value={destinationAccount}
                onChange={handleDestinationAccountChange}
                placeholder="Destination Account"
            />
            <button type="submit">Transfer</button>
        </form>
    );
};

export default TransferForm;