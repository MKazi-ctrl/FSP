// LoyaltyPointsPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoyaltyPointsPage.css';

const LoyaltyPointsPage = () => {

  const [loyalty, setLoyalty] = useState([]);
  const num2 = 0;
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/loyalty/')
      .then(response => {
        setLoyalty(response.data);

      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [num2]);

  const [details, setDetails] = useState([]);
  const num3 = 0;
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/purchasedetails/')
      .then(response => {
        setDetails(response.data);

      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [num3]);

  const [product, setProducts] = useState([]);
  const num4 = 0;
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/product/')
      .then(response => {
        setProducts(response.data);

      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [num4]);


  return (
    <div className="loyalty-page">
      <a href="/" className="return-link">{`<`} Return to Profile Management</a>
      <div className="points-summary">
        <div className="points-card">
          <h2>Your Loyalty Points</h2>
          <p className="points-value">{loyalty.length > 0 ? loyalty[num2].points : 'Loading...'}</p>
        </div>

        <div className="points-card">
          <h2>Points Gained</h2>
          <p className="points-value">{loyalty.length > num2 + 1
            ? loyalty[num2].points + loyalty[num2 + 1].points
            : 'Loading...'}</p>
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
              <td>{loyalty.length > 0 ? loyalty[num2].transactionID : 'Loading...'}</td>
              <td>{loyalty.length > 0 ? loyalty[num2].date : 'Loading...'}</td>
              <td>{product.length > 0 ? product[num4].productName : 'Loading'}</td>
              <td>{loyalty.length > 0 ? loyalty[num2].points : 'Loading...'}</td>
            </tr>
            <tr>
              <td>{loyalty.length > 0 ? loyalty[num2 + 1].transactionID : 'Loading...'}</td>
              <td>{loyalty.length > 0 ? loyalty[num2 + 1].date : 'Loading...'}</td>
              <td>{product.length > 0 ? product[num4 + 1].productName : 'Loading'}</td>
              <td>{loyalty.length > 0 ? loyalty[num2 + 1].points : 'Loading...'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoyaltyPointsPage;