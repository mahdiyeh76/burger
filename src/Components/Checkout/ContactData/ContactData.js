import React ,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import axios from '../../../axios-orders';
import Spinner from '../../Burger/Spinner';
import Input from '../../Burger/Input';


class ContactData extends Component{

    state={
        orderForm:{
            
                name:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },

                    value: '',
                    validation:{
                        required:true
                    },
                    valid:false
                },
               
                city:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your city'
                    },

                    value: '',
                    validation:{
                        required:true
                    },
                    valid:false
                },

                country:{ 

                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your country'
                    },

                    value: '',
                    validation:{
                        required:true
                    },
                    valid:false
                },
               

                email:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Youremail'
                    },

                    value: '',
                    validation:{
                        required:true
                    },
                    valid:false
                },

            
            deliverymethod:{
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },

                value: '',
                validation:{
                    required:true
                },
                valid:false
            }

        },

        loading:false

    }


    orderHandler =(event)=>{
        event.preventDefault();
        // console.log(this.props.ingredients);


        this.setState({loading:true});

        alert('continue!');
       
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post('/orders.json',order)
        .then(response =>{this.setState({loading:false });
            this.props.history.push('/Orders');
            })
            
        .catch(error=>this.setState({loading:false }));

    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }


    render(){

        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        
        let form = (
            
            

            <Form.Group  onSubmit={this.orderHandler}>

                {formElementsArray.map( formElement => (
                        <Input

                            key={formElement.id}
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig} 
                            value={formElement.config.value} 
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}

                        />
                    )
                )}
                   
                   
                    
                    <Button variant="success"className="mt-5" >Order</Button>
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