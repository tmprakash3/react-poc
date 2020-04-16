import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './sidenav.scss';

class Sidenav extends Component {
    render() {
        const menuItems = [
            {
                id: 0,
                title: 'Home',
                state: 'home',
                url: '/home',
                priority: 1,
                imgUrl: 'fas fa-home'
            },
            {
                id: 1,
                title: 'Profile',
                state: 'account',
                url: '/account',
                priority: 2,
                imgUrl: 'fas fa-user'
            },
            {
                id: 2,
                title: 'Services',
                state: 'services',
                url: '/services',
                priority: 3,
                imgUrl: 'fas fa-users'
            },
            {
                id: 3,
                title: 'My Orders',
                state: 'orders',
                url: '/orders',
                priority: 4,
                imgUrl: 'fas fa-shopping-basket'
            },
            {
                id: 4,
                title: 'Events',
                state: 'events',
                url: '/events',
                priority: 5,
                imgUrl: 'fas fa-calendar-alt'
            },
        ];
        const listItems = menuItems.map((nav, index) => 
            <li key={nav.title} id={nav.id}>
                <NavLink to={nav.url} className="nav-link"><i className={nav.imgUrl}></i><span className='ml-8'>{nav.title}</span></NavLink>
            </li>);
        return (
            <div className="sidebar">
                <ul className="list-items">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default Sidenav;