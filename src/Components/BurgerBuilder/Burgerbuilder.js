import React,{Component} from 'react';
import Burger from '../Burger/Burger';
import BurgerControls from '../BurgerControls/BurgerControls';
import Modal from '../Burger/Modal';
import Ordersummary from '../Burger/Ordersummary';
import Spinner from '../Burger/Spinner';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import axios from '../../axios-orders';




const INGREDIENTS_PRICE={
    salad:0.5,
    meat:2,
    cheese:1
}

class BurgerBuilder extends Component{

    state={
        ingredients:null,
        totalprice:4,
        purchase:false,
        purchasing:false,
        loading:false,
        error:null
    }


    componentDidMount(){
        axios.get('https://react-burger-1ec52.firebaseio.com/ingredients.json')
        .then(response=>{this.setState({ingredients:response.data})})
        .catch(error=>{
            this.setState({error:true})
        });

        };
        
    




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

    purchaseHandler = ( ) => {
        this.setState({purchasing:true});
    }

    purchasecancelHandler =( ) => {

        this.setState({purchasing:false});

    }

    purchasecontinueHandler = ( ) =>{

        this.setState({loading:true});

        // alert('continue!');
        const order={
            ingredients:this.state.ingredients,
            price:this.state.totalprice,
            customer:{
                name:'mahdan',
                address:{
                    city:'dusseldorf',
                    country:'germany'
                },
                email:'mahdan@gmail.com',

            },

            deliverymethod:'fasttest'


        }

        axios.post('/orders.json',order)
        .then(response =>this.setState({loading:false,purchasing:false}))
        .catch(error=>this.setState({loading:false,purchasing:false}));

    }


    render(){

        const disabledInfo={...this.state.ingredients};
        for(let key in disabledInfo ){
            disabledInfo[key]=disabledInfo[key<=0]
        }


        let ordersummary=null;

        let burger=this.state.error ? <p>ingredient's can't  be load</p>:<Spinner />;

        if(this.state.ingredients){

            burger=(<div> 
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
                </div>);


                ordersummary= <Ordersummary  ingredients={this.state.ingredients}
                     purchasecancelHandler={this.purchasecancelHandler}
                     purchasecontinueHandler={this.purchasecontinueHandler}
                     totalprice={this.state.totalprice}
                    />

        }

        if(this.state.loading){

            ordersummary = <Spinner />
        }
         

        return(
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purchasecancelHandler}>
                   {ordersummary}
                </Modal>

                {burger}

            </div>
          
        );
    }
}


export default ErrorHandler(BurgerBuilder,axios);