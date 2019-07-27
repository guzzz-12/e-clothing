import React from 'react';
import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import {Route, Switch, Redirect} from "react-router-dom";
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import {auth, createUserProfileDocument, firestore, convertSnapshot} from "./firebase/firebaseUtils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";
import Checkout from "./pages/Checkout/Checkout";
import Category from "./pages/Category/Category";
import { getShopDataFromFirestore } from "./redux/shopData/shopDataAction";

class App extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

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

    //Tomar el shopData desde la base de datos
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      let collectionsObj = {};
      const collectionsArray = await convertSnapshot(snapshot);
      for(let collection of collectionsArray) {
        collectionsObj[collection.routeName] = collection
      }
      this.setState({loading: false})
      this.props.getShopData(collectionsObj)
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
    this.unsubscribeFromSnapshot()
  }

  render() {
    return (
      <div>
        <Header/>
        {this.state.loading ?
          <div className="loader"></div>
          :
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
        }
      </div>
    )    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => {
      dispatch(setCurrentUser(user))
    },
    getShopData: (shopData) => {
      dispatch(getShopDataFromFirestore(shopData))
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
