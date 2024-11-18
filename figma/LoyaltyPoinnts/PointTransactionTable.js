// RecentTransactionsTable.js
import React from 'react';
import './RecentTransactionsTable.css';

function RecentTransactionsTable() {
    return (
        <div className="recent-transactions-table">
            <h2>Recent Loyalty Transactions</h2>
            <table>
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
    );
}

export default RecentTransactionsTable;
