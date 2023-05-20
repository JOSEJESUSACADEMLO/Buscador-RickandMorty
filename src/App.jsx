import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Location from './Components/Location'
import ResidentInfo from './Components/ResidentInfo'

function App() {
  const [isVisible, setIsVisible] = useState({})
  const [isValue ,setIsValue]=useState("")
  const [residents , setIsResidents]=useState([])

  useEffect(()=>{
      
    const randomId =Math.floor(Math.random()*126)+1
   
    axios
    .get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then(resp=> {setIsVisible(resp.data)
                 setIsResidents(resp.data.residents)})
    .catch(error =>console.error(error))

     
      
  
  },[])

    const search=()=>{
      axios                                                                                          
      .get(`https://rickandmortyapi.com/api/location/${isValue}`)
      .then(resp=> {setIsVisible(resp.data)
        setIsResidents(resp.data.residents)})
        .catch(error =>console.error(error))
    }

   
  


  return (
    <div className='header'>
        <div className='nav'>

        </div>

        <div className='buscador'>
        <input type="text"
                  className='input'
                  id="inputSearch" 
                  placeholder="Type a location Id"
                  onChange={(e) => setIsValue(e.target.value)}
                  value={isValue}/>
                  {<button className='buscar' onClick={search}>Search</button>}
        
        </div>
       {<Location
        data={isVisible}
        />}
      
        <div className='principal'>
       {
        residents.map( resident => (
        <ResidentInfo 
          key={ resident}
          url={ resident }
                />
        ))
       }</div>
      
        
    </div>
  )
}

export default App
