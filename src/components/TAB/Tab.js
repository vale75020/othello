import React, { Component } from 'react';
import Cell from './../CELL/Cell'
import Header from './../HEADER/Header'
import Footer from './../FOOTER/Footer'
import './tab.css'

class Tab extends Component {
    state = {}

		reset = () => {
			this.setState({
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
				scores: { black: 2, white: 2 },
				message: '',
			})
		}

		componentWillMount() {
			this.reset();
		}

		canPlay = (indexRow, indexCell) => {
			return this.possibleDisksToFlip(indexRow, indexCell).length > 0;
		}

		possibleDisksToFlip = (indexRow, indexCell) => {
			const possibleDisksToFlip = [];
			if (this.state.board[indexRow][indexCell] === '') {

				// directions for: 45deg*i, for i=0 to i=7 
				const directionsCoordinates = [[-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1]]

				directionsCoordinates.forEach(coord => {
					let candidateDisksToFlip = [];
					let i = 1;
					let valueNext = '';

					// we check if the next coordinates are on board
					while (indexRow+i*coord[0] >= 0 && indexRow+i*coord[0] <= 7 && indexCell+i*coord[1] >= 0 && indexCell+i*coord[1] <= 7) {
						valueNext = this.state.board[indexRow+i*coord[0]][indexCell+i*coord[1]];

						// if it's the case, we check if next is a disk of the same color - in that case it is not possible to flip any disk in that direction
						if (i === 1 && valueNext === this.state.whosTurn) {
							break;

						} else {
							// otherwise if there is a disk, and not of the same color, it is a candidate for flipping
							if (valueNext && valueNext !== this.state.whosTurn) {
								candidateDisksToFlip.push([indexRow+i*coord[0], indexCell+i*coord[1]])
								i++;

							// if there is a disk - of the same color this time, then we the disks are definitely flippable and we can stop looking in that direction
							} else if (valueNext && valueNext === this.state.whosTurn) {
								candidateDisksToFlip.forEach(x => possibleDisksToFlip.push(x))
								break;

							// else there is no disk there, meaning no disk to flip - we can stop here
							} else {
								break;
							}
						}
					}
				})
			}

			return possibleDisksToFlip;
		}

    handlePlay= (indexRow, indexCell) => {
			if (this.canPlay(indexRow, indexCell)) {
				const board = [...this.state.board];

				// we flip the concerned disks
				this.possibleDisksToFlip(indexRow, indexCell).forEach(x => board[x[0]][x[1]] = this.state.whosTurn);

				// we place the disk on the board
				board[indexRow][indexCell] = this.state.whosTurn;

				// we calculate and change the score of the two players
				const scores = {};
				['black', 'white'].forEach(x => scores[x] = this.state.board.reduce((y, z) => y + z.filter(zz => zz === x).length, 0))

				// we set the new player turn
				const whosTurn = this.state.whosTurn === 'black' ? 'white' : 'black';

				this.setState({ board, whosTurn, scores, message: '' })
			} else {
				this.setState({ message: 'You cant play here' });
			}
		}

    render() {
        return (
					<div>
        		<Header scores={this.state.scores} whosTurn={this.state.whosTurn} />
						<div id="message">{this.state.message}</div>
            <div id="tab-wrapper">
                <div id="tab">
                    {this.state.board.map((row, indexRow) => row.map((cell, indexCell) => <Cell key={indexRow+'-'+indexCell} indexRow={indexRow} indexCell={indexCell} value={cell} handlePlay={this.handlePlay} />))}
                </div>
            </div>
        		<Footer reset={this.reset} />
					</div>
        );
    }
}

export default Tab;
