import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import "./Subtotal.css";

function Subtotal() {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
          <p>
            {/* Subtotal (0 items): */}
            Subtotal ({basket.length} items)
            {/* <stong>0</stong> */}
            <stong>{` ${value}`}</stong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
          </>
        )}
        decimalScale={2}
        // value={basket.value}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
