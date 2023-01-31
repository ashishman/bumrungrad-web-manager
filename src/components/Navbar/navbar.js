import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import siteLogo from '../../sitelogo.png'
import logo from '../../download.svg'

const Navbar = () => {
    const navigate = useNavigate();

    const appointment = () => {
        navigate('/appointment');
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={siteLogo} width='280px' height='100px' to="/" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link className="nav-link animate__animated animate__backInUp" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link animate__animated animate__backInUp" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link animate__animated animate__backInUp" to="/packages">Packages</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link animate__animated animate__backInUp" to="/contact-us">Contact us</Link>
                        </li>
                    </ul>
                    <div className="d-flex book-btn">
                        <button className="btn btn-outline-danger" type="submit" onClick={appointment}>Book An Appointment</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;