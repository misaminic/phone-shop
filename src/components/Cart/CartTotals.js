import React from 'react';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';
import PaypalButton from './PaypalButton';

const CartTotals = ({ history }) => {
  const {
    cart,
    clearCart,
    cartSubTotal,
    cartTax,
    cartTotal,
  } = useGlobalContext();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right mr-6">
            <Link to="/">
              {cart.length > 0 ? (
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => clearCart()}
                >
                  clear cart
                </button>
              ) : null}
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <div className="site-paypal">
              <div>
                <PaypalButton history={history} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
