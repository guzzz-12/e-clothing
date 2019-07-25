import React from 'react';
import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import {Route, Switch, Redirect} from "react-router-dom";
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignIn_SignUp/SignIn_SignUp';
import {auth, createUserProfileDocument} from "./firebase/firebaseUtils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";
import Checkout from "./pages/Checkout/Checkout";
import Category from "./pages/Category/Category";

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
          <Route exact path="/shop/:category" component={Category}/>
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() => {
              return this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }}
          />
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
