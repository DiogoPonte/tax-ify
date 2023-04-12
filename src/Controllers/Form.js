function FormCSV (props) {
    return (
        <form className = "csv_input" onSubmit={props.submit}>
            <input type="file" accept=".csv" onChange={props.change} />
            <button onClick = {props.file} type="submit" className="submit_btn">Submit</button>
        </form>
    )
}

export default FormCSV