// SupportTicketsTable.js
import React from 'react';
import './SupportTicketsTable.css';

function SupportTicketsTable() {
    return (
        <div className="support-tickets-table">
            <h2>Support Tickets</h2>
            <table>
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
    );
}

export default SupportTicketsTable;
