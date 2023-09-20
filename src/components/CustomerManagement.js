import React, { useState, useEffect } from 'react';
import '../style/CustomerManagement.css'; // Import the CSS file for styling

const CustomerManagement = () => {
    const [customers, setCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        email: '',
        userID: '',
        address: '',
        image: '',
        phone: '',
        gender: '',
        nid: '',
    });
    const [editingIndex, setEditingIndex] = useState(-1);

    useEffect(() => {
        const storedCustomers = JSON.parse(localStorage.getItem('customers'));
        if (storedCustomers) {
          setCustomers(storedCustomers);
        }
      }, []);

    const handleInputChange = (e) => {
        setNewCustomer({
            ...newCustomer,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddCustomer = () => {
        if (editingIndex === -1) {
            const updatedCustomers = [...customers, newCustomer];
            setCustomers(updatedCustomers);
            localStorage.setItem('customers', JSON.stringify(updatedCustomers));
        } else {
            const updatedCustomers = [...customers];
            updatedCustomers[editingIndex] = newCustomer;
            setCustomers(updatedCustomers);
            localStorage.setItem('customers', JSON.stringify(updatedCustomers));
        }

        setNewCustomer({
            name: '',
            email: '',
            userID: '',
            address: '',
            image: '',
            phone: '',
            gender: '',
            nid: '',
        });

        setEditingIndex(-1);
    };

    const handleEditCustomer = (index) => {
        const customerToEdit = customers[index];
        setNewCustomer(customerToEdit);
        setEditingIndex(index);
    };

    const handleDeleteCustomer = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
        if (confirmDelete) {
          const updatedCustomers = [...customers];
          updatedCustomers.splice(index, 1);
          setCustomers(updatedCustomers);
    
          localStorage.setItem('customers', JSON.stringify(updatedCustomers));
        }
      };

    const renderTableHeader = () => {
        const storedCustomers = JSON.parse(localStorage.getItem('customers'));

        if (!storedCustomers || storedCustomers.length === 0) {
            return null;
        }

        const header = Object.keys(storedCustomers[0]);

        return (
            <tr>
                {header.map((field, index) => (
                    <th key={index}>{getFieldName(field)}</th>
                ))}
                <th>Action</th>
            </tr>
        );
    };

    const getFieldName = (field) => {
        // Convert field name to a more readable format
        switch (field) {
            case 'name':
                return 'Name';
            case 'email':
                return 'Email';
            case 'userID':
                return 'User ID';
            case 'address':
                return 'Address';
            case 'image':
                return 'Image';
            case 'phone':
                return 'Phone Number';
            case 'gender':
                return 'Gender';
            case 'nid':
                return 'NID Number';
            default:
                return field;
        }
    };

    return (
        <div className="customer-management">
            <h2>Customer Management</h2>
            <div className="customer-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newCustomer.name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newCustomer.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="userID"
                    placeholder="User ID"
                    value={newCustomer.userID}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={newCustomer.address}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newCustomer.image}
                    onChange={handleInputChange}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={newCustomer.phone}
                    onChange={handleInputChange}
                />
                <select
                    name="gender"
                    value={newCustomer.gender}
                    onChange={handleInputChange}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input
                    type="text"
                    name="nid"
                    placeholder="NID Number"
                    value={newCustomer.nid}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddCustomer}>
                    {editingIndex === -1 ? 'Add Customer' : 'Update Customer'}
                </button>
            </div>
            <div className="customer-list">
                <h3>Customer List</h3>
                {localStorage.getItem('customers') ? (
                    <table>
                        <thead>
                            {renderTableHeader()}
                        </thead>
                        <tbody>
                            {JSON.parse(localStorage.getItem('customers')).map((customer, index) => (
                                <tr key={index}>
                                    {Object.values(customer).map((value, index) => (
                                        <td key={index}>{value}</td>
                                    ))}
                                    <td className='actionBtn'>
                                        <button className='edit-button' onClick={() => handleEditCustomer(index)}>
                                            Edit
                                        </button>
                                        <button className='delete-button' onClick={() => handleDeleteCustomer(index)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No customers found.</p>
                )}
            </div>
        </div>
    );
};

export default CustomerManagement;