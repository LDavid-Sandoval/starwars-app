import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../Hooks/UseFetch'
import urlSWAPI from '../Config';

const Starship = (props) => {
    const id = props.id
    const { data } =  useFetch(`${urlSWAPI}/starships/${id}`);
    return(
        <div className="col-md-6 mar">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title lead"><strong>{data.name}</strong></h5>                
                    <p className="card-text"><strong>model: </strong> {data.model}</p>
                    <p className="card-text"><strong>manufacturer: </strong> {data.manufacturer}</p>
                    <p className="card-text"><strong>cost in credits: </strong> {data.cost_in_credits}</p>
                    <p className="card-text"><strong>passengers: </strong> {data.passengers}</p>
                    <p className="card-text"><strong>max atmosphering speed: </strong>{data.max_atmosphering_speed}</p>
                    <Link to={`/edit/${id}`}><button className="btn btn-primary">Edit</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Starship