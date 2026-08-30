// Estructura base desde un componente de clase.
import React from "react";

export default class ComponenteDeClase extends React.Component 
{
    constructor(props)
    {
        console.log("El componente aún no esta montado."); //Escribir clg para autocompletar.
        super(); //Inyectar todo lo de la clase Component.
        this.state = {
            contador: 0,
            nombre: 'César'
        }
    }
    componentDidMount() 
    {
        console.log("El componente ya se encuentra en el DOM (ya esta montado).")
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);
    }
    componentWillUnmount()
    {
        console.log("El componente ha sido eliminado del DOM.")
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log("El estado o las props del componente han cambiado.")
    }

    render() {
        console.log("El componente se dibuja en el DOM.")
        return (
            <>
            <h1>Hola desde componente de clase</h1>
            <p>Contador = {this.state.contador}</p>
            </>
        )
    }
}
