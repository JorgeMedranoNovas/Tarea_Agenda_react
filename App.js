import {useEffect,useState} from 'react'
import Header from "./Componentes/Header"
import Items from "./Componentes/Items"


 function App() {
  const [items, setitems] = useState(true);
  useEffect(() => {
    fetch("http://www.raydelto.org/agenda.php")
      .then((response) => response.json())
      .then((dog) => console.log(dog));
  }, []);
  
  
  
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
  
  return (
   
   <div className="container">
     <div className="row justify-content-center">
       <Header/> 
       <Items items={items} />
     </div>
   </div>
    )
  
}

export default App;
