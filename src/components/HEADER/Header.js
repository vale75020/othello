import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    displayDivPlayer = (color) => {
        return <div className={this.props.whosTurn === color ? 'player-' + color + ' active':'player-' + color + ' inactive'}>PLAYER {color.toUpperCase()} ({this.props.scores[color]})</div>
    }

    render() {
        return (
            <div>
                <div className="players">
                    {this.displayDivPlayer('black')}
                    <h1>REVERSI</h1>
                    {this.displayDivPlayer('white')}
                </div>
            </div>
        );
    }
}

export default Header;
