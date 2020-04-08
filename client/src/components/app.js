import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Sidenav from './sidenav/sidenav';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-3 left-content">
              <Sidenav />
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
