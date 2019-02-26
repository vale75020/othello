import React from 'react';
import "./cellule.css"

const Cellule = (props) => {
    
    return(
        <div className="cell">
            <div className = {props.value ? props.value== "y" ? 'pion noir' : 'pion blanc' : ""}>
           
            </div>
        </div>
    )
}

export default Cellule;