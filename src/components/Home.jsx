import React from 'react'
import Header from './Header';
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__container">
        <img className="home__image" src="https://m.media-amazon.com/images/I/71hAX5ZQkzL._SX3000_.jpg" alt="Listen Free on Amazon Music"/>
        <div className="home__row">
          <Product 
            id="123123123"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={4}
          />
          <Product 
            id="49538094"
            title="KitchenAid KP26M1XER Professional 600 Series 6-Quart Bowl-Lift Stand Mixer, Empire Red"
            price={729.99}
            image="https://m.media-amazon.com/images/I/81BOGWDXGHL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product 
            id="43523456"
            title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
            price={54.99}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SX679_.jpg"
            rating={3}
          />
          <Product 
            id="8901234759"
            title="2021 Apple 12.9-inch iPad Pro (Wi-Fi, 256GB) - Space Grey"
            price={1479.99}
            image="https://m.media-amazon.com/images/I/61gQ245+F-S._AC_SX679_.jpg"
            rating={4}
          />
          <Product 
            id="834824773"
            title="PlayStation 5 Console - PlayStation 5 Disc Edition"
            price={699.99}
            image="https://m.media-amazon.com/images/I/619BkvKW35L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product 
            id="92389239"
            title="Samsung CHG90 Series 49-Inch Curved Gaming Monitor 1ms/144hz (LC49HG90DMNXZA) "
            price={2515.99}
            image="https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SX679_.jpg"
            rating={5}
          />
        </div>

      </div>
    </div>
  )
}

export default Home
