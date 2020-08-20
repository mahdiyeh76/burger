import React from 'react';
import './burgeringredient.css';


const Backdrop = (props) => {
   return(
        props.show ? <div className="backdrop" onclick={props.clicked}></div> : null
   ) 
}

export default Backdrop;