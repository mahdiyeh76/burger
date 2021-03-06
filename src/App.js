import React,{Component} from 'react';
import './App.css';
import Header from './Components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BurgerBuilder from './Components/BurgerBuilder/Burgerbuilder';
import Checkout from './Components/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom';
import Orders from './Components/Checkout/Orders/Orders';

class App extends Component {


  // state={
  //   // show:true

  // };



  // componentDidMount(){
  //   // setTimeout( ()=>{
  //   //     this.setState({show:false});
  //   // },5000)

 
  // }


 
  render(){
    
    // console.log(window.location,'history'); 
    return (

    
      <div className="App">
          <Header />
          <Switch>
           
            <Route path="/" exact={true} component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/Orders" component={Orders} />
          </Switch>
         
          {/* <BurgerBuilder /> 
          <Checkout /> */}
          
      </div>
    );

  }
 
}

export default App;
