import { SportsBasketball } from '@mui/icons-material'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import "./Subtotal.css"

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
          <p>
            Subtotal (0 items):
            {/* Subtotal ({basket.length} items) */}
            <stong>0</stong>
            {/* <stong>{` ${value}`}</stong> */}
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
          </>
        )}
        decimalScale={2}
        value={0}
        // value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
