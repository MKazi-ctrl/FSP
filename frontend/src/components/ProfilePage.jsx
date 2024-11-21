import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css';
import ProfileGradient from '../assets/profile-gradient.svg';
import PlaceholderProfile from '../assets/placeholder-profile.jpeg';

const ProfilePage = () => {
    const [users, setUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newPostalCode, setNewPostalCode] = useState('');
    const [newCountry, setNewCountry] = useState('');

    const num = 0; // Current user index (update as needed)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                setUsers(response.data);
                if (response.data.length > 0) {
                    setNewFirstName(response.data[num].FirstName);
                    setNewLastName(response.data[num].Lastname);
                    setNewEmail(response.data[num].Email);
                    setNewPhoneNumber(response.data[num].PhoneNumber);
                    setNewAddress(response.data[num].Address);
                    setNewCity(response.data[num].City);
                    setNewPostalCode(response.data[num].PostalCode);
                    setNewCountry(response.data[num].Country);
                }
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, [num]);

    const handleSave = () => {
        console.log({
            FirstName: newFirstName,
            Lastname: newLastName,
            Email: newEmail,
            PhoneNumber: newPhoneNumber,
            Address: newAddress,
            City: newCity,
            PostalCode: newPostalCode,
            Country: newCountry,
        });
        axios
            .put(`http://127.0.0.1:8000/api/users/${users[num].UserID}/`, {
                FirstName: newFirstName,
                Lastname: newLastName,
                Email: newEmail,
                PhoneNumber: newPhoneNumber,
                Address: newAddress,
                City: newCity,
                PostalCode: newPostalCode,
                Country: newCountry,
            })
            .then(() => {
                alert('Changes saved successfully!');
                setIsEditing(false);
                // Refresh user data after saving
                axios.get('http://127.0.0.1:8000/api/users/')
                    .then(response => setUsers(response.data));
            })
            .catch(error => {
                console.error('Error updating user:', error);
                alert('Failed to save changes. Please try again.');
            });
    };

    return (
        <div className="profile-page">
            <div className="profile-page-header">
                <h1>Welcome, {users.length > 0 ? users[num].FirstName : 'Loading...'}</h1>
            </div>
            <div className="profile-container">
                <div className="gradient-container">
                    <img src={ProfileGradient} alt="Profile Gradient" />
                </div>
                <div className="profile-header">
                    <div className="profile-image-container">
                        <img src={PlaceholderProfile} alt="Profile" className="profile-picture" />
                    </div>
                    <div className="profile-info">
                        <h1>{users.length > 0 ? `${users[num].FirstName} ${users[num].Lastname}` : 'Loading...'}</h1>
                        <p>{users.length > 0 ? users[num].Email : 'Loading...'}</p>
                    </div>
                    <div className="profile-edit-button-container">
                        {isEditing ? (
                            <button onClick={handleSave} className="save-button">
                                Save
                            </button>
                        ) : (
                            <button onClick={() => setIsEditing(true)} className="edit-button">
                                Edit
                            </button>
                        )}
                    </div>
                </div>

                <div className="user-info-form">
                    {isEditing ? (
                        <>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    value={newFirstName}
                                    onChange={(e) => setNewFirstName(e.target.value)}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name:</label>
                                <input
                                    id="lastname"
                                    type="text"
                                    value={newLastName}
                                    onChange={(e) => setNewLastName(e.target.value)}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input
                                    id="PhoneNumber"
                                    type="text"
                                    placeholder="Your Phone Number"
                                    value={newPhoneNumber}
                                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Address">Address:</label>
                                <input
                                    id="Address"
                                    type="text"
                                    placeholder="Your Address"
                                    value={newAddress}
                                    onChange={(e) => setNewAddress(e.target.value)}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="City">City:</label>
                                <input
                                    id="City"
                                    type="text"
                                    placeholder="Your City"
                                    value={newCity}
                                    onChange={(e) => setNewCity(e.target.value)}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PostalCode">Postal Code:</label>
                                <input
                                    id="PostalCode"
                                    type="text"
                                    placeholder="Your Postal Code"
                                    value={newPostalCode}
                                    onChange={(e) => setNewPostalCode(e.target.value)}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PostalCode">Country:</label>
                                <input
                                    id="PostalCode"
                                    type="text"
                                    placeholder="Your Country"
                                    value={newCountry}
                                    onChange={(e) => setNewCountry(e.target.value)}
                                    className="input-field"
                                />
                            </div>



                        </>
                    ) : (
                        <>
                            <div className="form-group">
                                <label>First Name:</label>
                                <p >{users.length > 0 ? users[num].FirstName : 'Loading...'}</p>

                            </div>
                            <div className="form-group">
                                <label>Last Name:</label>
                                <p>{users.length > 0 ? users[num].Lastname : 'Loading...'}</p>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <p>{users.length > 0 ? users[num].Email : 'Loading...'}</p>
                            </div>
                            <div className="form-group">
                                <label>Phone Number:</label>
                                <p>{users.length > 0 ? users[num].PhoneNumber : 'Loading...'}</p>
                            </div>
                            <div className="form-group">
                                <label>Address:</label>
                                <p>{users.length > 0 ? users[num].Address : 'Loading...'}</p>
                            </div>
                            <div className="form-group">
                                <label>City:</label>
                                <p>{users.length > 0 ? users[num].City : 'Loading...'}</p>
                            </div>
                            <div className="form-group">
                                <label>Postal Code:</label>
                                <p>{users.length > 0 ? users[num].PostalCode : 'Loading...'}</p>
                            </div>
                            <div className="form-group">
                                <label>Country:</label>
                                <p>{users.length > 0 ? users[num].Country : 'Loading...'}</p>
                            </div>

                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
