import React from 'react'
import Logo from '../img/logo.png'

const Header = () => (
    <div className="bg-dark text-white ">
        <div className="container  ">
            <div className="d-flex align-items-center justify-content-center row">
                <div className="col-md-4 col">
                    <img src={Logo} height="70" alt="Star Wars" />
                </div>
                <p className="title col-md-8 col">Prueba Técnica</p>
            </div>
        </div>
    </div>
)
export default Header