import React, { useState, useEffect } from 'react';
import './UserProfile.css';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null); // Store user data
    const [isEditing, setIsEditing] = useState(false); // Toggle edit form

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
            <div className="profile-header">
                <img src="https://placeholder.pics/svg/50x50" alt="Profile" className="profile-image" />
                <div className="profile-info">
                    <h1>Welcome, {userData ? userData.firstName : 'Loading...'}</h1>
                    <p>{userData ? userData.email : 'Loading...'}</p>
                </div>
            </div>

            <div className="user-info-form">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            defaultValue={userData ? userData.firstName : ''}
                            className="input-field"
                        />
                        <input
                            type="text"
                            defaultValue={userData ? userData.lastName : ''}
                            className="input-field"
                        />
                        <input
                            type="text"
                            defaultValue={userData ? userData.phoneNumber : ''}
                            className="input-field"
                        />
                        <input
                            type="text"
                            defaultValue={userData ? userData.province : ''}
                            className="input-field"
                        />
                        <input
                            type="text"
                            defaultValue={userData ? userData.city : ''}
                            className="input-field"
                        />
                        <input
                            type="text"
                            defaultValue={userData ? userData.postalCode : ''}
                            className="input-field"
                        />
                        <button onClick={handleSave} className="save-button">
                            Save
                        </button>
                    </>
                ) : (
                    <button onClick={handleEditToggle} className="edit-button">
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
