import React, { useState } from 'react';
import AccountCreationForm from './AccountCreationForm';
import SavingsAccount from './SavingsAccount';
import CheckingAccount from './CheckingAccount';
import AccountDetails from './AccountDetails';
import TransactionHistory from './TransactionHistory';
import DepositForm from './DepositForm';
import WithdrawalForm from './WithdrawalForm';
import TransferForm from './TransferForm';

const Account = () => {
    const [account, setAccount] = useState(null);
    const [transactions, setTransactions] = useState([]);

    const createAccount = (newAccount) => {
        setAccount(newAccount);
    };

    const deposit = (amount) => {
        const updatedAccount = { ...account };

        const numusdate = parseFloat(updatedAccount.balance)

        updatedAccount.balance = numusdate + amount;

        setAccount(updatedAccount);
        addTransaction('Deposit', amount);
        console.log(updatedAccount)
        console.log(typeof (updatedAccount.balance))
        console.log(typeof (amount))
    };

    const withdraw = (amount) => {
        const updatedAccount = { ...account };
        updatedAccount.balance -= parseFloat(amount);
        setAccount(updatedAccount);
        addTransaction('Withdrawal', amount);
    };

    const transfer = (transferData) => {
        const { amount, destinationAccount } = transferData;
        const updatedAccount = { ...account };
        updatedAccount.balance -= parseFloat(amount);
        setAccount(updatedAccount);
        addTransaction(`Transfer to ${destinationAccount}`, amount);
    };

    const addTransaction = (type, amount) => {
        const newTransaction = {
            id: transactions.length + 1,
            date: new Date().toLocaleString(),
            type,
            amount,
        };
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    };

    return (
        <div>
            <h2>Account Management</h2>
            {account ? (
                <div>
                    <AccountDetails account={account} />
                    <DepositForm onDeposit={deposit} />
                    <WithdrawalForm onWithdraw={withdraw} />
                    <TransferForm onTransfer={transfer} />
                    <TransactionHistory transactions={transactions} />
                </div>
            ) : (
                <div>
                    <AccountCreationForm onCreateAccount={createAccount} />
                </div>
            )}
            {/* Render specific account components based on account type */}
            {account && account.accountType === 'savings' && (
                <SavingsAccount account={account} />
            )}
            {account && account.accountType === 'checking' && (
                <CheckingAccount account={account} />
            )}
        </div>
    );
};

export default Account;