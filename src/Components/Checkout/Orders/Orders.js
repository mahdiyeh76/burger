import React,{Component} from 'react';
import './Orders.css';
import Order from '../../Burger/Order';
import axios from '../../../axios-orders';
import withErrorHandler from '../../ErrorHandler/ErrorHandler';



class Orders extends  Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        axios.get('./orders.json')
        .then(res=>{
            // console.log(res.data);
            const fetchedOrders = [];
            for(let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });

            }
            this.setState({loading:false});
        })

        .catch(err=>{this.setState({loading:false})})
    }
    render(){
        return(
            
                <div className="container mt-5">
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
           
        )
    }
}
export default  withErrorHandler(Orders,axios);