// imports - react
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// imorts - components
import Calculator from './components/calculator/Calculator';
import Nav from './components/nav/Nav';
import CalcTitle from './components/calculator/CalcTitle';
import Home from './components/home/Home';
import Quote from './components/quote/Quote';

// imports -styles
import './styles/navStyles.css';
import './styles/homeStyles.css';
import './styles/calculatorStyles.css';
import './styles/general.css';
import './styles/quoteStyles.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="/calculator">
          <div className="container">
            <CalcTitle />
            <Calculator />
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
