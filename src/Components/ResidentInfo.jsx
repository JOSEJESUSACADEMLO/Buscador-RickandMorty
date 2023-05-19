import { useState , useEffect } from 'react'
import axios from 'axios';


const ResidentInfo = ({url}) => {

    const[resident ,setResident]= useState({})

    useEffect(()=>{
        axios.get(url)
        .then(resp => setResident(resp.data))
        .catch(error => console.error(error))
    },[])

    return (
      
       <div className='display-card'>
        <div className='resident-card'>
           <img src={resident.image} alt=""/>
           <h2>Nombre : {resident.name} </h2>
           <h2>Status : {resident.status} </h2>
           <h2>Origen : {resident.origin?.name} </h2>
          
        </div>
      </div>
   
    );
}

export default ResidentInfo;