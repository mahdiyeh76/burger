import React,{Component} from 'react';
import Burger from '../Burger/Burger';
import BurgerControls from '../BurgerControls/BurgerControls';
import Modal from '../Burger/Modal';
import Ordersummary from '../Burger/Ordersummary';




const INGREDIENTS_PRICE={
    salad:0.5,
    meat:2,
    cheese:1
}

export default class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            meat:0,
            cheese:0

        },
        totalprice:4,
        purchase:false,
        purchasing:false
    }


    Updatepurchase (ingredients) {

        // const ingredients={...this.state.ingredients}

        const sum = Object.keys(ingredients)
        .map(igkey=>{
            return ingredients[igkey];
        })

        .reduce((sum,el)=>{
            return sum + el
        },0);

        this.setState({purchase:sum > 0});

    }





    addIngredients=(type)=>{

        const OldCount=this.state.ingredients[type];
        const UpdatedCount=OldCount+1;
        const UpdatedIngredients={...this.state.ingredients};
        UpdatedIngredients[type]=UpdatedCount;

        const priceaddition=INGREDIENTS_PRICE[type];
        const Oldprice=this.state.totalprice;
        const newprice=Oldprice +priceaddition;

        this.setState({totalprice:newprice,ingredients:UpdatedIngredients});
        this.Updatepurchase(UpdatedIngredients);



    }

    removeIngredients=(type)=>{

        const OldCount=this.state.ingredients[type];
        if(OldCount <= 0){
            return;
        }
        const UpdatedCount=OldCount-1;
        const UpdatedIngredients={...this.state.ingredients};
        UpdatedIngredients[type]=UpdatedCount;

        const pricededuction=INGREDIENTS_PRICE[type];
        const Oldprice=this.state.totalprice;
        const newprice=Oldprice -pricededuction;

        this.setState({totalprice:newprice,ingredients:UpdatedIngredients});
        this.Updatepurchase(UpdatedIngredients);

    }

    purchaseHandler(){
        this.setState({purchasing:true});
    }


    render(){

        const disabledInfo={...this.state.ingredients};
        for(let key in disabledInfo ){
            disabledInfo[key]=disabledInfo[key<=0]
        }
        
        return(
            <div>
                <Modal>
                    <Ordersummary  ingredients={this.state.ingredients}/>
                </Modal>

                <div className="container">
                    <Burger ingredients={this.state.ingredients} />
                </div>
                
               

                <BurgerControls 
                
                    ingredientadded={this.addIngredients}
                    ingredientremoved={this.removeIngredients}
                    totalprice={this.state.totalprice}
                    disabledInfo={disabledInfo}
                    purchaseable={this.state.purchase}
                    ordered={this.purchaseHandler}
                />

            </div>
          
        );
    }
}