import React,{Component} from 'react';
import './App.css';
import Header from './Components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BurgerBuilder from './Components/BurgerBuilder/Burgerbuilder';
import Checkout from './Components/Checkout/Checkout';
import {Router,Switch} from 'react-router-dom';

class App extends Component {
  // state={
  //   show:true
  // };

  // componentDidMount(){
  //   setTimeout( ()=>{
  //       this.setState({show:false});
  //   },5000)
  // }
  render(){
    return (
      <div className="App">
          <Header />
          <Switch>
            <Router path="/" exact component={BurgerBuilder} />
            <Router path="/checkout" component={Checkout} />
          </Switch>
         
          {/* <BurgerBuilder /> 
          <Checkout /> */}
          
      </div>
    );

  }
 
}

export default App;
