import React from 'react';

const SavingsAccount = ({ account }) => {
    return (
        <div>
            <h3>Savings Account</h3>
            <p>Account Number: {account.accountNumber}</p>
            <p>Balance: {account.balance}</p>
            {/* Additional savings account details */}
        </div>
    );
};

export default SavingsAccount;