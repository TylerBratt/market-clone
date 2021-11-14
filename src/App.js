import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/checkout" element={<Checkout />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
