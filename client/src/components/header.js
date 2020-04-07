import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavLink } from 'react-router-dom';
// import imageload from './assets/images/imageload.jpg';

class Header extends Component {
    renderSignButton(){
        if (this.props.authenticated){
            return ([
                <li className="nav-item">
                    <NavLink className="nav-link" to="/account">My Account</NavLink>
                </li>,
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signout">Log out</NavLink>
                </li>
            ])
        }else{
            return (
                [   
                    <li className="nav-item" key="2">
                        <NavLink to="/signin" className="nav-link">Login</NavLink>
                    </li>,
                    <li className="nav-item" key="3">
                        <NavLink to="/signup" className="nav-link">Register</NavLink>
                    </li>
                ]
            )
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    {/* <img src={imageload} />                     */}
                    React POC
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
                        {this.renderSignButton()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}){
    return {
        authenticated: auth.authenticated
    }
}

export default connect(mapStateToProps, actions)(Header)