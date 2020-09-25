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
                    valid:false,
                    touched:false
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
                    valid:false,
                    touched:false
                },

                country:{ 

                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your country'
                    },

                    value: '',
                    validation:{
                        required:true,
                        minLength:4,
                        maxLength:4

                    },
                    valid:false,
                    touched:false
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
                    valid:false,
                    touched:false
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
                    required:true,
                    valid:true
                },
                valid:false,
                touched:false
            }

        },

        loading:false,
        formIsValid:false

    }


    CheckValidity=(value,rules)=>{

        let isValid=true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid=value.minLength >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid=value.minLength <= rules.maxLength && isValid;
        }

        return isValid;

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
        updatedFormElement.isValid=this.CheckValidity(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched=true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

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
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}

                        />
                    )
                )}
                   
                   
                    
                    <Button variant="success"className="mt-5" disabled={this.state.formIsValid}>Order</Button>
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