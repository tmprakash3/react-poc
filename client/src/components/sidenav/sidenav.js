import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import './sidenav.scss';

class Sidenav extends Component {
    render() {
        // const menuItems = [
        //     {
        //         id: 0,
        //         title: 'Home',
        //         state: 'home',
        //         url: 'home',
        //         priority: 1,
        //         imgUrl: 'fas fa-home'
        //     },
        //     {
        //         id: 1,
        //         title: 'Profile',
        //         state: 'account',
        //         url: 'account',
        //         priority: 2,
        //         imgUrl: 'fas fa-user'
        //     },
        //     {
        //         id: 2,
        //         title: 'Services',
        //         state: 'services',
        //         url: 'services',
        //         priority: 3,
        //         imgUrl: 'fas fa-users'
        //     },
        //     {
        //         id: 3,
        //         title: 'My Orders',
        //         state: 'orders',
        //         url: 'orders',
        //         priority: 4,
        //         imgUrl: 'fas fa-shopping-basket'
        //     },
        //     {
        //         id: 4,
        //         title: 'Events',
        //         state: 'events',
        //         url: 'events',
        //         priority: 5,
        //         imgUrl: 'fas fa-calendar-alt'
        //     },
        // ];
        // const listItems = menuItems.map((nav, index) => 
        //     <li key={nav.title} id={nav.id}>
        //         <NavLink to={nav.url} className="nav-link"><i className={nav.imgUrl}></i><span className='ml-8'>{nav.title}</span></NavLink>
        //     </li>);

        return (
            <div className="sidebar">
                <List component="nav" aria-label="sidenavigation items">
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/account">
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/orders">
                        <ListItemIcon>
                            <LocalGroceryStoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItem>
                    <ListItem button component={Link} to="/services">
                        <ListItemIcon>
                            <ThumbUpAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Services" />
                    </ListItem>
                    <ListItem button component={Link} to="/events">
                        <ListItemIcon>
                            <EventIcon />
                        </ListItemIcon>
                        <ListItemText primary="Events" />
                    </ListItem>
                    <Divider />
                    <ListItem button component={Link} to="/signout">
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Signout" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default Sidenav;