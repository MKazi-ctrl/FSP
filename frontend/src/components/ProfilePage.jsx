// ProfilePage.js
import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src="https://placeholder.pics/svg/50x50" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1>Amanda Rawles</h1>
          <p>amandarawles@gmail.com</p>
        </div>
      </div>
      <div className="user-info-form">
        <input type="text" placeholder="Your First Name" className="input-field" />
        <input type="text" placeholder="Your Last Name" className="input-field" />
        <input type="text" placeholder="Your Phone Number" className="input-field" />
        <input type="text" placeholder="Your Province" className="input-field" />
        <input type="text" placeholder="Your City" className="input-field" />
        <input type="text" placeholder="Your Postal Code" className="input-field" />
      </div>
    </div>
  );
};

export default ProfilePage;
