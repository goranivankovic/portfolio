
import React from 'react'
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import  {BrowserRouter,Switch,Route} from 'react-router-dom'
import Particles from 'react-particles-js';
import NpmApi from './components/NpmApi/NpmApi';


export default class App extends React.Component{
  constructor(){
    super()

    this.state={
      ime:'Maja'
    }
    
  }
  render(){
  return (
    <BrowserRouter>
    <div className="app">
      							
          
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} /> 
        <Route exact path="/skills" component={Skills} />
         <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/npm" component={NpmApi} /> 
        <Route exact path="/contact" component={Contact} />  

        <Route exact path='*' component={()=>{return <div><h1>404 NOT FOUND</h1></div>}} />

    

    
       </Switch>
    
    </div>
       
    </BrowserRouter>
  );
}
}

