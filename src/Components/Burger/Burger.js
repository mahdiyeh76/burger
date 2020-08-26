import React from 'react';
import BurgerIngredient from './Burgeringredients';
import './burgeringredient.css';
// import {withRouter} from 'react-router-dom';


const Burger = (props) =>{

    // console.log(props);
    let transformedIngredients = Object.keys( props.ingredients )
    .map( igKey => {
        return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        } );
    } )
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p className="text-center ">Please adding ingredients!</p>;
    }


    return(
        <div className="Burger ">
           <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
           <BurgerIngredient type="bread-bottom"/>
           
        </div>

    );
}


export default Burger;