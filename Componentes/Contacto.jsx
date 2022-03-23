import React from "react"
import Items from "./Items"   
import {useEffect,useState} from 'react'


function Contacto() {
        
    const[items, setitems]= useState([])
  
    useEffect (() =>{fetch("http://www.raydelto.org/agenda.php")
      .then((contactos) => contactos.json())
      .then((json)=> {setitems(json)})
    })
    return(
        <div>
              <Items items={items}/>
       </div>
    )

    }
export default Contacto