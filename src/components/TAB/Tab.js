import React, { Component } from 'react';
import Cell from '../CELL/Cell'
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
        whosTurn: 'black',
				scoreBlack: 2,
				scoreWhite: 2,
				message: ''
    }

		canPlay = (indexRow, indexCell) => {
			return this.state.board[indexRow][indexCell] === ''
		}

    handlePlay= (indexRow, indexCell) => {
			if (this.canPlay(indexRow, indexCell)) {
				// we place the disk on the board
				const board = [...this.state.board];
				board[indexRow][indexCell] = this.state.whosTurn;

				// we set the new player turn
				const whosTurn = this.state.whosTurn === 'black' ? 'white' : 'black';

				// we calculate and change the score of the two players
				const scoreBlack = this.state.board.reduce((accumulator, currentLine) => accumulator + currentLine.filter(x => x === 'black').length, 0)
				const scoreWhite = this.state.board.reduce((accumulator, currentLine) => accumulator + currentLine.filter(x => x === 'white').length, 0)

				this.setState({ board, whosTurn, scoreBlack, scoreWhite, message: '' })
			} else {
				this.setState({ message: 'Il y a déjà un pion ici' });
			}
    }

    render() {
        return (
            <div id="tab-wrapper">
								<div>{this.state.message}</div>
                <div id="tab">
                    {this.state.board.map((row, indexRow) => row.map((cell, indexCell) => <Cell key={indexRow+'-'+indexCell} indexRow={indexRow} indexCell={indexCell} value={cell} handlePlay={this.handlePlay} />))}
                </div>
            </div>
        );
    }
}

export default Tab;
