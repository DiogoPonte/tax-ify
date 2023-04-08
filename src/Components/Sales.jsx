import React, { useState, useEffect } from 'react';

const Sales = () => {

    useEffect(() => {
        document.title = "Sales"
     }, []);

    return ( 
        <div className="home">
            <h2>Sales</h2>
        </div>
     );
}
 
export default Sales;