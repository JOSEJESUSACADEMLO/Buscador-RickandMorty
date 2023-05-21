import { useState , useEffect } from 'react'
import axios from 'axios';


const ResidentInfo = ({url}) => {

    const[resident ,setResident]= useState({})

    useEffect(()=>{
        axios.get(url)
        .then(resp => setResident(resp.data))
        .catch(error => console.error(error))
    },[])

    let aux=resident.status
    let aux2=""
    if(aux=="Alive"){
        aux2="circle"
    }else{
        if(aux=="Dead"){
            aux2="circle2"
        }else{
            aux2="circle3"
        }
        
    }

    return (
      
       <div className='display-card'>
        <div className='resident-card'>
        
           <img src={resident.image} alt=""/>
           <section className='nombre'>
            <h2>{resident.name} </h2>
           </section>
           <section className='status'>
            <h2>Status : {resident.status} </h2>
            <div className={aux2}></div>
            {console.log(resident.status)}
           </section>
           <section className='datos'>
           <h2>Origen : {resident.origin?.name} </h2>
           <h2>Episodios : {resident.episode?.length}</h2>
           </section>
        </div>
      </div>
   
    );
}

export default ResidentInfo;