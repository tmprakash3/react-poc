import React, { Component } from 'react';
// import axios from 'axios';
import './order.scss';

import { Card, CardContent, Typography, CardActions, Grid } from '@material-ui/core';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            orders: [],
            error: null
        };
    }

    fetchProducts() {
        fetch('http://localhost:8000/')
            .then(response => response.json())
            .then(data => this.setState({
                orders: data,
                isLoading: false
            }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    // fetchOrders() {
    //     const response = fetch('/orders');
    //     const body = response.json();
    //     if (response.status !== 200) throw Error(body.message);

    //     return body;
    // };

    componentDidMount() {
        this.fetchProducts();
    }

    render() {
        const { isLoading, orders, error } = this.state;
        return (
            <Grid container direction="column" className="order-card">
                {error ? <p>{error.message} </p> : null}
                {!isLoading ? (
                    orders.map(user => {
                        const { username, name, email } = user;
                        return (
                            <Card className="itemCard" key={user.index}>
                                <CardContent>
                                    <Grid item xs={12} md={12} >
                                        <Grid >
                                            <Typography gutterBottom variant="subtitle1">
                                                {name}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {email}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )
                    })

                ) : (
                        <h3> Loading data...</h3>
                    )}
            </Grid>
        );
    }
}

export default Orders;