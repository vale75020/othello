import React from 'react';
import "./cell.css"

const Cell = (props) => {
    const key = props.key.split('-');
    const = key[0];

    
    return(
        <div className="cell" onClick={() => props.handlePlay(props.indexRow, props.indexCell)}>
            <div className = {props.value ? 'disk '+ props.value  : ''}></div>
        </div>
    )
}

export default Cell;