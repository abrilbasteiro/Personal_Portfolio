import './Navbar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../images/logowhite.png';
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logoWhite} alt="" className='logo'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="close"><AiOutlineClose className='navbar-toggler-close-icon'/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/work'>My work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar