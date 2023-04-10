import { groupBy } from 'lodash-es';
import React, { useState, useEffect } from 'react';
import { usePapaParse } from 'react-papaparse';


export default function Sales () {

    useEffect(() => {
        document.title = "Sales";
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
 




    //process sales data


     let SalesData = csv.filter((csv)=> csv["Quantidade"] < 0 )
     console.log(SalesData)
     const dataa = groupBy(SalesData, sales => sales.Data + sales.ISIN)
     console.log(dataa)



    return ( 
        <div className="sales">
            <h2>Sales</h2>
            <h3 className="action"> Please, select file to upload</h3> 
            <form className = "csv_input" onSubmit={handleSubmit}>
                 <input type="file" accept=".csv" onChange={handleChange} />
                 <button onClick = {() => handleFile()} type="submit" className="submit_btn">Submit</button>
            </form>
            {SalesData.length>0? (
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
                {SalesData && SalesData.map((parsedData, index) => (
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
 
