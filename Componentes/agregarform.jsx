import React from "react"


class agregarform extends React.Component{
    constructor(props){
        super(props)
        this.state={
               nombre: "",
                apellido: "",
                telefono:""
            
        }
    }
    reci0 = (e)=>{
        this.setState({nombre: e.target.value})
    }
    reci1 = (e)=>{
        this.setState({apellido: e.target.value})
    }
    reci2 = (e)=>{
        this.setState({telefono: e.target.value})
    }
    reci(){
       const reci0 =this.reci0
       const reci1 =this.reci1
       const reci2 =this.reci2
    }
    Enviar(contacto){
 
        fetch("http://www.raydelto.org/agenda.php", {
            method: 'POST',
            body: JSON.stringify(contacto),
            hearders: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => alert("The data was send successfully!"))

    }

    render(){
        const {reci} = this.props
        const {Enviar}= this
        const {nombre,apellido,telefono} = this.state
        let contacto={
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        }
            return(

        <div className="Formulario">
            <input 
            value={nombre}
            onChange={this.reci0}
            className="Nombre" 
            type="text"ç
            placeholder="Nombre"/>
            <input
            value={apellido}
            onChange={this.reci1}
            className="Apellido" type="text"
            placeholder="Apellido"/>
            <input 
            value={telefono}
            onChange={this.reci2}
            className="Telefono" type="text"
            placeholder="Telefono"/>
            <button onClick={ ()=>Enviar(contacto) } className="enviar">Enviar</button>
            
        </div>
    )
    }
}
export default agregarform