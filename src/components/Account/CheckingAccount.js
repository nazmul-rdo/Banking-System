import React from 'react';

const CheckingAccount = ({ account }) => {
  return (
    <div>
      <h3>Checking Account</h3>
      <p>Account Number: {account.accountNumber}</p>
      <p>Balance: {account.balance}</p>
      {/* Additional checking account details */}
    </div>
  );
};

export default CheckingAccount;