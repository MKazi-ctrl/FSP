// SupportTicketsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SupportTicketsPage.css';

const SupportTicketsPage = () => {

  const [support, setSupport] = useState([]);
  const num4 = 0;
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/support/')
      .then(response => {
        setSupport(response.data);

      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [num4]);
  return (
    <div className="support-page">
      <a href="/" className="return-link">{`<`}  Return to Profile Management</a>
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
              <td>{support.length > 0 ? support[num4].ticketID : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4].description : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4].createdAt : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4].updatedAt : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4].status : 'Loading...'}</td>
            </tr>
            <tr>
              <td>{support.length > 0 ? support[num4 + 1].ticketID : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4 + 1].description : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4 + 1].createdAt : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4 + 1].updatedAt : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4 + 1].status : 'Loading...'}</td>
            </tr>
            <tr>
              <td>{support.length > 0 ? support[num4 + 2].ticketID : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4 + 2].description : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4 + 2].createdAt : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4 + 2].updatedAt : 'Loading...'}</td>
              <td>{support.length > 0 ? support[num4 + 2].status : 'Loading...'}</td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className="status-summary">
        <div className="status-card">
          <h3>Total Open</h3>
          <p className="status-value">{support.length > 0
            ? support.filter(ticket => ticket.status === 'Open').length
            : 'Loading...'}</p>
        </div>
        <div className="status-card">
          <h3>Total in-progress</h3>
          <p className="status-value">{support.length > 0
            ? support.filter(ticket => ticket.status === 'In_progress').length
            : 'Loading...'}</p>
        </div>
        <div className="status-card">
          <h3>Total Closed</h3>
          <p className="status-value">{support.length > 0
            ? support.filter(ticket => ticket.status === 'Resolved').length
            : 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
};

export default SupportTicketsPage;