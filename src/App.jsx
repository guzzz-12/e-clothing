import React from 'react';
import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignIn_SignUp from './pages/SignIn_SignUp/SignIn_SignUp';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={SignIn_SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
