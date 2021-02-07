import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import { useGlobalContext } from '../../context';

const Cart = (props) => {
  const { cart } = useGlobalContext();

  return (
    <>
      <Title
        name="your"
        title="cart"
        style={{ marginTop: '3rem !important' }}
      />
      <CartColumns />
      {cart.length > 0 ? null : <EmptyCart />}
      <CartList />
      <CartTotals history={props.history} />
    </>
  );
};

export default Cart;
