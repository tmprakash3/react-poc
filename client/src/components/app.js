import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Sidenav from './sidenav/sidenav';
// import { AUTH_USER } from '../actions/types';
import * as actions from '../actions';
import { connect } from 'react-redux';

import './app.scss';

const token = localStorage.getItem('auth_jwt_token');


class App extends React.Component {
  renderSideNav() {

    if (this.props.authenticated) {

      return ([
        <Sidenav /> 
      ])
    }
  }

    constructor(props) {
      super(props);
      this.state = { isLoggedIn: false };
    }

    render() {
      return (
        <div>
          <Header />
          <div className='container-fluid'>
            <div className="row">
              <div className="col-md-3 left-content">
               {this.renderSideNav()}
              </div>
              <div className="col-md-9 right-content">
                {this.props.children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }


  function mapStateToProps({auth}){
    return {
        authenticated: auth.authenticated
    }
}

export default connect(mapStateToProps, actions)(App)
