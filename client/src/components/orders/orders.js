import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import OrderDetailPage from './detail'
import './order.scss';

import { Card, CardContent, Typography, Button, CardActions, Grid } from '@material-ui/core';
import Axios from 'axios';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            orders: [],
            error: null
        };
        // this.goToDetailPage = this.goToDetailPage.bind(this, order);

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

    goToDetailPage(order) {
        console.log("clicked on detail page");
        console.log(order);
        console.log(this.props);
    }

    render() {

        const { isLoading, orders, error } = this.state;
        
        return (
            <div className="order-container">
                <div className="appBar">
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    style={{padding: "8px 16px"}}>
                        <Grid container item xs={8}>
                            <Typography variant="h5">My Orders</Typography>
                        </Grid>
                        <Grid container item xs={4} className="order-btn">
                            <Button variant="contained" color="primary">Create Service</Button>
                        </Grid>
                    </Grid>
                </div>
                <Grid direction="column" className="order-card" >
                    {error ? <p>{error.message} </p> : null}
                    {!isLoading ? (
                        orders.map((order, index) => {
                            // const { username, name, email } = user;
                            return (
                                <Card className="itemCard" key={order.id} onClick={this.goToDetailPage.bind(this, order)}>
                                    <CardContent>
                                        <Grid item xs={12} md={12} >
                                            <Typography gutterBottom variant="h6">
                                                {order.customer.first_name + ' ' + order.customer.last_name}
                                            </Typography>
                                            <Typography gutterBottom variant="body1">
                                                {order.email}
                                            </Typography>

                                            <Grid className="rowContent">
                                                <Grid item xs={4}>
                                                    <Typography variant="body2" gutterBottom>
                                                        <span className="label">Phone:</span> {order.phone}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        <span className="label">Created:</span> {order.created_at}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        <span className="label">Payment Status:</span> {order.financial_status == 'partially_refunded' ? 'Partially Refunded' : order.financial_status}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography variant="body2" gutterBottom>
                                                        <span className="label">OrderID:</span> {order.id}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        <span className="label">Status:</span> <span style={{ color: order.fulfillments[0].status.toLowerCase() == 'failure' ? 'red' : (order.fulfillments[0].status.toLowerCase() == 'success'? 'green' : 'black')}}>{order.fulfillments[0].status}</span>
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        <span className="label">Tracking:</span> {order.fulfillments[0].tracking_number}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography variant="body2" gutterBottom>
                                                        <span className="label">Subtotal:</span> {order.currency + ' ' + order.subtotal_price}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        <span className="label">Tax:</span>{order.currency + ' ' + order.total_tax}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom>
                                                        <span className="label">Total:</span> {order.currency + ' ' + order.total_price}
                                                    </Typography>
                                                    <Link to={`/orders/details/${order.id}`}>Detail</Link>
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
                

            </div>
        );
    }
}

export default Orders;