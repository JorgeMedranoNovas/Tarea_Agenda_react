import imgGategori from './../navegador.png'
//<img src={imgGategori} alt=""/>
const Item = ({item}) => {
  return (

    <div className="col-sm-10" key={item.id}>
        <p>{item.nombre}</p>
        <div className="row item">
            <div className="col-sm-3">
                
            </div>
            <div className="col-sm-8">
               {item.apellido}
            </div>
            <div className="col-sm-1">
               {item.telefono}
            </div>
        </div>
      </div> 
  )
}
export default Item
