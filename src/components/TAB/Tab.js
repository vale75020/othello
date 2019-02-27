import React, { Component } from 'react';
import Cell from '../CELLULE/Cell'
import './tab.css'

class Tab extends Component {
    state = {
        board: [
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','white','black','','',''],
            ['','','','black','white','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','','']
        ],
        round: 'black'
    }

    handlePlay= (indexRow, indexCell) => {
        
    }

    render() {
        return (
            <div id="tab-wrapper">
                <div id="tab">
                    {this.state.board.map((row, indexRow) => row.map((cell, indexCell) => <Cell key={indexRow+'-'+indexCell} value={cell} handlePlay={this.state.handlePlay} />))}
                </div>
            </div>
        );
    }
}

export default Tab;