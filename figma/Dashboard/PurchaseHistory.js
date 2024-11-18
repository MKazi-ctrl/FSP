// PurchaseHistory.js
import React from 'react';
import './PurchaseHistory.css';

function PurchaseHistory() {
    return (
        <div className="purchase-history">
            <h2>Purchase History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Cost</th>
                        <th>Points Earned</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Solar Roof</td>
                        <td>$300</td>
                        <td>+124</td>
                    </tr>
                    <tr>
                        <td>Hydro Pipes</td>
                        <td>$150</td>
                        <td>+139</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PurchaseHistory;
