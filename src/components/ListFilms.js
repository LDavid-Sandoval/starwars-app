import React from 'react';
import Loading from '../components/Loading';
import useFetch from '../Hooks/UseFetch'
import urlSWAPI from '../Config'
import Films from './Films'

//Hooks
const ListFilms = () => {

    const { data, loading} =  useFetch(`${urlSWAPI}/films`);
    if (loading)
        return <Loading />
    return(
        <div className="center col">
            <div className="row">
                {   
                    data.results.map((film) => {
                        let id = film.url.split('/')[film.url.split('/').length - 2];
                        return(
                            <Films
                                key={id}
                                {...film}
                                id={id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ListFilms