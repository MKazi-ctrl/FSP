// DashboardPage.js
import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <a href="/" className="return-link">Return to Profile Management</a>
      <div className="profile-header">
        <img src="https://placeholder.pics/svg/50x50" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1>Amanda Rawles</h1>
          <p>amandarawles@gmail.com</p>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="card">Points Balance: 2934</div>
        <div className="card">Spending Tracker</div>
        <div className="card">Points History</div>
        <div className="card">Support Ticket Summary</div>
        <div className="card">Purchase History</div>
        <div className="card">Categories</div>
        <div className="card">Map</div>
      </div>
    </div>
  );
};

export default DashboardPage;
