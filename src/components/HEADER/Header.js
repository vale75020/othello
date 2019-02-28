import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    render() {
        return (
            <div>
                
                <div className="players">
                    <div className={this.props.whosTurn === 'black' ? 'player-black active':'player-black inactive'}>PLAYER BLACK ({this.props.scores['black']})</div>
                    <h1>REVERSI</h1>
                    <div className={this.props.whosTurn === 'white' ? 'player-white active' : 'player-white inactive'}>PLAYER WHITE ({this.props.scores['white']})</div>
                </div>
            </div>
        );
    }
}

export default Header;
