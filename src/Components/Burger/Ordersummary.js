import React, { Component } from 'react';
import './Ordersummary.css';
import Button from 'react-bootstrap/Button';


class Ordersummary extends Component{


    render(){

        const ingredientSummary=Object.keys(this.props.ingredients)
            .map(igKey=>{
            return(
                    <li key={igKey}>{igKey}:{this.props.ingredients[igKey]}</li>
            ) ;
        });


        return(
            <div>
            
                <ul className="ulorder">
                     {ingredientSummary}
                </ul>
                <p><strong>total price:{this.props.totalprice.toFixed(3)}</strong></p>
                <div className="btns ">
                    <Button variant="success" onClick={this.props.purchasecontinueHandler}>Continue</Button>
                    <Button variant="danger" onClick={this.props.purchasecancelHandler}>Cancle</Button>
                </div>
          
            </div>

        );
    }


    


}


export default Ordersummary;