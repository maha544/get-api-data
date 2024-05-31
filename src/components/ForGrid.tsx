type propsType = {
    dataSource : any[],
    gridCols : {
        key : string,
        label : string,
        displayField ?: any
    }[],
    loading ?: boolean
}

export default function Grid(props : propsType){
    const {dataSource , gridCols , loading} = props
    return(
        <>
        {loading ? <h3>Loading...</h3> :
         <table className="mt-5">
            <thead>
                {gridCols.map((col , ind)=>
                 <th key={ind}>{col.label}</th>)}
            </thead>
            <tbody>
                {dataSource.map((row : any , rowInd : any)=> 
                <tr>{gridCols.map((col , ind)=>
                 <td key={ind}>
                    {col.displayField ? col.displayField(row) : row[col.key]}
                 </td>)}</tr>)}
            </tbody>
         </table> }
        </>
    )
}