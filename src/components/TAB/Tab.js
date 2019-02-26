import React, { Component } from 'react';
import Cellule from '../CELLULE/Cellule'
import './tab.css'

class Tab extends Component {
    state = {
        damier: [
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','x','y','','',''],
            ['','','','y','x','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','','']
        ]
    }


    render() {
        return (
            <div id="tab-wrapper">
                <div id="tab">
                    {this.state.damier.map(ligne => ligne.map((cellule, index) => <Cellule key= {index} value={cellule} />))}
                </div>
            </div>
        );
    }
}

export default Tab;