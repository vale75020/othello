import React from 'react';
import "./cell.css"

const Cell = (props) => {
    return(
        <div className="cell" onClick={() => props.handlePlay(props.indexRow, props.indexCell)}>
            <div className = {props.value ? 'disk '+ props.value  : ''}></div>
        </div>
    )
}

export default Cell;
