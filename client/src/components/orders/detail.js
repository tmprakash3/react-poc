import React, { Component } from 'react';

class OrderDetailPage extends Component {
    constructor(props) {
        console.log("props");
        console.log(props);
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <h2>Order Detail Page</h2>
            </div>
        );
    }
}

export default OrderDetailPage;


