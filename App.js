import {useEffect,useState} from 'react'
import Header from "./Componentes/Header"
import Items from "./Componentes/Items"
import React, {Component} from 'react'
import Contacto from './Componentes/Contacto'
import './css/App.css'
import Agregarform from './Componentes/agregarform'

function App() {
  
  //length

   return (
   
   <header className='header'>
   
   <div className="container">
     
   
     <div className="Container-centro">
       <Header/>
       <Agregarform/>
       <Contacto/>
     </div>
     
   </div>
   </header>
    
   
   
    )
  
}



export default App;

  
  /*
  const items = ([

  
  fetch("http://www.raydelto.org/agenda.php").then(function(contactos){
        return contactos.json();
    }).then(function(contactos){
      console.log(contactos);    
  })
    
  ])
  
  
  
  
  const [items, setItems] = useState([    
    {
      id: 1,
      title: 'derrolando  proyecto en laravel',
      category: 'desarrollo y programacion',
      img: 'img',
      day: 'lun',
      time: '18:00'
    },
    {
      id: 2,
      title: 'aprendiendo react',
      category: 'desarrollo y programacion',
      day: 'Martes',
      time: '03/05/2021'
    }
  ])*/