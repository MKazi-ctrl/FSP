// DashboardPage.js
import React from 'react';
import './DashboardPage.css';
import PointBalanceIcon from '../assets/point_balance.svg';
import PointsHistoryIcon from '../assets/points-history.svg';
import SupportTicketIcon from '../assets/support-ticket.svg';
import PurchaseHistoryIcon from '../assets/purchase-history.svg';
import PlaceholderProfile from '../assets/placeholder-profile.jpeg';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <a href="/" className="return-link">{`<`} Return to Profile Management</a>
      <div className="profile-header">
        <img src={PlaceholderProfile} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1>Amanda Rawles</h1>
          <p>amandarawles@gmail.com</p>
        </div>
      </div>
      <div className="dashboard-content">

      <div className="card">
            <a href="/loyalty" className="card-link">
            <h3>Points Balance</h3>
            <div className="icon-container">
                <img src={PointBalanceIcon} alt="Point Balance Icon" className="card-icon" />
            </div>
            <p>2934</p>
            </a>
        </div>
        
        <div className="card">
            <a href="/loyalty" className="card-link">
        <h3>Points History</h3>
        <div className="icon-container">
            <img src={PointsHistoryIcon} alt="Points History Icon" className="card-icon" />
        </div>    
        <div className="points-history">
            <div className="purchase-group"> 
                <div className="purchase-item-container">
                    <p>item 1</p>
                </div>
                <div className="points-container">
                    <p>points 1</p>
                </div>
            </div>
            <div className="purchase-group"> 
                <div className="purchase-item-container">
                    <p>item 2</p>
                </div>
                <div className="points-container">
                    <p>points 2</p>
                </div>
            </div>
            <div className="purchase-group"> 
                <div className="purchase-item-container">
                    <p>item 3</p>
                </div>
                <div className="points-container">
                    <p>points 3</p>
                </div>
            </div>
            <div className="purchase-group"> 
                <div className="purchase-item-container">
                    <p>item 4</p>
                </div>
                <div className="points-container">
                    <p>points 4</p>
                </div>
            </div>
        </div>
        </a>
        </div>
        <div className="card">
            <a href="/support" className="card-link">
            <h3>Support Ticket Summary</h3>
            <div className="icon-container">
                <img src={SupportTicketIcon} alt="Support Ticket Icon" className="card-icon" />
            </div>
            <div className="points-summary">
                <div className="points-card">
                <h3>Open Tickets</h3>
                <p className="points-value">3</p>
                </div>
                <div className="points-card">
                <h3>In Progress</h3>
                <p className="points-value">2</p>
                </div>
                <div className="points-card">
                <h3>Closed</h3>
                <p className="points-value">10</p>
                </div>
            </div> 
            </a>  
        </div>
        <div className="card">
        <a>
            <div className="purchase-history">
            <div className="purchase-history-header">
            <h3>Purchase History</h3>
            <div className="icon-container">
                <img src={PurchaseHistoryIcon} alt="Purchase History Icon" className="card-icon" />
            </div>
            </div>

            <div className="purchase-history-content">
                <div className="purchase-history-group"> 
                    <h3>Product</h3>
                    <p className="purchase-history-item">Product 1</p>
                    <p className="purchase-history-item">Product 2</p>
                    
                </div>
                <div className="purchase-history-group"> 
                    <h3>Cost</h3>
                    <p className="purchase-history-item">Cost 1</p>
                    <p className="purchase-history-item">Cost 2</p>

                </div>
                <div className="purchase-history-group"> 
                    <h3>Points Earned</h3>
                    <p className="purchase-history-item">Points 1</p>
                    <p className="purchase-history-item">Points 2</p>
                </div>
 
            </div>
            </div>
            </a> 
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;