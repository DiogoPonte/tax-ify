import React, { useState, useEffect } from 'react';
import { usePapaParse } from 'react-papaparse';



function FormCSV (props) {
    return (
        <form className = "csv_input" onSubmit={props.submit}>
            <input type="file" accept=".csv" onChange={props.change} />
            <button onClick = {props.file} type="submit" className="submit_btn">Submit</button>
        </form>
    )
}



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
 
         //console.log(file)
 
     };
     

     
     const [data, setData] = useState([])
     const [columnArray, setColumn] = useState([])
     const [value, setValue] = useState([])
 
     const handleFile = () => {
         readString(file, {
             worker: true,
             header: true,
             skipEmptyLines: true,
             complete: (results) => {

                let columnArray = [];
                const valuesArray = [];

                results.data.map ((d) => {
                    columnArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d))
                } );

                columnArray[0][4] = "Bolsa de origem"
                columnArray[0][8] = "Moeda (Preço)"
                columnArray[0][10] = "Moeda (Valor local)"
                columnArray[0][12] = "Moeda (Valor)"
                columnArray[0][15] = "Moeda (Custos)"
                columnArray[0][17] = "Moeda (Total)"
                

                setData(columnArray[0].concat(valuesArray))
                setColumn(columnArray[0])
                setValue(valuesArray)

             }
         });
         
     };
 


    console.log(data)

    //process sales data


     let SalesData = value.filter((csv)=> csv[6] < 0 )
     console.log(SalesData)
     //const csvJSON = JSON.stringify(SalesData)


     //console.log(csvJSON)

     //SalesData = JSON.parse(csvJSON) --- para inserir na tabela

    return ( 
        <div className="sales">
            <h2>Sales</h2>
            <h3 className="action"> Please, select file to upload</h3> 

            <FormCSV submit = {handleSubmit} change = {handleChange} file = {handleFile}/>

            {value.length>0? (
            <table className='table'>
                <thead>
                    <tr>
                    {columnArray.map((col, i) => 
                        <th key = {i}>{col}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                {SalesData && SalesData.map((parsedData, index) => (
                    <tr key={index}>
                        {parsedData.map((val, i) => (
                            <td key={i}>{val}</td>
                        ))}
                    </tr>
                    ))}
                </tbody>
                </table>) : null }
            
        </div>
     );
}
 
