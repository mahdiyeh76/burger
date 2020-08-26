import React ,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import axios from '../../../axios-orders';
import Spinner from '../../Burger/Spinner';

class ContactData extends Component{

    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
            
        },
        loading:false

    }


    orderHandler =(event)=>{
        event.preventDefault();
        // console.log(this.props.ingredients);


        this.setState({loading:true});

        alert('continue!');
        const order={
            ingredients:this.props.ingredients,
            price:this.props.totalprice,
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
        .then(response =>{this.setState({loading:false });
            this.props.history.push('/Orders');
            })
            
        .catch(error=>this.setState({loading:false }));

    }


    render(){
        let form = (

            <Form.Group>
                    <Form.Control type="text" placeholder="enter your name" name="name" />
                    <br />
                    <Form.Control type="email" placeholder="enter your email" name="email" />
                    <br />
                    <Form.Control type="text" placeholder="enter street" />
                    <br />
                    <Form.Control type="text" placeholder="enter postalcode" />
                    <br />
                    <Button variant="success" onClick={this.orderHandler}>Order</Button>
            </Form.Group>
        );


        if(this.state.loading){
            form=<Spinner />;
        }
        return(
            <div>
                <h2>plz enter data</h2>
                {form}

            </div>
        );
    }
}


export default ContactData;