import React from 'react';
import Burger from '../Burger/Burger';
import Button from 'react-bootstrap/Button';

const Checkoutsummary = ( props ) => {
    return(
        <div>
            <h2>
                we hope it tastes well !!
            </h2>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>

            <div className="btns ">
                    <Button variant="success" clicked>Continue</Button>
                    <Button variant="danger" clicked>Cancle</Button>
            </div>
        </div>
    )

}

export default Checkoutsummary;