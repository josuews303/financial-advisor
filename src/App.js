import React from 'react';
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import './App.css';
import Risk from './pages/Risk';
import Calculator from './pages/Portfolio';
import Header from "./components/Header";

function App() {
  
  return (
    <Browser>
    <Header/>
          <Switch>
            <Route path="/financial-advisor" exact component={Risk} />
            <Route path="/calculator" exact component={Calculator} />
          </Switch>
    </Browser>
  );
}

export default App;
