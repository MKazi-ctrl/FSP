// App.js
import React from 'react';
import HeaderComponent from './HeaderComponent';
import SupportTicketsTable from './SupportTicketsTable';
import StatusSummary from './StatusSummary';
import './App.css';

function App() {
    return (
        <div className="app">
            <HeaderComponent />
            <SupportTicketsTable />
            <StatusSummary />
        </div>
    );
}

export default App;
