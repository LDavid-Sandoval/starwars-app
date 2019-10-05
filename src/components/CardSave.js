import React from 'react';
import { Link } from 'react-router-dom';

const CardSave = ({ _id, name,model, manufacturer, max_atmosphering_speed} ) => (
    <div className="col-md-6 mar">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title lead"><strong>{name}</strong></h5>                
                <p className="card-text"><strong>Model: </strong> {model}</p>
                <p className="card-text"><strong>manufacturer: </strong> {manufacturer}</p>
                <p className="card-text"><strong>Speed: </strong> {max_atmosphering_speed}</p>
                <p className="card-text"><strong>ID Database: </strong> {_id}</p>
                <Link to={`/save/${_id}`}><button className="btn btn-primary">Edit</button></Link>
                <Link to={`/delete/${_id}`}><button className="mx-3 btn btn-danger">Delete</button></Link>
            </div>
        </div>
    </div>
)

export default CardSave