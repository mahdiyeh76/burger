import React from 'react';
import './BurgerControls.css';


const BurgerControl = (props) =>{
    return(
       <div className="buildercontrol ">
            <div className="d-flex cntl">
                <span className="Label">{props.label}</span>
                <button className="less" onClick={props.removed} disabled={props.disabled}>less</button>
                <button className="more" onClick={props.added} >more</button>
            </div>
       </div>
    )

}




export default BurgerControl;