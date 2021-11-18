import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  'pk_test_51JwvUhAhI5OW0Wr3Lv6qtSvkfaoaZ59tvHFNKEQrxPuS0O7QLB6turvofWlbzU4eBwBkXRhzN95RnwVPXD2tjn9b00v0XTQyus');


function App() {

  const[{ basket, user }, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[])

  return (
    <Router>
      <div className="app">
        <Elements stripe={promise}>
          <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
              <Route exact path="/payment" element={<Payment/>} />
          </Routes>
        </Elements>
      </div>
    </Router>
  );
}

export default App;
