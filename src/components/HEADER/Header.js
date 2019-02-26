import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    render() {
        return (
            <div>
                
                <div className="players">
                    <div className="player-one">PLAYER 1</div>
                    <h1>REVERSI</h1>
                    <div className="player-two">PLAYER 2</div>
                </div>
            </div>
        );
    }
}

export default Header;