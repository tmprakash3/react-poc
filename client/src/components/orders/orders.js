import React, { Component } from 'react';
import axios from 'axios';
import './order.scss';

import { Card, CardContent, Typography, CardActions, Grid } from '@material-ui/core';
import Axios from 'axios';

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
        Axios.get('http://localhost:8000/orders')
            .then(response => {
                const orders = response.data;
                this.setState({ orders: orders.orders, isLoading: false })
            })
            .catch(error => this.setState({ error, isLoading: false })
            );
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

    goDetailPage() {
        console.log("clicked on detail page")
    }

    render() {
        const { isLoading, orders, error } = this.state;
        console.log("orders in render method:");
        console.log(this.state);
        return (
            <Grid direction="column" className="order-card" >
                {error ? <p>{error.message} </p> : null}
                {!isLoading ? (
                    orders.map((order, index) => {
                        // const { username, name, email } = user;
                        return (
                            <Card className="itemCard" key={order.id} onClick={(order) => this.props.history.push('/orders/details/:(order.id)')}>
                                <CardContent>
                                    <Grid item xs={12} md={12} >
                                        <Typography gutterBottom variant="h6">
                                            {order.customer.first_name + order.customer.last_name}
                                        </Typography>
                                        <Typography gutterBottom variant="body1">
                                            {order.email}
                                        </Typography>

                                        <Grid className="rowContent">
                                            <Grid item xs={4}>
                                                <Typography variant="body2" gutterBottom>
                                                    Phone: {order.phone}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Created: {order.created_at}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Payment Status: {order.financial_status == 'partially_refunded' ? 'Partially Refunded' : order.financial_status}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="body2" gutterBottom>
                                                    OrderID: {order.id}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Status: <span style={{color: order.fulfillments[0].status == 'failure' ? 'red': 'black'}}>{order.fulfillments[0].status}</span>
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Tracking: {order.fulfillments[0].tracking_number}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="body2" gutterBottom>
                                                    Subtotal: {order.currency + ' ' + order.subtotal_price}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Tax: {order.currency + ' ' + order.total_tax}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Total : {order.currency + ' ' + order.total_price}
                                                </Typography>
                                            </Grid>
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