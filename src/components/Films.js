import React from 'react';
import { Link } from 'react-router-dom';

const Films = ({ director, title, producer, release_date, episode_id, id }) => (
        <div className="col-md-6 mar">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title lead"><strong>{title}</strong></h5>                
                    <p className="card-text"><strong>Episode: </strong> {episode_id}</p>
                    <p className="card-text"><strong>Producer(s): </strong> {producer}</p>
                    <p className="card-text"><strong>Director: </strong> {director}</p>
                    <p className="card-text"><strong>Date: </strong> {release_date}</p>
                    <Link to={`/films/${id}`}><button className="btn btn-primary">View Starships</button></Link>
                </div>
            </div>
        </div>
)

export default Films