// LoyaltyPointsSummary.js
import React from 'react';
import './LoyaltyPointsSummary.css';

function LoyaltyPointsSummary() {
    return (
        <div className="loyalty-points-summary">
            <div className="points-card">
                <span>Your Loyalty Points</span>
                <div className="points-number">2934</div>
            </div>
            <div className="points-card">
                <span>Total Redeemed</span>
                <div className="points-number">0</div>
            </div>
            <div className="points-card">
                <span>Points Gained</span>
                <div className="points-number">0</div>
                <div className="note">This Month Only</div>
            </div>
        </div>
    );
}

export default LoyaltyPointsSummary;
