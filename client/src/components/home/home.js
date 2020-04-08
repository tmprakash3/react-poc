import React, { Component } from 'react';
import msgImg from '../../assets/images/shoe-size-no-hash-white.svg'
import './home.scss';
import sidenav from '../sidenav/sidenav';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="bannerImage">
          <div className="main-message">
            <img src={msgImg} />
          </div>
        </div>
        <div className="content-container">
          <h3 className="main-headline">Our Favorite Flowers</h3>
        </div>
        <div className="content-container"></div>
        <div className="content-container"></div>
      </div>
    );
  }
}
