import imgGategori from './../navegador.png'
//<img src={imgGategori} alt=""/>
const Item = ({item}) => {
  return (
   <div className='listado'>
    <div className="tarea" key={item.nombre}>
               
                <h3> {item.nombre}</h3>
                <h3>{item.apellido}</h3>
                <h3>{item.telefono}</h3>
                
      </div> 
    </div>
  )
}
export default Item
