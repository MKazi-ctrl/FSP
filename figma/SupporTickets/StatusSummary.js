// StatusSummary.js
import React from 'react';
import './StatusSummary.css';

function StatusSummary() {
    return (
        <div className="status-summary">
            <div className="status-card">
                <span>Total Open</span>
                <div className="status-number">1</div>
            </div>
            <div className="status-card">
                <span>Total in-progress</span>
                <div className="status-number">3</div>
            </div>
            <div className="status-card">
                <span>Total Closed</span>
                <div className="status-number">6</div>
            </div>
        </div>
    );
}

export default StatusSummary;
