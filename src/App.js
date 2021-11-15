import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Checkout from './components/Checkout';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import { useStateValue } from './StateProvider';


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
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/checkout" element={<Checkout />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
