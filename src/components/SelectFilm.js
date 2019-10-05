import React, { Component } from 'react'
import ListFilms from './ListFilms'

const SelectFilm = () => {
    return(
        <div className="col-sm-9">
            <p className="lead "><strong>Debes seleccionar una pelicula para ver las naves disponibles</strong></p>
            <ListFilms/>
        </div>
    )
}
export default SelectFilm 