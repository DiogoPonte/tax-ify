import React, { useState, useEffect } from 'react';
import { usePapaParse } from 'react-papaparse';




const Home = () => {

    const { readString } = usePapaParse();
    
    const [file, setFile] = useState();

    const fileReader = new FileReader();

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event) {
                const csvOutput = event.target.result;
            };

            fileReader.readAsText(file);
        }

        console.log(file)

    };


    let csv = readString(file, {
        worker: true,
        complete: (results) => {
          console.log(results);
        },
    });

    const handleFile = () => {
        readString(file, {
            worker: true,
            complete: (results) => {
              console.log('---------------------------');
              console.log(results);
              console.log('---------------------------');
            },
        });
    };
    

    useEffect(() => {
        document.title = "Home"
     }, []);

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <h3 className="action"> Please, select file to upload</h3>            
            <form className = "csv_input" onSubmit={handleSubmit}>
                <input type="file" accept=".csv" onChange={handleChange} />
                 <button onClick = {() => handleFile()} type="submit" className="submit_btn">Submit</button>
            </form>
            
        </div>
    );
}
 
export default Home;