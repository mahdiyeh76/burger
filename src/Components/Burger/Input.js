import React from 'react';
import Form from 'react-bootstrap/Form';




const Input = ( props ) => {
    
       let inputElement=null;
   

    switch(props.elementType){

        case('input'):
            inputElement=<Form.Control {...props.elementConfig} value={props.value}  onChange={props.changed} /> ;
        break;

        case('textarea'):
            inputElement=<Form.Control as="textarea"  {...props.elementConfig}  value={props.value}  onChange={props.changed}/>;
        break;

        case('select'):
            inputElement=   <Form.Control as="select"   {...props.elementConfig}  value={props.value} onChange={props.changed} >
                                {props.elementConfig.options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.displayValue}
                                        </option>
                                ))}
                            </Form.Control>
        break;

        default:
            inputElement=<Form.Control {...props.elementConfig}   value={props.value}  onChange={props.changed}/> ;


    }


    return(
        <div >
            <label>{props.label}</label>
            {inputElement}

        </div>
    )
}

export default Input;