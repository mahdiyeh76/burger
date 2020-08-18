import React from 'react';
import BurgerControl from './BurgerControl';
import './BurgerControls.css';


const controls=[
    {label:'salad',type:'salad'},
    {label:'meat',type:'meat'},
    {label:'cheese',type:'cheese'}
]

const BurgerControls = (props) => {
    return(
        <div  >
            <div className="BurgerControls ">
                    <p className="text-center pt-4"> price:{props.totalprice}</p>
                    {controls.map(ctrl=>{
                        return  <BurgerControl
                                     key={ctrl.label}
                                     label={ctrl.label}
                                     added={()=>props.ingredientadded(ctrl.type)}
                                     removed={()=>props.ingredientremoved(ctrl.type)}
                                     disabled={props.disabledInfo[ctrl.type]}
                                    
                       
                                />
                    })} 


                    <button className="orderbtn"  disabled={!props.purchaseable} onClick={props.ordered}>ORDER NOW !</button>
           
            </div>
           

        </div>

    )
    
}

export default BurgerControls;