import React from 'react';
import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import {Route, Switch, Redirect} from "react-router-dom";
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import {auth, createUserProfileDocument} from "./firebase/firebaseUtils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";
import Checkout from "./pages/Checkout/Checkout";
import Category from "./pages/Category/Category";
import {emptyCart} from "./redux/cart/cartAction";

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
      if(!user) {
        this.props.clearCart()
      }
      this.props.getUser(user);
    })

    //Agregar el shopData a la base de datos
    // let shopDataArray = [];
    // for(let key in this.props.shopData) {
    //   shopDataArray.push({
    //     title: this.props.shopData[key].title,
    //     items: this.props.shopData[key].items
    //   })
    // };
    
    //Importar desde firebaseUtils:
    // addCollectionAndDocuments("collections", shopDataArray);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" render={(props) => <Shop {...props} />}/>
          <Route exact path="/shop/:category" render={(props) => <Category {...props} />}/>
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
    },
    clearCart: () => {
      dispatch(emptyCart())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    // shopData: state.shopData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
