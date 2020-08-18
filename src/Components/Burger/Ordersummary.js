import React from 'react';
import './Ordersummary.css';



const Ordersummary =(props)=>{

    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>{
    return(
        <li>{igKey}:{props.ingredients[igKey]}</li>

        ) ;
    });


    return(
        <div>
            
            <ul className="ulorder">
               {ingredientSummary}
            </ul>

        </div>
    )
}


export default Ordersummary;