const Location=({data})=>{
    
    return(
        <div className="display">
            
            <div className="CardLocation">
                <h2>Nombre: {data.name}</h2>
                <h2>Tipo: {data.type} </h2>
                <h2>Dimension: {data.dimension}</h2>
                <h2>Poblacion: {data.residents?.length}</h2>
            </div>

        </div>
    )
}
export default Location;