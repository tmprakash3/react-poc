import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/imageload.jpg';
import './header.scss';

export default function Header() {
    let user = useSelector(state => state.auth);
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">
                <img src={Logo} className="logo-img" />
                {/* React POC */}
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {/* <ul className="navbar-nav mr-auto">
                        
                    </ul> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>

                    {user.authenticated && (
                        <React.Fragment>
                            <li className="nav-item" key="0">
                                <NavLink className="nav-link" to="/account">My Account</NavLink>
                            </li>
                            <li className="nav-item" key="1" >
                                <NavLink className="nav-link" to="/signout">Log out</NavLink>
                            </li>
                        </React.Fragment>
                    )}

                    {!user.authenticated && (
                        <React.Fragment>
                            <li className="nav-item" key="2">
                                <NavLink to="/signin" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item" key="3">
                                <NavLink to="/signup" className="nav-link">Register</NavLink>
                            </li>
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </nav>
    )
}
