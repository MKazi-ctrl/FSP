import React from 'react';
import './UserProfile.css';

function ProfileHeader() {
    return (
        <div className="profile-header">
            <img
                src="https://placeholder.pics/svg/40x40"
                alt="Profile"
                className="profile-picture"
            />
            <div className="profile-info">
                <div className="profile-name">Amanda Rawles</div>
                <div className="profile-email">amandarawles@gmail.com</div>
            </div>
        </div>
    );
}

function ContactInfo() {
    return (
        <div className="contact-info">
            <span className="contact-email">amandarawles@gmail.com</span>
        </div>
    );
}

function EditButton() {
    const buttonStyle = {
        backgroundColor: '#4285F4',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8.87px',
        width: '111.21px',
        height: '49.03px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '17.75px',
        lineHeight: '26.62px'
    };

    return (
        <button style={buttonStyle}>
            Edit
        </button>
    );
}

function SearchBar() {
    return (
        <div className="search-bar">
            <img
                src="https://placeholder.pics/svg/28.7x26.74"
                alt="Search Icon"
                className="search-icon"
            />
            <input
                type="text"
                placeholder="Search"
                className="search-input"
            />
        </div>
    );
}

function UserDetailsForm() {
    return (
        <div className="user-details-form">
            <input type="text" placeholder="Your First Name" className="input-field" />
            <input type="text" placeholder="Your Last Name" className="input-field" />
            <input type="text" placeholder="Your Phone Number" className="input-field" />
            <input type="text" placeholder="Your Province" className="input-field" />
            <input type="text" placeholder="Your City" className="input-field" />
            <input type="text" placeholder="Your Postal Code" className="input-field" />
        </div>
    );
}

function UserProfile() {
    return (
        <div className="user-profile">
            <div className="header">
                <h1>Welcome, Amanda</h1>
                <p>Tue, 07 June 2022</p>
                <SearchBar />
            </div>
            <div className="content">
                <ProfileHeader />
                <EditButton />
                <UserDetailsForm />
                <ContactInfo />
            </div>
        </div>
    );
}

export default UserProfile;
