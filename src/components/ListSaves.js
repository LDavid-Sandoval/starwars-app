import React from 'react';
import Loading from '../components/Loading';
import useFetch from '../Hooks/UseFetch'
import CardSave from './CardSave'

//Hooks
const ListSaves = () => {

    const { data, loading} =  useFetch(`https://dsstarwars-api.herokuapp.com/api/starship`);
    if (loading)
        return <Loading />
    return(
        <div className="center col">
            <div className="row">
                {   
                    data.map((save) => {
                        return(
                            <CardSave
                                key={save._id}
                                {...save}
                                id={save._id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )

}
export default ListSaves