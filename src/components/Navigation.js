import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navigation extends Component{
    render(){
        return(
            <div className="col-sm-3 nav m-0 p-0 bg-secondary btn-group" role="group">
                <Link to={`/films`}>
                    <button 
                        type="button" 
                        className="btn btn-secondary btn-block" 
                    >
                        Films
                    </button>
                </Link>
                <Link to={`/starships`}>
                    <button 
                        type="button" 
                        className="btn btn-secondary btn-block"
                    >
                        StarShips
                    </button>
                </Link>
                <Link to={`/saves`}>
                    <button 
                        type="button" 
                        className="btn btn-secondary btn-block" 
                    >
                        Saves
                    </button>
                </Link>
            </div>
        )
    }
}
export default Navigation