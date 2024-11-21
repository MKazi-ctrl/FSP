// DashboardPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashboardPage.css';
import PointBalanceIcon from '../assets/point_balance.svg';
import PointsHistoryIcon from '../assets/points-history.svg';
import SupportTicketIcon from '../assets/support-ticket.svg';
import PurchaseHistoryIcon from '../assets/purchase-history.svg';
import PlaceholderProfile from '../assets/placeholder-profile.jpeg';


const DashboardPage = () => {

    const [users, setUsers] = useState([]);
    const num = 0;
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                setUsers(response.data);

            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, [num]);

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

    const [product, setProduct] = useState([]);
    const num3 = 0;
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product/')
            .then(response => {
                setProduct(response.data);

            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, [num3]);

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
        <div className="dashboard-page">
            <a href="/" className="return-link">{`<`} Return to Profile Management</a>
            <div className="profile-header">
                <img src={PlaceholderProfile} alt="Profile" className="profile-image" />
                <div className="profile-info">
                    <h1>{users.length > 0 ? users[num].FirstName + ' ' + users[num].Lastname : 'Loading...'}</h1>
                    <p>{users.length > 0 ? users[num].Email : 'Loading...'}</p>
                </div>
            </div>
            <div className="dashboard-content">

                <div className="card">
                    <a href="/loyalty" className="card-link">
                        <h3>Points Balance</h3>
                        <div className="icon-container">
                            <img src={PointBalanceIcon} alt="Point Balance Icon" className="card-icon" />
                        </div>
                        <p>{loyalty.length > 0 ? loyalty[num2].points : 'Loading...'}</p>
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

                                    <p>{product.length > 0 ? product[num3].productName : 'Loading...'}</p>
                                </div>
                                <div className="points-container">
                                    <p>{loyalty.length > 0 ? loyalty[num2].points : 'Loading...'}</p>
                                </div>
                            </div>
                            <div className="purchase-group">
                                <div className="purchase-item-container">
                                    <p>{product.length > 0 ? product[num3 + 1].productName : 'Loading'}</p>
                                </div>
                                <div className="points-container">
                                    <p>{loyalty.length > 0 ? loyalty[num2 + 1].points : 'Loading...'}</p>
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
                                <p className="points-value">{support.length > 0
                                    ? support.filter(ticket => ticket.status === 'Open').length
                                    : 'Loading...'}</p>
                            </div>
                            <div className="points-card">
                                <h3>In Progress</h3>
                                <p className="points-value">{support.length > 0
                                    ? support.filter(ticket => ticket.status === 'In_progress').length
                                    : 'Loading...'}</p>
                            </div>
                            <div className="points-card">
                                <h3>Closed</h3>
                                <p className="points-value">{support.length > 0
                                    ? support.filter(ticket => ticket.status === 'Resolved').length
                                    : 'Loading...'}</p>
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
                                    <p className="purchase-history-item">{product.length > 0 ? product[num3].productName : 'Loading...'}</p>
                                    <p className="purchase-history-item">{product.length > 0 ? product[num3 + 1].productName : 'Loading...'}</p>

                                </div>
                                <div className="purchase-history-group">
                                    <h3>Cost</h3>
                                    <p className="purchase-history-item">{product.length > 0 ? product[num3].price : 'Loading...'}</p>
                                    <p className="purchase-history-item">{product.length > 0 ? product[num3 + 1].price : 'Loading...'}</p>

                                </div>
                                <div className="purchase-history-group">
                                    <h3>Points Earned</h3>
                                    <p className="purchase-history-item">{loyalty.length > 0 ? loyalty[num2].points : 'Loading...'}</p>
                                    <p className="purchase-history-item">{loyalty.length > 0 ? loyalty[num2 + 1].points : 'Loading...'}</p>
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