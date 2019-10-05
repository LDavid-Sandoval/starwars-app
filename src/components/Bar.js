import React from 'react'
import { Link } from 'react-router-dom'

const Bar = (props) => {
    return(
        <div className="container cont">
            <div className="my-2 p-1 bg-dark text-white row lead">
                <Link to={'/'} className="col-sm-3 col link"><p className="text-center m-0 p-2">Home</p></Link>
            </div>
        </div>
    )
}

export default Bar