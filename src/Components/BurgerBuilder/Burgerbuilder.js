import React,{Component} from 'react';
import Burger from '../Burger/Burger';



export default class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            meat:0,
            cheese:0

        }
    }
    render(){
        return(
            <div className="container">
                <Burger ingredients={this.state.ingredients} />

            </div>
        );
    }
}