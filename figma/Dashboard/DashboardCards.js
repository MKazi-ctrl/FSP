// DashboardCards.js
import React from 'react';
import './DashboardCards.css';

function DashboardCards() {
    return (
        <div className="dashboard-cards">
            <div className="card">
                <span>Points Balance</span>
                <div className="card-number">2934</div>
            </div>
            <div className="card">
                <span>Spending Tracker</span>
                <img src="https://placeholder.pics/svg/150x100" alt="Graph" />
            </div>
            <div className="card">
                <span>Points History</span>
                <ul>
                    <li>Solar Panel -134</li>
                    <li>Turbine -57</li>
                    <li>Power Grid -32</li>
                    <li>Wats Cable -83</li>
                </ul>
            </div>
        </div>
    );
}

export default DashboardCards;
