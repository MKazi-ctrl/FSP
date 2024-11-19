// LoyaltyPointsPage.js
import React from 'react';
import './LoyaltyPointsPage.css';

const LoyaltyPointsPage = () => {
  return (
    <div className="loyalty-page">
      <a href="/" className="return-link">Return to Profile Management</a>
      <div className="points-summary">
        <div className="points-card">
          <h2>Your Loyalty Points</h2>
          <p className="points-value">2934</p>
        </div>
        <div className="points-card">
          <h2>Total Redeemed</h2>
          <p className="points-value">0</p>
        </div>
        <div className="points-card">
          <h2>Points Gained</h2>
          <p className="points-value">0</p>
          <p className="points-note">This Month Only</p>
        </div>
      </div>
      <div className="transactions-section">
        <h2>Recent Loyalty Transactions</h2>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>PURCHASED ITEM</th>
              <th>POINTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>YY-853581</td>
              <td>2024-10-23</td>
              <td>Solar Panel</td>
              <td>100</td>
            </tr>
            <tr>
              <td>ZZ-853334</td>
              <td>2024-10-01</td>
              <td>Eco-Microwave</td>
              <td>56</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoyaltyPointsPage;