import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import ProfileGradient from '../assets/profile-gradient.svg';
import PlaceholderProfile from '../assets/placeholder-profile.jpeg';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null); // Store user data
    const [isEditing, setIsEditing] = useState(false); // Toggle edit form

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long', // full weekday name (e.g., "Monday")
        year: 'numeric', // full year (e.g., "2024")
        month: 'long', // full month name (e.g., "November")
        day: 'numeric' // day of the month (e.g., "19")
    });

    // Fetch user data from the backend
    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}user-profile`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const result = await response.json();
                setUserData(result);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchUserData();
    }, []);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        // Handle save logic here (e.g., send updated data to the backend)
        setIsEditing(false);
    };

    return (
        <div className="profile-page">
            <div className="profile-page-header">
                <h1>Welcome, {userData ? userData.firstName : 'Loading...'}</h1>
                <p>{formattedDate}</p>
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
                        <h1>{userData ? userData.firstName : 'Loading...'} {userData ? userData.lastName : 'Loading...'}</h1>
                        <p>{userData ? userData.email : 'Loading...'}</p>
                    </div>
                    <div className="profile-edit-button-container">
                        {isEditing ? (
                            <button onClick={handleSave} className="save-button">
                                Save
                            </button>
                        ) : (
                            <button onClick={handleEditToggle} className="edit-button">
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
                                    placeholder="Your First Name"
                                    defaultValue={userData ? userData.firstName : ''}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Your Last Name"
                                    defaultValue={userData ? userData.lastName : ''}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Your Phone Number"
                                    defaultValue={userData ? userData.phoneNumber : ''}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="province">Province:</label>
                                <input
                                    id="province"
                                    type="text"
                                    placeholder="Your Province"
                                    defaultValue={userData ? userData.province : ''}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="Your City"
                                    defaultValue={userData ? userData.city : ''}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="postalCode">Postal Code:</label>
                                <input
                                    id="postalCode"
                                    type="text"
                                    placeholder="Your Postal Code"
                                    defaultValue={userData ? userData.postalCode : ''}
                                    className="input-field"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailAddress">My Email Address</label>
                                <input
                                    id="emailAddress"
                                    type="text"
                                    placeholder="Your Email Address"
                                    defaultValue={userData ? userData.email : ''}
                                    className="input-field"
                                />
                            </div>
                        </>
                    ) : (
                        <>

                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="Your First Name"
                                    defaultValue={userData ? userData.firstName : ''}
                                    className="input-field"
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Your Last Name"
                                    defaultValue={userData ? userData.lastName : ''}
                                    className="input-field"
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Your Phone Number"
                                    defaultValue={userData ? userData.phoneNumber : ''}
                                    className="input-field"
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="province">Province:</label>
                                <input
                                    id="province"
                                    type="text"
                                    placeholder="Your Province"
                                    defaultValue={userData ? userData.province : ''}
                                    className="input-field"
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder="Your City"
                                    defaultValue={userData ? userData.city : ''}
                                    className="input-field"
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="postalCode">Postal Code:</label>
                                <input
                                    id="postalCode"
                                    type="text"
                                    placeholder="Your Postal Code"
                                    defaultValue={userData ? userData.postalCode : ''}
                                    className="input-field"
                                    readOnly
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailAddress">My Email Address</label>
                                <input
                                    id="emailAddress"
                                    type="text"
                                    placeholder="Your Email Address"
                                    defaultValue={userData ? userData.email : ''}
                                    className="input-field"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
