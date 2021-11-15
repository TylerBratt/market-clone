import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
    //firebase login stuff here
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        console.log(auth)
          navigate('/', {replace: true})
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    // firebase register stuff here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          navigate('/', {replace: true})
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to='/'>
        <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG12.png" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>Email</h5>
          <input 
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button 
            type='submit'
            onClick={signIn}
            className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing in you agree to the FAKE AMAZON CLONE PAGE Conditions of Use & Sale.  Please see our Policy Notice, our Cookies Notice and out Interest-Based Ads Notice.
        </p>

        <button
          type='submit'
          onClick={register}
          className="login__registerButton">Create an Account</button>
      </div>
    </div>
  )
}

export default Login
