import React ,{Component}from 'react';
import Checkoutsummary from '../Order/Checkoutsummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';



class Checkout extends Component{
    state={
        ingredients:null,
        price:0
    }


    componentWillMount () {
        const query= new URLSearchParams(this.props.location.search);
        const ingredients={};
        let price=0;
        
        for(let param of query.entries()){
            
            if(param[0] ==='price'){
                price=param[1];
            }else{
                ingredients[param[0]] = +param[1];
            }
            
        }
       
        
        this.setState({ingredients:ingredients,totalprice:price});

        // console.log(this.props.match.path+`/contact-data`);
    }

    checkoutCancelledHandler = ( ) => {
            this.props.history.goBack();

    }


    checkoutContinuedHandler = ( ) => {
        this.props.history.replace( '/checkout/contact-data' );

        // this.props.history.push({
        //     pathname:'./Checkout/contact-data',
            
        // });
        // this.props.history.push(`/Checkout/contact-data`);
        // this.props.history.replace('/checkout/contact-data');
        // history.replace(location)
        // this.props.history.goBack();
    }

   



    render(){
        return(
            <div className="container text-center">
                    <Checkoutsummary  ingredients={this.state.ingredients}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler }
                    
                    
                    />

                    <Route  path={this.props.match.path + '/contact-data'} 
                        render={(props)=>(<ContactData  ingredients={this.state.ingredients }  price={this.state.totalprice} {...props} />)}
                    
                    />
            </div>
        );
    }
}

export default Checkout;