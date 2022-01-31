import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import "firebase/compat/auth";
import './Login.css';
import {auth} from './firebase.js'

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   const signIn= e=>{
     e.preventDefault();

      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push("/");
        })
        .catch((error) => alert(error.message));
     //firebase stuff for login
   }

   const register = e =>{
     e.preventDefault();

       auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
           // it successfully created a new user with email and password
           if (auth) {
             history.push("/");
           }
         })
         .catch((error) => alert(error.message));
     
   }
    
    return (
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
            alt=""
          />
        </Link>
        <div className="login_container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' onClick={signIn} className="login_signInButton">Sign In</button>
          </form>
          <p>
            By continuing, you agree to Amazon's clone Conditions of Use and
            Privacy. Be careful! Notice.
          </p>

          <button onClick={register} className="login_registerButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    );
}

export default Login
 