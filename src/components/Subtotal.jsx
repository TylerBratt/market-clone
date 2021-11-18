import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import "./Subtotal.css";
import { useNavigate } from 'react-router';

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
          <p>
            Subtotal ({basket.length} items)
            <stong>{`${value}`}</stong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox"/> This order contains a gift
          </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => navigate('/payment', {replace:true})}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
