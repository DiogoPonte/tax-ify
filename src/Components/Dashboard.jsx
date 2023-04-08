import React, { useState, useEffect } from 'react';

const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard"
     }, []);

    return ( 
        <div className="home">
            <h2>Dashboard</h2>
        </div>
     );
}
 
export default Dashboard;