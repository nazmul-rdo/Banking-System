import React from 'react';
import '../../style/Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">Banking System</div>
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/account">Accounts</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/">Transactions</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/">Customers</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/report">Reports</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;