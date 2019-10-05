import React from 'react';
import Loading from '../components/Loading';
import useFetch from '../Hooks/UseFetch'
import urlSWAPI from '../Config'
import Starship from './Starship';

const ListStarships = (props) => {
    let id = props.match.params.id
    const { data, loading} =  useFetch(`${urlSWAPI}/films/${id}`);
    if (loading)
    return <Loading />
    return(
        <div className="center col">
            <div className="row">
                {   
                    data.starships.map((starship) => {
                        let id = starship.split('/')[starship.split('/').length - 2];
                        return(
                            <Starship
                                key={id}
                                id={id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ListStarships