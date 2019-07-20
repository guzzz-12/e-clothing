import React from 'react';
import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
