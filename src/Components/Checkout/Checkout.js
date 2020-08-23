import React ,{Component}from 'react';
import Checkoutsummary from '../Order/Checkoutsummary';


class Checkout extends Component{
    state={
        ingredients:{
            salad:1,
            meat:1,
            cheese:1
        }
    }
    render(){
        return(
            <div className="container">
                    <Checkoutsummary  ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;