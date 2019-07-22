import React from 'react';
import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignIn_SignUp from './pages/SignIn_SignUp/SignIn_SignUp';
import {auth, createUserProfileDocument} from "./firebase/firebaseUtils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if(user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot => {
          this.props.getUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        }));
      }
      this.props.getUser(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/signin" component={SignIn_SignUp}/>
        </Switch>
      </div>
    )    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => {
      dispatch(setCurrentUser(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
