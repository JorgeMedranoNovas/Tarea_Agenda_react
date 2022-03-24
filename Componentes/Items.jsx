
import Item from "./Item"
const Items = ({items}) => {

  return (
    <>
    <div class="listado" id="lista">
                <div class="tarea">
                <h3> Nombre</h3>
                <h3>Apellido</h3>
                <h3>Teléfono</h3>
                 </div>
            </div>
    {
      items.map((item) => (
        <Item item={item} />     
      ))
    }
    </>
)
}
export default Items
