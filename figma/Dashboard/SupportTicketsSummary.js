// SupportTicketSummary.js
import React from 'react';
import './SupportTicketSummary.css';

function SupportTicketSummary() {
    return (
        <div className="support-ticket-summary">
            <h2>Support Ticket Summary</h2>
            <div className="ticket-status">
                <div>Open Tickets: 3</div>
                <div>In Progress: 2</div>
                <div>Closed: 10</div>
            </div>
        </div>
    );
}

export default SupportTicketSummary;
