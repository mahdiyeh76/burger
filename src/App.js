import React,{Component} from 'react';
import './App.css';
import Header from './Components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BurgerBuilder from './Components/BurgerBuilder/Burgerbuilder';

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
          <BurgerBuilder /> 
          
      </div>
    );

  }
 
}

export default App;
