import React,{ useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Login';
import { auth} from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51IBSGuFHdDlBsYi8i9Rqh1Ixe6eL6f1xn53SClJQiqTNkfzAF5SoekKv5ND8D8ur0ps8QhUTbstSr0Ac75gIDPE200fzMBSYa3"
  );

function App() {
  const[{},dispatch] = useStateValue();

  //useEffect είναι ένας Listener της React
  useEffect(() => {
    // will only run once when the App component loads...

    auth.onAuthStateChanged( authUser =>{
      console.log ('The User Is: ', authUser);

      if (authUser) {       // the users just loggged in / the user was logged in
        dispatch({
          type : 'SET_USER',
          user: authUser
        });

      } else{               // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        });
      }
        
    }) 
  },[]) // καθε φορά που αλλάζει μία μεταβλιτή μέσα στα [], το useEffect τρέχει.

  return (
    //BEM CONVENTION
    <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/checkout"> 
              <Header />  
              <Checkout />
            </Route>
            <Route path="/payment" >
              <Header />
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </Route>
            <Route path="/" >
              <Header />
              <Home/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;