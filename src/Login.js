import React, { useState } from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase"
import { useStateValue } from './StateProvider'       //
import ErMessage from "./ErMessage"


function Login() {
     const [state, dispatch] = useStateValue(); //
     //console.log('this is the err.value>> ',state.err.value);
    let error;                 //
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setpasword] = useState('');



    const printError = () =>{
        // call the changer of the state item into the data layer
        dispatch({
            type: "ERROR_MESSAGE",
        })
    }



    const signIn = e =>{
        e.preventDefault(); {/*this is because we dont want to refresh when submit!!!*/}
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message),printError() )

    }

    const register = e => {
        e.preventDefault();  {/*this is because we dont want to refresh when submit!!!*/}

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                        //it succesfuly created an user with email and password
                    console.log(auth);
                    if (auth) {                  //αν πέτυχε το register του χρήστη, πήγαινε στην Αρχική
                        history.push('/')
                    }
                    })
            .catch(error => (alert(error.message)));
            

        //some fancy firebase register shiiitttt.
    }
 
       error = <ErMessage value= {state.err.value} /> ;            //Εμφανίζει ένα error message στην οθόνη κάτω από το κουμπί Sign In

    return (
        
        <div className="login">
            <Link to = "/">
                <img
                className = "loginLogo" 
                src="https://cdn2.downdetector.com/static/uploads/c/300/741da/amazon.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' 
                        value = {email} 
                        onChange= {e =>setEmail(e.target.value)}/>  {/*e stands for event */}

                    <h5>Password</h5>
                    <input type='password'
                        value={password}
                        // pattern = ".{8,}" // αν θελουμε να ειναι ο κωδικος πανω απο 8 χαρακτήρες
                        onChange= {e =>setpasword(e.target.value)}/> {/*e stands for event */}

                    <button type= 'submit' onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                
                {error}
                
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick= {register} className="login__registerButton">Create your Account</button>
            </div>
        
        </div>

            
    )
}

export default Login
