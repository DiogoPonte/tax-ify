import React, { useEffect } from 'react';





const Home = () => {

    useEffect(() => {
        document.title = "Home"
     }, []);

    return (  
        <div className="home">
            <h2>Homepage</h2>

            <h3 className="home-title">This is a training project to calculate tax profit/loss from DEGIRO's transaction report</h3>
            <p>DEGIROS's transaction report only includes the 
                raw information for the transactions for a given set of dates.</p>

            <p>Therefore, in order to find the profit/loss for tax reporting, 
                it's necessary to manually search for the buys that match the previous year's sales.</p>
            <p>This tool aims to do that automatically, once provided with the transactions csv and the date range.</p>

            <h3>To load the csv file, please go to the <a href="/sales">Sales</a> page.</h3>


        </div>
    );
}
 
export default Home;