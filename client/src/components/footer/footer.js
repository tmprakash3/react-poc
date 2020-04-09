import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-bg">
                    <p className="text-center white-fg">&copy; Copyrights 2020. All Rights Reserved.</p>
                </div>
            </div>
        );
    }
}

export default Footer;