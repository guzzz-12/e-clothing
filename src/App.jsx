import React from 'react';
import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignIn_SignUp from './pages/SignIn_SignUp/SignIn_SignUp';
import {auth, createUserProfileDocument} from "./firebase/firebaseUtils";

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if(user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        }));
      }
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/signin" component={SignIn_SignUp}/>
        </Switch>
      </div>
    )    
  }
}

export default App;
