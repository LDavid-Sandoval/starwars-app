import React, { Component, Fragment } from 'react'
import Bar from './Bar'
import Navigation from './Navigation'
import Routes from '../Routes'

class Main extends Component{

    render(){
        return(
            <Fragment>
                <Bar/>
                <div className="cont container">
                    <div className="row">
                        <Navigation />
                        <Routes />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Main