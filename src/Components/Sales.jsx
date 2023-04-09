import React, { useState, useEffect } from 'react';
import { usePapaParse } from 'react-papaparse';


const Sales = () => {

    useEffect(() => {
        document.title = "Sales"
     }, []);

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
    

    let [csv, setParsedCsvData] = useState([]);
    

    const handleFile = () => {
        readString(file, {
            worker: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                setParsedCsvData(results.data)
            }
        });
        
    };


    let sales = csv.filter((csv)=> csv["Quantidade"] < 0 )
    


    
    return ( 
        <div className="sales">
            <h2>Sales</h2>
            <h3 className="action"> Please, select file to upload</h3>            
            <form className = "csv_input" onSubmit={handleSubmit}>
                <input type="file" accept=".csv" onChange={handleChange} />
                 <button onClick = {() => handleFile()} type="submit" className="submit_btn">Submit</button>
            </form>
            {sales.length>0? (
            <table className='table'>
                <thead>
                    <tr>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Produto</th>
                    <th>ISIN</th>
                    <th>Bolsa de origem</th>
                    <th>Bolsa</th>
                    <th>Quantidade</th>
                    <th>Preços</th>
                    <th>Moeda (Preço)</th>
                    <th>Valor Local</th>
                    <th>Moeda (Valor Local)</th>
                    <th>Valor</th>
                    <th>Moeda (Valor)</th>
                    <th>Taxa de cãmbio</th>
                    <th>Comissões</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {sales && sales.map((parsedData, index) => (
                    <tr key={index}>
                        <td>{parsedData.Data}</td>
                        <td>{parsedData.Hora}</td>
                        <td>{parsedData.Produto}</td>
                        <td>{parsedData.ISIN}</td>
                        <td>{parsedData["Bolsa de"]}</td>
                        <td>{parsedData.Bolsa}</td>
                        <td>{parsedData.Quantidade}</td>
                        <td>{parsedData.Preços}</td>
                        <td>{parsedData._1}</td>
                        <td>{parsedData["Valor local"]}</td>
                        <td>{parsedData._2}</td>
                        <td>{parsedData.Valor}</td>
                        <td>{parsedData._3}</td>
                        <td>{parsedData["Taxa de Câmbio"]}</td>
                        <td>{parsedData["Custos de transação"]}</td>
                        <td>{parsedData.Total}</td>
                    </tr>
                    ))}
                </tbody>
                </table>) : null }
        </div>
     );
}
 
export default Sales;