import React, { Component } from 'react';
// import axios from 'axios';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            users: [],
            error: null
        };    
    }
    
    fetchProducts() {
        fetch('http://www.json-generator.com/api/json/get/bVkFRkdJQi?indent=2')
        .then(response => response.json())
        .then(data => this.setState({
            users: data,
            isLoading: false
        }))
        .catch(error => this.setState({error, isLoading: false}));
    }

    componentDidMount() {
        this.fetchProducts();
    }

    render() {
        const { isLoading, users, error } = this.state;
        return (
            <div>
                {error ? <p>{error.message} </p> : null}
                {!isLoading ? (
                    users.map(user => {
                        const { username, name, email } = user;
                        return (
                            <div key={user.index}>
                            <p>Name: {name}</p>
                            <p>Email Address: {email}</p>
                            <hr />
                          </div>
                        )
                    })
                ) : (
                    <h3> Loading data...</h3>
                )}
            </div>
        );
    }
}

export default Orders;