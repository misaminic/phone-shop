import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useGlobalContext } from '../../context';

const PaypalButton = ({ history }) => {
  const { cartTotal, clearCart } = useGlobalContext();
  return (
    <PayPalButton
      amount={cartTotal}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        alert('Transaction completed by ' + details.payer.name.given_name);
        clearCart();
        history.push('/');
        // OPTIONAL: Call your server to save the transaction
        return fetch('/paypal-transaction-complete', {
          method: 'post',
          body: JSON.stringify({
            orderId: data.orderID,
          }),
        });
      }}
      options={{
        clientId: 'sb',
      }}
    />
  );
};

export default PaypalButton;
