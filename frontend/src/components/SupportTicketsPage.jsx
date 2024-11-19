// SupportTicketsPage.js
import React from 'react';
import './SupportTicketsPage.css';

const SupportTicketsPage = () => {
  return (
    <div className="support-page">
      <a href="/" className="return-link">Return to Profile Management</a>
      <div className="tickets-section">
        <h2>Support Tickets</h2>
        <table className="tickets-table">
          <thead>
            <tr>
              <th>TICKET NUMBER</th>
              <th>DESCRIPTION</th>
              <th>DATE ISSUED</th>
              <th>DATE OPENED</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>YY-853581</td>
              <td>Access lost</td>
              <td>2024-01-29</td>
              <td>2024-02-01</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>YY-54357858</td>
              <td>Unable to redeem points</td>
              <td>2024-11-01</td>
              <td>2024-11-02</td>
              <td>Open</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="status-summary">
        <div className="status-card">
          <h3>Total Open</h3>
          <p className="status-value">1</p>
        </div>
        <div className="status-card">
          <h3>Total in-progress</h3>
          <p className="status-value">3</p>
        </div>
        <div className="status-card">
          <h3>Total Closed</h3>
          <p className="status-value">6</p>
        </div>
      </div>
    </div>
  );
};

export default SupportTicketsPage;