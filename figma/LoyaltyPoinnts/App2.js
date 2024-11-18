// App.js
import React from 'react';
import HeaderComponent from './HeaderComponent';
import LoyaltyPointsSummary from './LoyaltyPointsSummary';
import RecentTransactionsTable from './RecentTransactionsTable';
import './App.css';

function App() {
    return (
        <div className="app">
            <HeaderComponent />
            <LoyaltyPointsSummary />
            <RecentTransactionsTable />
        </div>
    );
}

export default App;
