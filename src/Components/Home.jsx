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

    const [csv, setParsedCsvData] = useState([]);
    

    const handleFile = () => {
        readString(file, {
            worker: true,
            complete: (results) => {
              console.log('---------------------------');
              console.log(results);
              console.log('---------------------------');
            },
        });
        
        let parsed = readString(file, {
            worker: true,
            header: true,
            complete: (results) => {
                setParsedCsvData(results.data)
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
            <table>
                <thead>
                    <tr>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Produto</th>
                    <th>ISIN</th>
                    <th>Bolsa</th>
                    <th>Quantidade</th>
                    <th>Preços</th>
                    <th>Valor</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {csv && csv.map((parsedData, index) => (
                    <tr key={index}>
                        <td>{parsedData.Data}</td>
                        <td>{parsedData.Hora}</td>
                        <td>{parsedData.Produto}</td>
                        <td>{parsedData.ISIN}</td>
                        <td>{parsedData.Bolsa}</td>
                        <td>{parsedData.Quantidade}</td>
                        <td>{parsedData.Preços}</td>
                        <td>{parsedData.Valor}</td>
                        <td>{parsedData.Total}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
        </div>
    );
}
 
export default Home;