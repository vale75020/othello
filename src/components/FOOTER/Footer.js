import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <button onClick={this.props.reset}>RESET</button>
            </div>
        );
    }
}

export default Footer;
