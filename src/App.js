import React from 'react';
import { Switch, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>       
          <Route exact path="/" component={Home} />
          <Route path= '/about' component={About} />
          <Route path= '/contact' component={Contact} />        
        
          </Switch>    
      </div>
    </Router>    
  );
}
 
export default App;