
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerManagement from './components/CustomerManagement';
import Account from './components/Account/Account';
import LoginPage from './components/Auth/LoginPage';
import Navbar from './components/Layout/Navbar';
import TransactionReport from './components/Report/TransactionReport';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes>

          <Route path="/" element={<CustomerManagement />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<Account />} />

          <Route path="/report" element={<TransactionReport />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
