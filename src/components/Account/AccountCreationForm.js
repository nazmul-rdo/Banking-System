import React, { useState } from 'react';

const AccountCreationForm = ({ onCreateAccount }) => {
    const [accountType, setAccountType] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState('0');

    const handleAccountTypeChange = (e) => {
        setAccountType(e.target.value);
    };

    const handleAccountNumberChange = (e) => {
        setAccountNumber(e.target.value);
    };

    const handleBalanceChange = (e) => {
        setBalance(e.target.value);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newAccount = {
    //         accountType,
    //         accountNumber,
    //         balance,
    //     };
    //     onCreateAccount(newAccount);
    //     setAccountType('');
    //     setAccountNumber('');
    //     setBalance(1);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newAccount = {
          accountType,
          accountNumber,
          balance,
        };
        const storedAccounts = JSON.parse(localStorage.getItem('customers'));
        
        if (storedAccounts) {
          const existingAccount = storedAccounts.find(customers => customers.userID === accountNumber);
          if (!existingAccount) {
            alert('Account with this account number already exists.');
            return;
          }
        }
        
        onCreateAccount(newAccount);
        setAccountType('');
        setAccountNumber('');
        setBalance(1);
      };

    return (
        <form onSubmit={handleSubmit}>
            <select value={accountType} onChange={handleAccountTypeChange}>
                <option value="">Select Account Type</option>
                <option value="savings">Savings Account</option>
                <option value="checking">Checking Account</option>
            </select>
            <input
                type="text"
                value={accountNumber}
                onChange={handleAccountNumberChange}
                placeholder="Account Number"
            />
            <input
                type="number"
                value={balance}
                onChange={handleBalanceChange}
                placeholder="Initial Balance"
            />
            <button type="submit">Create Account</button>
        </form>
    );
};

export default AccountCreationForm;