import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return(
            <div className="center col">
                <div className="col-md-8 ">
                    <h2 className="display-4 lead">Bienvenido</h2>
                    <p className="lead">Esta es una prueba de la API de Star Wars en la que podrás listar las películas y sus naves, además de poder editar y guardar tus propias naves con base en las que da la API</p>
                    <p className="lead"><strong>Selecciona una opción del menu del lado izuierdo</strong></p>
                </div>
            </div>
        )
    }
}

export default Welcome