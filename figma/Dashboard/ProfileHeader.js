// ProfileHeader.js
import React from 'react';
import './ProfileHeader.css';

function ProfileHeader() {
    return (
        <div className="profile-header">
            <img
                src="https://placeholder.pics/svg/100x100"
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

export default ProfileHeader;
